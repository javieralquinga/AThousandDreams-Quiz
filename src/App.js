import "./css/App.css";
import Quiz from "./components/Quiz";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "The Dreamer Quiz";

    // Verifica si estás en la ruta correcta sin comparar con REACT_APP_MAIN_URL
    const currentPath = window.location.pathname;

    // Si no estás en la ruta raíz, navega a "/"
    if (currentPath !== "/") {
      navigate("/");
    }
  }, [navigate]);

  return (
      <div className="App">
        <Quiz />
      </div>
  );
}

export default App;
