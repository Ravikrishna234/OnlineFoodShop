import React from "react";
import classes from './AvailableFood.module.css';
import Card from '../UI/Card';
import FoodItem from "./FoodItems/FoodItem";
const DUMMY_FOOD = [
    {
        id: 'f1',
        name: 'Food a',
        description: 'Made with fined nourished items',
        price: 12.49
    
    },
    {
        id: 'f2',
        name: 'Food B',
        description: 'A best and faster way to complete a meal',
        price: 16.99
    },
    {
        id: 'f3',
        name: 'Food C',
        description: 'A dish of recipes made with Indian Ingredients',
        price: 12.49
    }
]

function AvailableFood() {
    const foodItems = DUMMY_FOOD.map((item) =>  (
        <FoodItem 
            id={item.id}
            key={item.id} 
            name={item.name} 
            description={item.description} 
            price={item.price}>
        </FoodItem>
    ))

    return (
        // <section className="classes.meals">
        <section  className = {classes.meals}>
            <Card>
                <ul>{foodItems}</ul>
            </Card>
        </section>
    )
}

export default AvailableFood;