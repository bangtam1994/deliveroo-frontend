import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Basket from "./components/Basket";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState({}); // état qui va recueillir les infos du backend Heroku
  const [isLoading, setIsLoading] = useState(true); // Etat qui va définir si la page est chargée ou non

  const [choices, setChoices] = useState([]); //Liste des choix du panier
  const [totalBasket, setTotalBasket] = useState(0);

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
          <Banner data={data} />

          {/* main  */}
          <main class="container">
            {/* Bloc de gauche  */}
            <div className="d-flex flex-direction-column flex2 ">
              {data.categories.map((category, index) => {
                return (
                  <Category
                    category={category}
                    index={index}
                    choices={choices}
                    setChoices={setChoices}
                    totalBasket={totalBasket}
                    setTotalBasket={setTotalBasket}
                  />
                );
              })}
            </div>

            {/* bloc de droite  */}

            <Basket
              choices={choices}
              setChoices={setChoices}
              totalBasket={totalBasket}
              setTotalBasket={setTotalBasket}
            />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
