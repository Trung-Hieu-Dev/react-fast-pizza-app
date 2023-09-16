import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant.js";

function Order() {
  const order = useLoaderData();
  console.log(order);

  return <h1>Order</h1>;
}

export async function loader({ params }) {
  return await getOrder(params.orderId);
}

export default Order;
