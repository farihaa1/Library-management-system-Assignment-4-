import { Outlet } from "react-router";
import Navbar from "./CustomComponents/shared/Navbar/Navbar";
import { navigationData } from "./CustomComponents/shared/Navbar/navigationData";
import Footer from "./CustomComponents/shared/footer";
import { Toaster } from "sonner";

export function MainLayout() {
  return (
    <>
      <main className="container mx-auto">
        <Toaster />
        <Navbar navigationData={navigationData} />
        <div className="">
          <Outlet />
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
