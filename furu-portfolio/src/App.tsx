import type { ReactNode } from "react";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { currentPath } from "./utils/paths";

function App() {
  const path = currentPath();
  let page: ReactNode;

  if (path.startsWith("/projects/")) {
    const projectId = path.split("/")[2];
    page = <ProjectPage projectId={projectId} />;
  } else if (path === "/projects") {
    page = <Projects />;
  } else if (path === "/gallery") {
    page = <Gallery />;
  } else if (path === "/about") {
    page = <About />;
  } else {
    page = <Home />;
  }

  return (
    <>
      {page}
      <ScrollToTopButton />
    </>
  );
}

export default App;
