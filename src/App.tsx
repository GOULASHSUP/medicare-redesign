import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SurgeriesPage from "./pages/SurgeriesPage";
import DevelopmentPage from "./pages/DevelopmentPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/mutetek" element={<SurgeriesPage />} />
          <Route path="*" element={<DevelopmentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
