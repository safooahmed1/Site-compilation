import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePege from "./pages/HomePege";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePege/>} />
          <Route path="*" element={<h1>Erorr | 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
