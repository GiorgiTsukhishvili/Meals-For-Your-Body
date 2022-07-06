import React from "react";
import "./AvailableMeals.css";
import Card from "../UI-Components/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Khinkhali",
    description: "Finest Khinkhali in town",
    price: 1.5,
  },
  {
    id: "m2",
    name: "Khachapuri",
    description: "Cheesiest Khachapuri",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Lobiani",
    description: "Lobiani you will fall in love with",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AvailableMeals() {
  return (
    <section className="meals">
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return (
              <MealItem
                name={meal.name}
                price={meal.price}
                description={meal.description}
                key={meal.id}
                id={meal.id}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
