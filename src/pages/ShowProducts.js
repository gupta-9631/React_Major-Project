// import React from "react";
// import { useState } from "react";
// import Cart from "./Cart";
// import Products from "../Components/Products";
// import Navbar from "../Components/Navbar";
// const ShowProducts = () => {
//   const [show, setShow] = useState(false);
//   const [cart, setCart] = useState([]);

//   const handleClick = (item) => {
//     if (cart.indexOf(item) !== -1) return;
//     setCart([...cart, item]);
//   };

//   const handleChange = (item, d) => {
//     const ind = cart.indexOf(item);
//     const arr = cart;
//     arr[ind].amount += d;

//     if (arr[ind].amount === 0) arr[ind].amount = 1;
//     setCart([...arr]);
//   };

//   return (
//     <div>
//       <Navbar setShow={setShow} size={cart.length} />

//       <Products handleClick={handleClick} />

//       <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
//     </div>
//   );
// };

// export default ShowProducts;
