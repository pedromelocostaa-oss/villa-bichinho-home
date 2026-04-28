import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import BemVindo from "./pages/BemVindo.tsx";
import CheckIn from "./pages/CheckIn.tsx";
import Localizacao from "./pages/Localizacao.tsx";
import Wifi from "./pages/Wifi.tsx";
import Convivencia from "./pages/Convivencia.tsx";
import Experiencia from "./pages/Experiencia.tsx";
import GuiaLocal from "./pages/GuiaLocal.tsx";
import Contato from "./pages/Contato.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const basename = import.meta.env.PROD ? "/villa-bichinho-home" : "/";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bemvindo" element={<BemVindo />} />
          <Route path="/checkin" element={<CheckIn />} />
          <Route path="/localizacao" element={<Localizacao />} />
          <Route path="/wifi" element={<Wifi />} />
          <Route path="/convivencia" element={<Convivencia />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/guia-local" element={<GuiaLocal />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
