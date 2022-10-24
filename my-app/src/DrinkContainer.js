import { useEffect, useState } from "react";

function DrinkContainer() {
    const [coffees, setCoffees] = useState([])
    const [coffeeIndex, setCoffeIndex] = useState(0)

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



    // console.log(randomCoffees)

    return (
        <div>
            <h1>Your coffee of the day is:</h1>
            {printCoffees}
        </div>
    )
}

export default DrinkContainer;