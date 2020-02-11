import React from "react";
import plus from "../images/add.png";
import minus from "../images/minus.png";

function Basket({ choices, setChoices, totalBasket, setTotalBasket }) {
  let shippingCost = 2.5;
  let totalCartPrice = Number(totalBasket) + shippingCost;

  return (
    <div className="flex1">
      <div className="cart">
        <button
          className={choices.length === 0 ? "btn-cart-empty" : "btn-cart-full"}
        >
          {" "}
          Valider mon panier{" "}
        </button>
        <br />
        <br />

        <br />
        {choices.length === 0 ? (
          <div className="cart-content"> Votre panier est vide</div>
        ) : (
          <div>
            {choices.map((choice, index) => {
              // choice = {title, quantity, price, totalPrice}
              const decrement = () => {
                const copy = [...choices];
                if (copy[index].quantity > 1) {
                  copy[index].quantity--;

                  copy[index].totalPrice =
                    copy[index].totalPrice - copy[index].price;
                } else {
                  copy.splice(index, 1);
                }
                setChoices(copy);

                let subtotal = 0;
                for (let i = 0; i < copy.length; i++) {
                  subtotal += Number(copy[i].totalPrice);
                  setTotalBasket(subtotal);
                }
              };

              const increment = () => {
                const copy = [...choices];
                copy[index].quantity++;
                copy[index].totalPrice =
                  copy[index].totalPrice + copy[index].price;
                setChoices(copy);

                let subtotal = 0;
                for (let i = 0; i < copy.length; i++) {
                  subtotal += Number(copy[i].totalPrice);
                  setTotalBasket(subtotal);
                }
              };
              return (
                <div key={index} className="d-flex space-between  choiceLine">
                  <div className="d-flex align-items-center">
                    <img
                      src={minus}
                      alt="logo minus"
                      className="btn-quantity"
                      onClick={decrement}
                    />
                    <span>{choices[index].quantity}</span>
                    <img
                      src={plus}
                      alt="logo plus"
                      className="btn-quantity"
                      onClick={increment}
                    />
                    <span className="choiceTitle">{choice.title} </span>
                  </div>
                  <span>{choice.totalPrice.toFixed(2)}&nbsp;€</span>
                </div>
              );
            })}

            <div className="underChoices">
              <hr />
              <div className="choiceLine">
                <span>Sous-total</span>
                <span>{totalBasket.toFixed(2)} € </span>
              </div>
              <div className="choiceLine">
                <span>Frais de livraison</span>
                <span>{shippingCost.toFixed(2)} €</span>
              </div>

              <hr />
              <div className="choiceLine bold">
                <span>Total</span>
                <span>{totalCartPrice.toFixed(2)} €</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Basket;
