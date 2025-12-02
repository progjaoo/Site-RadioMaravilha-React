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
          <Card className="overflow-hidden shadow-card animate-fade-in">
            {/* STREAM AO VIVO */}
            <div className="aspect-video bg-black relative">
              <iframe
                src="https://playerv.srvstm.com/video/radioenergia7960//true/false/V1hwT1UyUkhVbkZTV0ZacVRUQnZlVmw2VGxOa1JYaDBWRzVhYVZWVU1Eaz0rUg==/16:9/nao/nao/não"
                title="Transmissão ao vivo - Rádio Maravilha 89.1 FM"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

          </Card>

         
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AssistirAoVivo;