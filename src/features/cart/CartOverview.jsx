import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getTotalPrice,
  getTotalQuantity,
} from "../../features/cart/cartSlice.js";
import { formatCurrency } from "../../utils/helpers.js";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuantity);
  const totalCartPrice = useSelector(getTotalPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 text-sm md:text-base text-stone-200 uppercase p-4 sm:px-6">
      <p className="font-semibold text-stone-300 space-x-4 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
