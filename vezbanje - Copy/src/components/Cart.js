import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartData = useSelector((state) => state.cartData);
  return (
    <div>
      <Link to="/"> Return to the products page</Link>
      <h1>Cart page</h1>

      <div className="cart-page-container">
        <table>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
          </tr>
          {cartData.map((item) => (
            <tr key={item.key}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
