import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroCarousel from "@/components/HeroCarousel";
import videoStudio from "@/assets/videoStudio.mp4";
import appMockup from "@/assets/anuncioApp.png";
import bannerAnuncio from '@/assets/anuncio.png'
const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero Carousel */}
        <section className="pt-20 md:pt-24">
          <HeroCarousel />
        </section>

        {/* Promotional Banner */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <a target="_blank" href="https://89maravilhafm.com/sorteio/">
                <img
                  src={bannerAnuncio}
                  alt="App Maravilha FM"
                  className="w-1-- md:w-100 h-auto"
                  
                />
            </a> 
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Sobre a Rádio 89.1 Maravilha FM
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Rádio 89.1 Maravilha FM é a sua companhia diária, levando até
                  você muito mais do que música: transmitimos fé, esperança e a
                  Palavra de Deus, sempre com uma programação de excelência feita
                  para abençoar e transformar vidas.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Somos uma emissora cristã com a missão de compartilhar o
                  Evangelho da Paz e estar ao seu lado em todos os momentos,
                  trazendo mensagens de amor, inspiração e alegria.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Em Belo Horizonte, sintonize 89.1 FM e viva a experiência de ter
                  a Maravilha FM como parte da sua rotina. Porque aqui, cada canção
                  e cada palavra são preparadas especialmente para você!
                </p>
              </div>
              <div className="animate-fade-in">
                <video
                src={videoStudio}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
              >
                Seu navegador não suporta vídeos em HTML5.
              </video>

              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="py-12 md:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center animate-fade-in">
                <img
                  src={appMockup}
                  alt="App Maravilha FM"
                  className="w-64 md:w-80 h-auto"
                />
              </div>
              <div className="order-1 md:order-2 space-y-6 text-center md:text-left animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  BAIXE E OUÇA
                  <br />
                  <span className="text-primary">NOSSA RÁDIO</span>
                  <br />
                  PELO APP
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    target="_blank"
                    href="https://apps.apple.com/br/app/89-maravilha-fm/id6748237407"
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                    <img
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="Download na App Store"
                      className="h-12"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.claitonbarbosa.maravilhafmbh"
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Baixar no Google Play"
                      className="h-12"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
