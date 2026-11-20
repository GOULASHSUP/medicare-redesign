import { Outlet } from "react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import EmergencyNotice from "../components/layout/EmergencyNotice";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <EmergencyNotice />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
