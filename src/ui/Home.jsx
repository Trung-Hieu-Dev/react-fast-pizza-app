import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser.jsx";
import Button from "../ui/Button.jsx";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl md:text-3xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
