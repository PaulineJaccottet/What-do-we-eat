import { useState } from "react";
import MealsList from "./Mealslist";

const Home = () => {
    const [meals, setMeals] = useState ([
        {
            id: 1,
            title: "Poke Bowls",
            prepTime: 30,
            season: "all",
            gluten: "gluten free",
            // listItems: ""
        },
        {
            id: 2,
            title: "Gluten free paninis",
            prepTime: 15,
            season: "summer",
            gluten: "gluten free",
            // listItems: ""
        },
    ]);

return (
    <div>
        <MealsList meals ={meals}/>
    </div>
);
}

export default Home;