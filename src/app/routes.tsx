import { createBrowserRouter } from "react-router";
import { Root } from "./components/layout/Root";
import Home from "./pages/Home";
import HomeAlt from "./pages/HomeAlt";
import Servicios from "./pages/Servicios";
import Clientes from "./pages/Clientes";
import IPM from "./pages/IPM";
import Nosotros from "./pages/Nosotros";
import ThoughtLeadership from "./pages/ThoughtLeadership";
import Sectores from "./pages/Sectores";
import Contacto from "./pages/Contacto";
import Agendar from "./pages/Agendar";
import { InsightsListing, BlogListing } from "./pages/ContentListing";
import ArticleDetail from "./pages/ArticleDetail";
import { Navigate, useParams } from "react-router";

function RedirectSlug({ base }: { base: string }) {
  const { slug } = useParams();
  return <Navigate to={`${base}/${slug}`} replace />;
}

function NotFound() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', sans-serif", color: "#fff", flexDirection: "column", gap: 24 }}>
      <span style={{ fontSize: 120, fontWeight: 900, letterSpacing: "-0.06em", opacity: 0.08 }}>404</span>
      <a href="/" style={{ fontSize: 14, color: "#AAFFAA", textDecoration: "none", borderBottom: "1px solid #AAFFAA55", paddingBottom: 2 }}>← Volver al inicio</a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "home-2", Component: HomeAlt },
      { path: "servicios", Component: Servicios },
      { path: "servicios/:slug", Component: Servicios },
      { path: "clientes", Component: Clientes },
      { path: "ipm", Component: IPM },
      { path: "nosotros", Component: Nosotros },
      { path: "thought-leadership", Component: ThoughtLeadership },
      // Insights y Blog son subsecciones de Liderazgo
      { path: "thought-leadership/insights", Component: InsightsListing },
      { path: "thought-leadership/insights/:slug", Component: ArticleDetail },
      { path: "thought-leadership/blog", Component: BlogListing },
      { path: "thought-leadership/blog/:slug", Component: ArticleDetail },
      // Alias antiguos
      { path: "insights", element: <Navigate to="/thought-leadership/insights" replace /> },
      { path: "insights/:slug", element: <RedirectSlug base="/thought-leadership/insights" /> },
      { path: "blog", element: <Navigate to="/thought-leadership/blog" replace /> },
      { path: "blog/:slug", element: <RedirectSlug base="/thought-leadership/blog" /> },
      { path: "sectores", Component: Sectores },
      { path: "sectores/:slug", Component: Sectores },
      { path: "contacto", Component: Contacto },
      { path: "agendar", Component: Agendar },
      { path: "*", Component: NotFound },
    ],
  },
]);
