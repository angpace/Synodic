import { useEffect, useState } from "react";

function DrinkContainer({dayTime}) {
  const [coffees, setCoffees] = useState([])
  const [cocktails, setCocktails] = useState([])

  //Coffee Api
  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then(res => res.json())
      .then(data => setCoffees(data))
  }, [])
  //Generates random coffees
  let random = (Math.floor(Math.random() * 20) + 1)
  console.log(random)

  const printCoffees = coffees
    .map((coffee) => {
      if (coffee.id === random)
        return <div key={coffee.description}>
          <img style={{ width: "300px" }} src={coffee.image}></img>
          <p>{coffee.title}</p>
          <p>{coffee.description}</p>
        </div>
    })

function randomCocktail(){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(res => res.json())
      .then(data => setCocktails(data.drinks))
}
  useEffect(() => {
    randomCocktail();
    // fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    //   .then(res => res.json())
    //   .then(data => setCocktails(data.drinks))
  }, [])

  const renderCocktails = cocktails.map(cocktail => {
    return (
      <div key={cocktail.idDrink}>
        <h2>{cocktail.strDrink}</h2>
        <img
          src={cocktail.strDrinkThumb} alt={cocktail.strDrink}
          style={{ width: "300px" }}
        />
        <p>{cocktail.strInstructions}</p>
        <button onClick={randomCocktail}>New cocktail? </button>

      </div>
    )
  })

  // console.log(randomCoffees)

  return (
    <div>
      {dayTime ? <h3>Suggested Coffee of the day: {printCoffees}</h3>
      
      :

      <h3>Suggested Cocktail of the night: {renderCocktails}</h3>

      }
    </div>
  )
}

export default DrinkContainer;