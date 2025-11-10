class RadioService {
  private listeners: ((playing: boolean) => void)[] = [];
  private isPlaying = false;
  private audio: HTMLAudioElement | null = null;
  private audioUrl = "https://stm19.srvstm.com:7080/stream";

  // 🔸 Flag que indica se o PlayerGlobal já foi ativado
  private isGlobalPlayerActive = false;

  // =============================
  // 🔹 Áudio
  // =============================
  private getAudio(): HTMLAudioElement {
    if (!this.audio) {
      this.audio = new Audio(this.audioUrl);
    }
    return this.audio;
  }

  // =============================
  // 🔹 Estado e controle de áudio
  // =============================
  getPlayingState() {
    return this.isPlaying;
  }

  subscribe(callback: (playing: boolean) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((fn) => fn !== callback);
    };
  }

  play() {
    this.getAudio().play();
    this.isPlaying = true;
    this.emit();

    // 👉 Se começou a tocar, ativa o PlayerGlobal
    this.activateGlobalPlayer();
  }

  pause() {
    this.getAudio().pause();
    this.isPlaying = false;
    this.emit();
  }

  toggle() {
    this.isPlaying ? this.pause() : this.play();
  }

  setVolume(vol: number) {
    this.getAudio().volume = vol;
  }

  private emit() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }

  // =============================
  // 🔹 Controle do PlayerGlobal
  // =============================

  // Ativa o PlayerGlobal e persiste essa informação
  activateGlobalPlayer() {
    this.isGlobalPlayerActive = true;
    localStorage.setItem("playerGlobalActive", "true");
  }

  // Verifica se o PlayerGlobal já foi ativado
  getGlobalPlayerActive() {
    return (
      this.isGlobalPlayerActive ||
      localStorage.getItem("playerGlobalActive") === "true"
    );
  }

  // (Opcional) reseta o estado global — útil para testes ou logout
  resetGlobalPlayer() {
    this.isGlobalPlayerActive = false;
    localStorage.removeItem("playerGlobalActive");
  }
}

export const radioService = new RadioService();