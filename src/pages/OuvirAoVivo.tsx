import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Play, Pause, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const OuvirAoVivo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      <main className="pt-32 pb-12 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Promotional Banner */}
          <Card className="bg-gradient-primary p-6 md:p-8 mb-8 shadow-glow animate-fade-in">
            <div className="text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                PARTICIPE DO SORTEIO
              </h2>
              <p className="text-lg mb-4">Essa Maravilha pode ser sua!</p>
              <button className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                CLIQUE AQUI!
              </button>
            </div>
          </Card>

          {/* Player Section */}
          <Card className="p-8 md:p-12 shadow-card animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              TOCANDO AGORA
            </h1>

            <div className="space-y-8">
              {/* Album Art Placeholder */}
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-primary rounded-2xl shadow-glow flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-2">89.1</div>
                    <div className="text-2xl">FM</div>
                    <div className="text-xl font-semibold">maravilha</div>
                  </div>
                </div>
              </div>

              {/* Song Info */}
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-foreground">
                  Ele & Exaltado
                </h2>
                <p className="text-lg text-muted-foreground">Aline Barros</p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <Slider
                  value={[45]}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>0:04</span>
                  <span>3:45</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-8">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-primary hover:bg-primary-light text-primary-foreground flex items-center justify-center transition-all hover:scale-110 shadow-glow"
                >
                  {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
                </button>
              </div>

              {/* Volume Control */}
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

              {/* Online Listeners */}
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">
                  Ouvintes Online: <span className="text-primary">68</span>
                </p>
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
