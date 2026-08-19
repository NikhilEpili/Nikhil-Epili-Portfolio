import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import "./components/anime/AnimatedHero.css";
import { SiteNav } from "./components/SiteNav";
import { About } from "./pages/About";
import { Connect } from "./pages/Connect";
import { Home } from "./pages/Home";
import { Resources } from "./pages/Resources";
import { Work } from "./pages/Work";

export default function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div
      className={
        isHome
          ? "app-home dark"
          : "dark min-h-screen overflow-x-hidden bg-black text-white"
      }
    >
      <ScrollToTop />
      {!isHome && <SiteNav />}
      <div className={`relative z-10 ${isHome ? "h-full overflow-hidden" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}
