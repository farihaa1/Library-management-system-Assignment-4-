
import { MainLayout } from "@/MainLayout";
import { AllBooks } from "@/pages/allBooks";
import BorrowSummary from "@/pages/borrowSummery";

import HomePage from "@/pages/home";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
    ],
  },
]);

