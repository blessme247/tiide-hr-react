// how to toggle display in React?
import React, { useState } from 'react'

function TogglePlay() {
  const [tog, setTog] = useState(false)

  let count = 0;
  const togTog = () => {
    setTog(!tog)
    count++;
    console.log(tog, count);
  };

  return (
    <>
      <button onClick={togTog}>TogglePlay</button>

    </>
  )
}

export default TogglePlay

// shopping cart in react?
// addToCart(["item"])  // context state is [], a rerender with the new state is scheduled
// console.log(shoppingCart) // context state is [], an empty array is logged



// const MyShoppingCartConsumingComponent = () => {
//   const { shoppingCart, setShoppingCart, addToCart, removeFromCart } = useShoppingCart();
  
//   React.useEffect(() => {
//      addToCart(['item'])
//   }, [])

//   console.log(shoppingCart)

//   return <p>yo!</p>
// }



// []
// ['item']





