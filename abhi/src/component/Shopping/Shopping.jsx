import React, { useEffect, useState } from "react";
import ShopNav from "./ShopNav";
import { plantdata } from "./Shopdata";
import "./Shopping.css";
import { Button, Drawer } from "@mui/material";
import { Oreder } from "./Oreder";

const Shopping = () => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage on initial render
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [order, setOrder] = useState(false);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (plant) => {
    setCart((prevCart) => [...prevCart, plant]); // Add plant to the cart
  };

  return (
    <>
      <ShopNav icon={() => setOrder(true)} shopnum={cart.length} />

      <div className="mainshop">
        <div className="Shopplant">
          {plantdata.map((p, i) => (
            <div className="shopcrads" key={i} style={{ color: "black" }}>
              <div className="leftshopping">
                <img src={p.imageUrl} alt={p.name} />
              </div>
              <div className="rightshopping">
                <h1>{p.name}</h1>
                <p>{p.type}</p>
                <p className="price">${p.price}</p>

                <Button
                  variant="contained"
                  sx={{
                    height: "15%",
                    bgcolor: "green",
                    width: "40%",
                    margin: "0 auto",
                    fontSize: "10px",
                    fontWeight: "900",
                  }}
                  onClick={() => addToCart(p)}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          ))}

          <Drawer anchor="right" open={order} onClose={() => setOrder(false)}>
            <Oreder cart={cart} setCart={setCart} setOrder={setOrder} />
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Shopping;
