import { useEffect, useState } from "react";

function DrinkContainer({ dayTime }) {
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
          <h2>{coffee.title}</h2>
          <p>{coffee.description}</p>
        </div>
    })


  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(res => res.json())
      .then(data => setCocktails(data.drinks))
  }, [])

  const renderCocktails = cocktails.map(cocktail => {
    return (
      <div key={cocktail.idDrink}>
        <img
          src={cocktail.strDrinkThumb} alt={cocktail.strDrink}
          style={{ width: "300px" }}
        />
        <h2>{cocktail.strDrink}</h2>
        <p>A cocktail made of {cocktail.strIngredient1} with {cocktail.strIngredient2}.</p>
      </div>
    )
  })

  // console.log(randomCoffees)

  return (
    <div>
      {dayTime ?

        <div>
          <h3>Suggested Coffee of the day:</h3>
          <p>{printCoffees}</p>
        </div>
        :
        <div>
          <h3>Suggested Cocktail of the night:</h3>
          <p>{renderCocktails}</p>
        </div>



      }
    </div>
  )
}

export default DrinkContainer;