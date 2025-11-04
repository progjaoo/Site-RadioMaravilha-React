import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import logoWhite from "@/assets/logo-white.png";

const AssistirAoVivo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      <main className="pt-32 pb-12 min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
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

          {/* Video Player Section */}
          <Card className="overflow-hidden shadow-card animate-fade-in">
            <div className="aspect-video bg-gradient-primary relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <img
                    src={logoWhite}
                    alt="89.1 Maravilha FM"
                    className="w-32 h-32 mx-auto animate-pulse"
                  />
                  <div className="text-6xl font-bold">89.1</div>
                  <div className="text-3xl font-semibold">maravilha</div>
                  <div className="text-xl">FM</div>
                  <div className="mt-6">
                    <div className="inline-block">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-lg font-semibold">AO VIVO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-foreground">
                  Tocando agora: Ele & Exaltado - Aline Barros
                </h2>
                <p className="text-muted-foreground">
                  Transmissão ao vivo da Rádio 89.1 Maravilha FM
                </p>
              </div>
            </div>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center animate-fade-in">
            <p className="text-lg text-muted-foreground">
              Acompanhe nossa programação ao vivo com imagem e som de qualidade
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AssistirAoVivo;
