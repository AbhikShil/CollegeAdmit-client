import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CollegeCardInCheckout from "../components/cards/CollegeCardInCheckout";
import { userCart } from "../functions/user";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.fees;
    }, 0);
  };

  const saveOrderToDb = () => {
    // console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) navigate("/checkout");
      })
      .catch((err) => console.log("cart save err", err));
  };

  const showCartItems = () => (
    <div className="table table-striped">
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Fees</th>
          {/* <th scope="col">Seat Type</th> */}
          {/* <th scope="col">Available</th> */}
          <th scope="col">Remove</th>
        </tr>
      </thead>

      {cart.map((p) => (
        <CollegeCardInCheckout key={p._id} p={p} />
      ))}
    </table>
    </div>
  );

  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-8">
          <h4>Cart / {cart.length} College</h4>

          {!cart.length ? (
            <p>
              No Colleges in cart. <Link to="/shop">Continue Exploring.</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        <div className="col-md-4">
          <h4>Order Summary</h4>
          <hr />
          <p>Colleges</p>
          {cart.map((c, i) => (
            <div key={i}>
              <p>
                {c.title} x {c.count} = ${c.fees * c.count}
              </p>
            </div>
          ))}
          <hr />
          Total: <b>${getTotal()}</b>
          <hr />
          {user ? (
            <button
              onClick={saveOrderToDb}
              className="btn btn-sm btn-primary mt-2"
              disabled={!cart.length}
            >
              Proceed to Checkout
            </button>
          ) : (
            <button className="btn btn-sm btn-primary mt-2">
              <Link
                to={{
                  pathname: "/login",
                  state: { from: "cart" },
                }}
              >
                Login to Checkout
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
