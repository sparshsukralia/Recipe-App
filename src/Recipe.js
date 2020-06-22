import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <h2 className={style.heading}>PROCESS</h2>
      <ol className={style.ingredients}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p className={style.calories}>
        TOTAL CALORIES: {Math.round(calories)} Cal
      </p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
