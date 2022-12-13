import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Recipecard from './recipeCard';
import background from "./assets/backk.jpg";


function App() {

  const APP_ID = "5a89b3b1";
  const APP_KEY = "d159547160bd7f7939f1efcff98d4291";

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");


  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() => {
    getRecipe()
  }, [query]);

  const getRecipe = () => {

    axios.get(`https://api.edamam.com/search?q=${query}&app =http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_0123456789abcdef0123456789abcdef&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(function (response) {
        // handle success
        console.log(response.data.hits);
        setData(response.data.hits);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return (
    <div className="App">
      <div className='nav'>
        <p>happy cooking</p>
        
      </div>

      <div className="top-img">
        <img className="bg-img" src={background} alt="" />
        <div className="centered">Family Favourite Recipes</div>
      </div>


      <form onSubmit={getSearch} className="search-form">
        <label className='label'>Search for Recipes</label>
        <input className="search-bar"
          type="text"
          value={search}
          placeholder="Search..."
          onChange={(e) => {
            console.log(e.target.value)
            setSearch(e.target.value)
          }} />
        <button className="search-button" type="submit" >Search</button>
      </form>

      <div>
        {data.map((eachRecipe, index) => (
          <Recipecard
            key={index}
            title={eachRecipe.recipe.label}
            calories={eachRecipe.recipe.calories}
            image={eachRecipe.recipe.image}
            ingredients={eachRecipe.recipe.ingredients}
          />
        ))
        }
      </div>


    </div>
  );
}

export default App;
