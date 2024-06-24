import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

export function Layout() {
  return (
    <div className="app-layout">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
