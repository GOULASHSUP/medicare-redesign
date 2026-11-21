import { Outlet } from "react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import EmergencyNotice from "../components/layout/EmergencyNotice";
import ScrollToTop from "../components/layout/ScrollToTop";
import AccessibilityButton from "../components/layout/AccessibilityButton";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />

      <Header />

      <EmergencyNotice />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <AccessibilityButton />
    </div>
  );
}
