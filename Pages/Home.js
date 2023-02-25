import React, { useEffect, useState } from "react";
import Search from "../components/Search/search";
import axios from "axios";
import {useNavigate,Link} from "react-router-dom"


const Home =()=>{
        const[recipes, setRecipes] = useState([]);

    useEffect(()=>{
        axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then(({res})=>setRecipes(res.meals))
        .catch((e)=>console.log(e));
    },[])

    return(
        <div>
            <Search/>
            <h6 className="recipe--head">All Recipes</h6>
            <Link to="/form"><button className="add--recipes">Add Recipes</button></Link>
            <div className="recipe--images">
                        <img src="https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies.jpg"/>
                        <img src="https://images.herzindagi.info/image/2021/Sep/chaii-samosa.jpg" />
                        <img src="https://images.herzindagi.info/image/2021/Sep/chicken-tikka-masala.jpg"/>    
            </div>
            
        </div>
    )
}

export default Home;