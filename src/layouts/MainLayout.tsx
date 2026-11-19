import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header will go here */}

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer will go here */}
    </div>
  );
}
