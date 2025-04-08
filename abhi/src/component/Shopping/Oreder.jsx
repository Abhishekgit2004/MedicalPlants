import React from "react";
import { Button, Typography } from "@mui/material";
import "./Order.css";

export const Oreder = ({ cart, setCart, setOrder }) => {
  const totalPrice = cart.reduce((total, plant) => total + plant.price, 0);

  const removePlantFromCart = (id) => {
    // Remove the plant from the cart by filtering out the plant with the matching id
    setCart(cart.filter((plant) => plant.id !== id));
  };

  return (
    <div style={{ padding: "20px", width: "600px" }}>
      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        Your Order
      </Typography>

      {cart.length === 0 ? (
        <Typography>No items in your cart</Typography>
      ) : (
        <div>
          {cart.map((plant) => (
            <div key={plant.id} style={{ marginBottom: "10px" }} className="orderMain">
              <Typography variant="body1">{plant.name}</Typography>
              <img src={plant.imageUrl} alt={plant.name} className="orderImage" />
              <Typography variant="body2">Price: ${plant.price}</Typography>
              <Button
                variant="contained"
                onClick={() => removePlantFromCart(plant.id)} // Correctly calling the remove function
              >
                Delete
              </Button>
            </div>
          ))}
          <Typography variant="h6" sx={{ marginTop: "20px" }}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
        </div>
      )}

      <Button
        variant="contained"
        sx={{ width: "100%", marginTop: "20px" }}
        onClick={() => setOrder(false)} // Close the order drawer
      >
        Close
      </Button>

      {/* You can also add a checkout button */}
      <Button
        variant="contained"
        sx={{ width: "100%", marginTop: "10px", bgcolor: "blue" }}
        onClick={() => alert("Proceeding to checkout...")}
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};
