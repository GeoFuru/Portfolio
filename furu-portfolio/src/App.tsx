import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects"
import ProjectPage from "./pages/ProjectPage";

function App() {
  const path = window.location.pathname;

  if (path.startsWith("/projects/")) {
    const projectId = path.split("/")[2];

    return <ProjectPage projectId={projectId} />;
  }

  if (path === "/projects") {
    return <Projects />;
  }

  
  return <Home />;
}

export default App;