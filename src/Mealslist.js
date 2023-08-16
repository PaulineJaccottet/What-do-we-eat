const MealsList = (props) => {

    const meals = props.meals;

    return (
        <div className="meals-list">
            {meals.map((meal) => (
                <div className='meals-list-items' key={meal.id}>
                    <h2>{meal.title}</h2>
                    <ul>
                        <li>{meal.prepTime} min</li>
                        <li>{meal.season}</li>
                        <li>{meal.gluten}</li>
                    </ul>
                </div>
            ))}


        </div>
    );
}

export default MealsList;