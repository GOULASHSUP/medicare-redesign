import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import DevelopmentPage from "./pages/DevelopmentPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<DevelopmentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
