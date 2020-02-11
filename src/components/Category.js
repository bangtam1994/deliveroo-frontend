import React from "react";
import Meal from "./Meal";

function Category({
  category,
  index,
  choices,
  setChoices,
  totalBasket,
  setTotalBasket
}) {
  return (
    <>
      {category.meals.length !== 0 && (
        <div key={index} className="category">
          <h2> {category.name}</h2>

          <div className="containerInCategory">
            {category.meals.map((meal, index) => {
              return (
                <Meal
                  {...meal}
                  index={index}
                  choices={choices}
                  setChoices={setChoices}
                  totalBasket={totalBasket}
                  setTotalBasket={setTotalBasket}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Category;
