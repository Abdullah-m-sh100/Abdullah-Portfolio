import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/404";
import Main from "./pages/main";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
