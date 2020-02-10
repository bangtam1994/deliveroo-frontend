import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import imageRestaurant from "./images/header-image.jpg";
import star from "./images/star.png";

function App() {
  const [data, setData] = useState({}); // état qui va recueillir les infos du backend Heroku
  const [isLoading, setIsLoading] = useState(true); // Etat qui va définir si la page est chargée ou non

  //Création de fonction fetchData pour recueillir les infos sur axios
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deliveroo-backend-by-bt.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false); // Pour arreter le loading
    } catch (error) {
      console.log(error.message);
    }
  };

  //Appel de UseEffect pour appeler 1 fois fetchData lors du chargement
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <p> En cours de chargement...</p>
      ) : (
        <div>
          <Header />
          <div className="header2 white">
            {/* Header n2 */}

            <div className=" container d-flex">
              <div className="flex2">
                <h1> {data.restaurant.name}</h1>
                <p className="description">{data.restaurant.description}</p>
              </div>
              <div className="flex1 ">
                <img src={imageRestaurant} alt="image Pain Quotidien" />{" "}
              </div>
            </div>
          </div>
          {/* main  */}

          <main class="container">
            {/* Bloc de gauche  */}
            <div className="d-flex flex-direction-column flex2 ">
              {data.categories.map((category, index) => {
                return (
                  <div key={index} className="category">
                    <h2> {category.name}</h2>

                    <div className="containerInCategory">
                      {category.meals.map((elem, index) => {
                        return (
                          <div key={index} className="choice">
                            <div>
                              <h3>{elem.title}</h3>
                              <p className="descriptionCategory">
                                {elem.description}
                              </p>
                              <span className="price">{elem.price}€ </span>
                              {elem.popular === true && (
                                <span className="popular">
                                  <img src={star} alt="star" className="star" />
                                  Populaire !
                                </span>
                              )}
                              <br />
                            </div>

                            {elem.picture && (
                              <img
                                src={elem.picture}
                                alt={elem.title}
                                className="imgSmall"
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* bloc de droite  */}
            <div className="flex1">
              <div className="cart">
                <button className="btn-cart"> Valider mon panier </button>
                <br />
                <br />

                <br />

                <div className="cart-content"> Votre panier est vide</div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
