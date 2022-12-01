import React from "react"

/**
 * Este componente me sirve para saber la suma total de mis productos en carrito
 * @param totalizers trae info de los productos del carrito
 * @returns total de los productos
 */

type Total = {
  id: string
  name: string
  value: number
};


const Totalizers = (totalizers: Total) => {
  const {id, name, value} = totalizers;
  console.log("Mis totales son iguales a:", id, name, value)

  return <div>Totalizers</div>
}

export default Totalizers
