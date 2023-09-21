import { useDispatch } from "react-redux";
import { deleteItem } from "../../features/cart/cartSlice.js";
import Button from "../../ui/Button.jsx";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <Button type="small" onclick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
};

export default DeleteItem;
