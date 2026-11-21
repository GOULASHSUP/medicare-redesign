import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SurgeriesPage from "./pages/SurgeriesPage";
import OncologySurgeriesPage from "./pages/OncologySurgeriesPage";
import DevelopmentPage from "./pages/DevelopmentPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/mutetek" element={<SurgeriesPage />} />
          <Route
            path="/mutetek/daganatsebeszeti-mutetek"
            element={<OncologySurgeriesPage />}
          />
          <Route path="*" element={<DevelopmentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
