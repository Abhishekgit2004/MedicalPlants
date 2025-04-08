import React, { useState } from "react";
import ShopNav from "./ShopNav";
import { flower } from "./Shopdata";
import "./Shopping.css";
import { Button, Drawer, Typography } from "@mui/material";
import { Oreder } from "./Oreder";

const Folwershop = () => {
  const [cart, setCart] = useState([]); // Stores items added to the cart
  const [order, setOrder] = useState(false);

  const draw = {
    height: "230px",
    width: "100px",
  };

  const addToCart = (plant) => {
    setCart((prevCart) => [...prevCart, plant]); // Add plant to the cart
  };

  return (
    <>
      <ShopNav icon={() => setOrder(true)} shopnum={cart.length} />

      <div className="mainshop">
        <div className="Shopplant">
          {flower.map((p, i) => (
            <div className="shopcrads" key={i} style={{ color: "black" }}>
              <div className="leftshopping">
                <img src={p.imageUrl} alt={p.name} />
              </div>
              <div className="rightshopping">
                <h1>{p.name}</h1>
                <p>{p.type}</p>
                <p className="pricez">${p.price}</p>

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
                  onClick={() => addToCart(p)} // Add plant to cart
                >
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
          <Drawer anchor="right" open={order} onClose={() => setOrder(false)}>
            <Oreder cart={cart} setOrder={setOrder} />
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Folwershop;
