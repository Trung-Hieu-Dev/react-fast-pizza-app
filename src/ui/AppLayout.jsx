import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview.jsx";
import Header from "../ui/Header.jsx";
import Loader from "../ui/Loader.jsx";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
