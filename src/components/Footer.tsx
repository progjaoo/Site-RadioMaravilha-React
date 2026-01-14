import logoWhite from "@/assets/logoFooter.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <img src={logoWhite} alt="89.1 Maravilha FM" className="h-20 w-15" />
          
          <div className="text-center space-y-2">
            <p className="font-semibold">Rua Fernandes Tourinho, 487 - Savassi</p>
            <p className="font-semibold">Belo Horizonte/MG | Cep 30.112-000</p>
            <p className="font-semibold">Whatsapp: (31) 99998-2089</p>
          </div>

          <div className="text-center text-sm opacity-90">
            <p>© 2026 Rádio 89.1 Maravilha FM. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
