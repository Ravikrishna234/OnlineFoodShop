import React, {Fragment}  from "react";
import FoodSummary from "./FoodSummary";
import AvailableFood from "./AvailableFood";

function Food() {
    return(
        <React.Fragment>
            <FoodSummary></FoodSummary>
            <AvailableFood></AvailableFood>
        </React.Fragment>
    )
}

export default Food;