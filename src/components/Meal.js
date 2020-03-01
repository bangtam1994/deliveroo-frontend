import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Meal({
  title,
  description,
  price,
  popular,
  picture,
  index,
  choices,
  setChoices,
  totalBasket,
  setTotalBasket
}) {
  return (
    <div
      key={index}
      className="choice"
      onClick={() => {
        let copy = [...choices]; //copy = [{title = xx, price=xx}]
        // Checker si on a déjà ajouté le produit
        let isProductFound = false;

        for (let i = 0; i < copy.length; i++) {
          if (copy[i].title === title) {
            copy[i].quantity++;
            copy[i].totalPrice = price * copy[i].quantity;

            setTotalBasket(copy[i].totalPrice);
            isProductFound = true;
            break;
          }
        }
        if (isProductFound === false) {
          copy.push({
            title,
            price: Number(price),
            totalPrice: Number(price),
            quantity: 1
          });
          setTotalBasket(totalBasket + copy.totalPrice);
        }

        setChoices(copy);
        let subtotal = 0;
        for (let i = 0; i < copy.length; i++) {
          subtotal += copy[i].totalPrice;
          setTotalBasket(subtotal);
        }
      }}
    >
      <div>
        <h3>{title}</h3>
        <p className="descriptionCategory">{description}</p>
        <span className="price">{price}€ </span>
        {popular === true && (
          <span className="popular">
            <FontAwesomeIcon icon="star" className="star" />
            {/* <img src={star} alt="star" className="star" /> */}
            Populaire !
          </span>
        )}
        <br />
      </div>

      {picture && <img src={picture} alt={title} className="imgSmall" />}
    </div>
  );
}

export default Meal;
