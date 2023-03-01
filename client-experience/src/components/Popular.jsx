import { useEffect, useState } from "react";

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[]);

    //fetch api, everything fetches everything every popular ecioe from the api 

    const getPopular = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&NUMBER=9`
          );
        const data = await api.json();
        setPopular(data.recipes)

    }
  return (
    <div>Popular</div>
  )
}

export default Popular