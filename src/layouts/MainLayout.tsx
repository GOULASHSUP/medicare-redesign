import { Outlet } from "react-router";
import Header from "../components/layout/Header";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      {/* Shared Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer will go here */}
    </div>
  );
}
