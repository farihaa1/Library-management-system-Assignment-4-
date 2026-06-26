import { Outlet } from "react-router";
import Navbar from "./CustomComponents/shared/Navbar/Navbar";
import { navigationData } from "./CustomComponents/shared/Navbar/navigationData";
import Footer from "./CustomComponents/shared/footer";

export function MainLayout() {
  return (
    <>
      <main className="container mx-auto">
        <Navbar navigationData={navigationData} />
        <div className="">
          <Outlet />
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
