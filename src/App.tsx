
import Navbar from "./CustomComponents/shared/Navbar/Navbar";
import { Outlet } from "react-router";
const navigationData = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

function App() {
  return (
    <main className="min-h-svh mx-auto">
      <Navbar navigationData={navigationData} />
      <Outlet></Outlet>
    </main>
  );
}

export default App;
