import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant.js";
import Button from "../../ui/Button.jsx";

const UpdateOrder = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export async function action({ params }) {
  const data = { priority: true };
  const orderId = params.orderId;
  await updateOrder(orderId, data);
  return null;
}
