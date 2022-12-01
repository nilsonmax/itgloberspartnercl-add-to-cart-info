import React from "react"
import styles from "./styles.css"

/**
 * Este componente sirve para exportar botones de redirección
 * @returns botón de checkout, botón de home y botón de carrito
 */

const ButtonGroup = () => {
  return (
    <div className={`${styles.button__container}`}>
      <a href="/checkout" className={`${styles.checkout}`}>Ir a pagar</a>
      <a href="/" className={`${styles.continue}`}>Seguir comprando</a>
      <a href="/cart" className={`${styles.cart}`}>Ver carrito</a>
    </div>
  )
}

export default ButtonGroup
