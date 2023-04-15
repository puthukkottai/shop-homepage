import React from "react";
import { useState } from "react";
import Productcard from "../children-component/productcard";
import Cartcard from "../children-component/Cartcard.js";
const data = [
  {
    label: "Spl Ghee Dosa",
    price: 70,
    star: 4.5,
    origin: "South Indian Breakfast",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/nkw0roy1zzsekfbejscc",
    isVeg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFxwjfMbcmV0MCRa1_QGz0-w1mGlOrLq-HA&usqp=CAU",
  },
  {
    label: "Milagu Pongal",
    price: 80,
    star: 4,
    origin: "South Indian Breakfast",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/uwonmseb9ovvhftkqdes",
    isVeg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFxwjfMbcmV0MCRa1_QGz0-w1mGlOrLq-HA&usqp=CAU",
  },
  {
    label: "Spl Filter Coffee",
    price: 50,
    star: 3.5,
    origin: "South Indian Beverage",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0a54d16840edf7a29618add0c37dd998",
    isVeg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFxwjfMbcmV0MCRa1_QGz0-w1mGlOrLq-HA&usqp=CAU",
  },
  {
    label: "Mutton Briyani",
    price: 250,
    star: 4,
    origin: "Indian Lunch",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3khV3I0WSufVXHq1EgEjfsv74eJ_8obHMw&usqp=CAU",
    isVeg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYteGPinx4N697CzQh72N0wcLprAcv2BOxw&usqp=CAU",
  },
  {
    label: "Spl Fish Fry",
    price: 300,
    star: 4,
    origin: "Indian Starter",
    imgUrl:
      "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/wkk988mwknx1ncbnefhb",
    isVeg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYteGPinx4N697CzQh72N0wcLprAcv2BOxw&usqp=CAU",
  },
  {
    label: "Gulab Jamun",
    price: 150,
    star: 3.5,
    origin: "Indian Sweet",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZXfoM0tfNxRmkxuAjlGIZbUxOCkcRcBeaA&usqp=CAU",
    isVeg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFxwjfMbcmV0MCRa1_QGz0-w1mGlOrLq-HA&usqp=CAU",
  },
  {
    label: "Schezwan Noodles",
    price: 100,
    star: 3,
    origin: "Chinese Food",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DL2xO8jIWyFbpAGbvFyUShgMsXtrXha9xg&usqp=CAU",
    isVeg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFxwjfMbcmV0MCRa1_QGz0-w1mGlOrLq-HA&usqp=CAU",
  },
  {
    label: " Paneer Momo",
    price: 200,
    star: 4,
    origin: "Chinese Vegetarian Starter",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXA2v_Y3SRr704H0QakINFOPHBbIrdBHnYgA&usqp=CAU",
    isVeg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFxwjfMbcmV0MCRa1_QGz0-w1mGlOrLq-HA&usqp=CAU",
  },
  {
    label: "Korean BBQ Chicken",
    price: 200,
    star: 4.5,
    origin: "Korean starter",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZhyE2aIHB45ikHHjYNERq9wGdEoQdcIXew&usqp=CAU",
    isVeg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYteGPinx4N697CzQh72N0wcLprAcv2BOxw&usqp=CAU",
  },
];
export default function Card() {
  const [cart, setCart] = useState([]);
  function handleChange(item = {}) {
    let cartCopy = [...cart];
    if (item.label) {
      cartCopy.push(item);
    }
    setCart(cartCopy);
  }

  function handleCart(item = {}) {
    console.log(item);
    let cartCopy = [...cart];
    if (item.label) {
      cartCopy = cartCopy.filter((_data) => _data.label !== item.label);
    }
    setCart(cartCopy);
  }

  function checkCartStatus(item = {}) {
    let status = false;
    if (item.label) {
      status =
        cart.filter((_data) => _data.label === item.label).length > 0
          ? true
          : false;
    }
    return status;
  }
  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="menutitle">
              <h2>Menu</h2>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4813/4813075.png"
                style={{ width: 50, height: 50 }}
                alt="Icon"
              />
            </div>
            <div className="row content">
              {data.map((element, index) => (
                <Productcard
                  key={`product-card-${index}`}
                  disabled={checkCartStatus(element)}
                  data={element}
                  onChange={handleChange}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ordertitle">
              <h2>Ordered Items</h2>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3765/3765461.png"
                style={{ width: 50, height: 50 }}
                alt="Icon"
              />
            </div>
            {cart.map((d, index) => (
              <Cartcard
                key={`cart-card-${index}`}
                data={d}
                onRemove={handleCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
