import { useEffect, useState } from "react";

function DrinkContainer() {
    const [coffees, setCoffees] = useState([])
    const [coffeeIndex, setCoffeIndex] = useState(0)
    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        fetch("https://api.sampleapis.com/coffee/hot")
        .then(res => res.json())
        .then(data => setCoffees(data))}, [])

      let random = Math.floor(Math.random() * 3)
      let randomCoffees = coffees[random]

    const printCoffees = coffees
    .slice(coffeeIndex, coffeeIndex + 1)
    .map((coffee) => {
        return <div key={coffee.description}>
            <img src={coffee.image}></img>
            <p>{coffee.title}</p>
            </div>
    })


    useEffect(() => {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then( res => res.json())
      .then(data => setCocktails(data.drinks))
    }, [])
  
    const renderCocktails = cocktails.map(cocktail => {
      return(
        <div key={cocktail.idDrink}>
          <h2>{cocktail.strDrink}</h2>
          <img
            src={cocktail.strDrinkThumb} alt={cocktail.strDrink}
            style={{ width: "300px"}} 
          />
          <p>{cocktail.strInstructions}</p>
        </div>
      )
    })

    // console.log(randomCoffees)

    return (
        <div>
            <h1>Your coffee of the day is:</h1>
            {printCoffees}
            <h1>Cocktails?</h1>
            {renderCocktails}
        </div>
    )
}

export default DrinkContainer;