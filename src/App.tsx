import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ProfileProvider } from "@/contexts/ProfileContext";
import Index from "./pages/Index";
import ViniHistoria from "./pages/ViniHistoria";
import GersonJunior from "./pages/GersonJunior";
import ClaudioFrydman from "./pages/ClaudioFrydman";
import Demo from "./pages/Demo";
import Chat from "./pages/Chat";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogNew from "./pages/BlogNew";
import BlogEdit from "./pages/BlogEdit";
import BlogAutomation from "./pages/BlogAutomation";
import Dashboard from "./pages/Dashboard";
import SEOInsights from "./pages/SEOInsights";
import ProfileEditor from "./pages/ProfileEditor";
import SocialEmail from "./pages/SocialEmail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <ProfileProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/vinihistoria" element={<ViniHistoria />} />
              <Route path="/gersonjunior" element={<GersonJunior />} />
              <Route path="/claudiofrydman" element={<ClaudioFrydman />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/seo-insights" element={<SEOInsights />} />
              <Route path="/profile/edit" element={<ProfileEditor />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/new" element={<BlogNew />} />
              <Route path="/blog/edit/:slug" element={<BlogEdit />} />
              <Route path="/blog/automation" element={<BlogAutomation />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ProfileProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
