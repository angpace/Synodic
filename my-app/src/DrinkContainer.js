import { useEffect, useState } from "react";
import styled from "styled-components";

const Smallp = styled.p`
/* position: inherit; */
width: 23%;
`

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
  //console.log(random)

  const printCoffees = coffees
    .map((coffee) => {
      if (coffee.id === random)
        return <div key={coffee.id}>
          <img style={{ width: "300px" }} src={coffee.image} alt={coffee.title}></img>
          <h2>{coffee.title}</h2>
          <Smallp>{coffee.description}</Smallp>
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
        <img
          src={cocktail.strDrinkThumb} alt={cocktail.strDrink}
          style={{ width: "300px" }}
        />
        <h2>{cocktail.strDrink}</h2>
        <Smallp>A cocktail made of {cocktail.strIngredient1} with {cocktail.strIngredient2}.</Smallp>
      </div>
    )
  })

  // console.log(randomCoffees)

  return (
    <span>
      {dayTime ?

        <span>
          <h3>Suggested Coffee of the day:</h3>
          <span>{printCoffees}</span>
        </span>
        :
        <span>
          <h3>Suggested Cocktail of the night:</h3>
          <span>{renderCocktails}</span>
        </span>



      }
    </span>
  )
}

export default DrinkContainer;