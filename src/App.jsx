import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePege from "./pages/HomePege";
import EWatch from "./pages/EWatch";
import Coffee from "./pages/Coffee";
import TheCreativeGateway from "./pages/TheCreativeGateway";
import Burgerz from "./pages/Burgerz";
import HealthyFood from "./pages/HealthyFood";
import LoginPage from "./pages/LoginPage";
import Nintando from "./pages/Nintando";
import MarwanPablo from "./pages/MarwanPablo";
import { Toaster } from "react-hot-toast";
import AdminPage from "./pages/AdminPage";
import { Japan } from "./pages/Japan";

export default function App() {
  return (
    <div>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePege />} />
            <Route path="eWatch" element={<EWatch />} />
            <Route path="coffee" element={<Coffee />} />
            <Route path="TheCreativeGateway" element={<TheCreativeGateway />} />
            <Route path="burgerz" element={<Burgerz />} />
            <Route path="healthyFood" element={<HealthyFood />} />
            <Route path="loginPage" element={<LoginPage />} />
            <Route path="adminPage" element={<AdminPage />} />
            <Route path="nintando" element={<Nintando />} />
            <Route path="marwan-pablo" element={<MarwanPablo />} />
            <Route path="japan" element={<Japan />} />
          </Route>
          <Route
            path="*"
            element={
              <h1 className="flex justify-center items-center h-screen text-6xl text-gray-600">
                Not Fond | Error 404
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
