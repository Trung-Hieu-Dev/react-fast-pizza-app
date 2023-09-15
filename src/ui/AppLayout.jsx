import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview.jsx";
import Header from "../ui/Header.jsx";

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
