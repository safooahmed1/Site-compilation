import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePege from "./pages/HomePege";
import EWatch from "./pages/EWatch";
import Coffee from "./pages/Coffee";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePege/>} />
          <Route path="/eWatch" element={<EWatch/>} />
          <Route path="/coffee" element={<Coffee/>} />
          <Route path="*" element={<h1 className="flex justify-center items-center h-screen text-6xl text-gray-600">Error | 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
