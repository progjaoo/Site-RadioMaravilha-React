import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Play, Pause, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import bannerAnuncio from "@/assets/anuncio.png";
import capaAlbum from "@/assets/capaAlbum.png";
import { radioService } from "@/lib/radioService";

const API_URL = "https://radiovox.conectastm.com/api-json/Vkc1d1FrNUZNVUpRVkRBOStS";

const OuvirAoVivo = () => {
  const [isPlaying, setIsPlaying] = useState(radioService.getPlayingState());
  const [volume, setVolume] = useState([70]);
  const [musica, setMusica] = useState("Rádio Maravilha 89.1 FM");
  const [artista, setArtista] = useState("");
  const [capa, setCapa] = useState(capaAlbum);

useEffect(() => {
  const unsubscribe = radioService.subscribe((playing) => setIsPlaying(playing));

  return () => {
    if (typeof unsubscribe === "function") {
      unsubscribe();
    }
  };
}, []);



  const togglePlay = () => {
  radioService.toggle();
  radioService.activateGlobalPlayer(); 
};


  useEffect(() => {
    radioService.setVolume(volume[0] / 100);
  }, [volume]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if (
          data.musica_atual.includes("Radio Maravilha") ||
          data.musica_atual.includes("891 Radio Maravilha FM")
        ) {
          setMusica("Rádio Maravilha 89.1 FM");
          setArtista("");
          setCapa(capaAlbum);
        } else if (data.musica_atual.includes(" - ")) {
          const [titulo, artistaNome] = data.musica_atual.split(" - ");
          setMusica(titulo.trim());
          setArtista(artistaNome.trim());
          setCapa(data.capa_musica || capaAlbum);
        }
      } catch (err) {
        console.error("Erro ao buscar dados da rádio:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      <main className="pt-32 pb-12 min-h-screen">
        <div className="container mx-auto px-10 max-w-4x1">
          <section className="py-10 md:py-12">
            <a
              target="_blank"
              href="https://89maravilhafm.com/sorteio/"
              rel="noopener noreferrer"
            >
              <img
                src={bannerAnuncio}
                alt="App Maravilha FM"
                className="w-full max-w-xl mx-auto cursor-pointer hover:opacity-90 transition"
              />
            </a>
          </section>

          <Card className="p-8 md:p-12 shadow-card animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Minas Gerais 89.1 FM
            </h1>

            <div className="space-y-8">
              <div className="flex justify-center">
                <img
                  src={capa}
                  alt={musica}
                  className="w-64 h-64 rounded-2xl shadow-glow object-cover"
                />
              </div>

              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-foreground">{musica}</h2>
                <p className="text-lg text-muted-foreground">{artista}</p>
              </div>

              <div className="flex items-center justify-center gap-8">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-primary hover:bg-primary-light text-primary-foreground flex items-center justify-center transition-all hover:scale-110 shadow-glow"
                >
                  {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
                </button>
              </div>

              <div className="flex items-center gap-4 max-w-xs mx-auto">
                <Volume2 className="text-muted-foreground" size={20} />
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="flex-1"
                />
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OuvirAoVivo;
