import React from "react"
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import ButtonGroup from "./ButtonGroup"
import { generateBlockClass } from "@vtex/css-handles"
import styles from "./styles.css"

/**
 * Este componente visualiza, y es utilizado en un modal layout,
 *  las compras que llevas hasta el momento cada vez que agregas un producto a tu carrito
 * @returns lista de productos que han sido agregados al carrito y botones de redirección.
 */

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const classes = generateBlockClass(styles.container, blockClass)
  const container__item = generateBlockClass(styles.container__item, blockClass)

  const productInfo = useProduct()
  if (false) console.log("Este producto tiene esta info", productInfo)

  const { orderForm: { items, totalizers } } = useOrderForm()

  return (
    <div className={classes}>
      {
        items.map((item: any, index: number) => {
          return (
            <div key={index} className={container__item}>
              <div className={`${styles.image__container}`}>
                <img src={item.imageUrls.at1x} className={`${styles.image}`} />
              </div>
              <div className={`${styles.info__container}`}>
                <p className={`${styles.info__name}`}>{item.name}</p>
                <p className={`${styles.info__price}`}>$ {item.price / 100}</p>
                <p className={`${styles.info__quantity}`}>Cantidad: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
      <div className={`${styles.info}`}>
        <p>{items.length} productos</p>
        <p>
          {
            totalizers[0]?.value ?
            `Total: ${totalizers[0]?.value / 100}` :
            "Total: Por calcular"
          }
        </p>
      </div>
      <ButtonGroup />
    </div>
  )
}

export default AddToCartInfo

