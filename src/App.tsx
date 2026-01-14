import { useEffect, useState } from "react";
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
import { radioService } from "@/lib/radioService";
import { useLocation } from "react-router-dom";
import { pageview } from "@/lib/analytics";
import AnalyticsTracker from "./components/AnalyticsTracker";

const queryClient = new QueryClient();

const Layout = () => {
  const [playerAtivo, setPlayerAtivo] = useState(radioService.getGlobalPlayerActive());

  useEffect(() => {
    const interval = setInterval(() => {
      const ativo = radioService.getGlobalPlayerActive();
      if (ativo !== playerAtivo) setPlayerAtivo(ativo);
    }, 500);

    return () => clearInterval(interval);
  }, [playerAtivo]);

  return (
    <>
      <Outlet />
      {playerAtivo && <PlayerGlobal />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ouvir-ao-vivo" element={<OuvirAoVivo />} />
            <Route path="/assistir-ao-vivo" element={<AssistirAoVivo />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

    <AnalyticsTracker />

      </TooltipProvider>
  </QueryClientProvider>
);

export default App;