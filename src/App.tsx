import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import CorporateOverview from "./pages/CorporateOverview";
import CorporateVision from "./pages/CorporateVision";
import CorporateManufacturing from "./pages/CorporateManufacturing";
import CorporateTechnology from "./pages/CorporateTechnology";
import CorporateInvestments from "./pages/CorporateInvestments";
import FinancialInformation from "./pages/FinancialInformation";
import News from "./pages/News";
import CompanyDirectory from "./pages/CompanyDirectory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/corporate" element={<CorporateOverview />} />
              <Route path="/corporate/overview" element={<CorporateOverview />} />
              <Route path="/corporate/vision" element={<CorporateVision />} />
              <Route path="/corporate/manufacturing" element={<CorporateManufacturing />} />
              <Route path="/corporate/technology" element={<CorporateTechnology />} />
              <Route path="/corporate/investments" element={<CorporateInvestments />} />
              <Route path="/financial" element={<FinancialInformation />} />
              <Route path="/news" element={<News />} />
              <Route path="/directory" element={<CompanyDirectory />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
