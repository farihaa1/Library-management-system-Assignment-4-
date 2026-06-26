import { Outlet } from "react-router";
import Navbar from "./CustomComponents/shared/Navbar/Navbar";
import { navigationData } from "./CustomComponents/shared/Navbar/navigationData";

export function MainLayout() {
  return (
    <>
      <main className="container mx-auto">
        <Navbar navigationData={navigationData} />
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
}
