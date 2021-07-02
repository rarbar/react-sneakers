import {Info} from "../info";
import {useContext, useState} from "react";
import {AppContext} from "../../App";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(ms))

export function Drawer({onClose, items = [], onRemove}) {

    const [isComplete, setIsComplete] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const {setCartItems, cartItems} = useContext(AppContext)

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.post('https://60d6d8a1307c300017a5f527.mockapi.io/orders',
                {items: cartItems,})//пока не получим данные мы не идем делаем запрос дальше
            setOrderId(data.id)
            setIsComplete(true)
            setCartItems([])
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i]
                await axios.delete('https://60d6d8a1307c300017a5f527.mockapi.io/card/', Number(item.id))//отправлю заказ пото вниз
                await delay(1000)// дождусь 1 сек наверх
            }
        } catch (error) {
            alert('Не удалост создать заказ :(')
        }
        setIsLoading(false)
    }
    return (
        <div className='overlay'>
            <div className='drawer'>
                <h2>Корзина
                    <img
                        className='removeBtn'
                        src={"img/Btn_remove.svg"}
                        alt="remove"
                        onClick={onClose}
                    />
                </h2>
                {items.length > 0 ? <>
                    <div className='items'>
                        {items.map((obj) => (
                            <div key={obj.id}
                                 className='cartItem'>
                                <img className='sneakers_remove'
                                     src={obj.imgUrl}
                                     alt="sneakers"/>
                                <div className='names'>
                                    <p>{obj.title}</p>
                                    <b>{obj.price}</b>
                                </div>
                                <img
                                    onClick={() => onRemove(obj.id)}
                                    className='removeBtn'
                                    src={"img/Btn_remove.svg"}
                                    alt="remove"
                                />
                            </div>
                        ))}
                    </div>
                    <div className='totalBlock'>
                        <ul>
                            <li>
                                <span> Итого</span>
                                <></>
                                <b>21234 руб</b>
                            </li>
                            <li>
                                <span>Налое</span>
                                <></>
                                <b> 2102 руб</b>
                            </li>
                        </ul>
                        <button className='greenButton'
                                disabled={isLoading}
                                onClick={onClickOrder}>buy
                            <img className='arow' src={"img/arrow.svg"} alt="arrow"/>
                        </button>
                    </div>
                </> : <Info
                    title={isComplete ? 'Заказ оформлен' : 'Корзина пуста'}
                    img={isComplete ? 'img/check.jpg' : 'img/empty.png'}
                    description={isComplete ? `Заказ оформлен №${orderId}` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                />}
            </div>
        </div>
    )
}