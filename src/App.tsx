

import { Outlet } from "react-router";
import Navbar from "./CustomComponents/shared/Navbar/Navbar";
import { navigationData } from "./CustomComponents/shared/Navbar/navigationData";

export function MainLayout() {
  return (
    <>
      <Navbar navigationData={navigationData} />
      <main>
        <Outlet />
      </main>
    </>
  );
}