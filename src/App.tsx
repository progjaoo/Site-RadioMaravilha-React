import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import OuvirAoVivo from "./pages/OuvirAoVivo";
import AssistirAoVivo from "./pages/AssistirAoVivo";
import NotFound from "./pages/NotFound";
import PlayerGlobal from "./components/PlayerGlobal";

const queryClient = new QueryClient();

const Layout = () => (
  <>
    <Outlet />
    <PlayerGlobal />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* PlayerGlobal fora das rotas */}

      {/* Suas rotas normais */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ouvir-ao-vivo" element={<OuvirAoVivo />} />
          <Route path="/assistir-ao-vivo" element={<AssistirAoVivo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
