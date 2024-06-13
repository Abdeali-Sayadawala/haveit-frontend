import React from "react";
import Homepage from "./Homepage";
import RestaurantFooter from "./RestaurantFooter";

const Home = () => {
    return(
        <div className='footer_wrapper'>
            <Homepage/>
            <RestaurantFooter />
        </div>
      )
}

export default Home;