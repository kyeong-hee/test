import FoodMain from './components/food/FoodMain';
import FoodList from "./components/food/FoodList";
import FoodSlide from "./components/food/FoodSlide";
import FoodToggleList from "./components/food/FoodToggleList";

export default function Food(){

    return(
        <div>
            <FoodMain />
            <FoodList />
            <FoodSlide />
            <FoodToggleList />
        </div>
    )
}