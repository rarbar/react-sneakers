import React, {useEffect, useState} from "react";
import {Card} from "../Components/Card/Card";
import axios from "axios";


export function Orders() {
    // const {onAddFavorites, onAddToCard} = useContext(AppContext)
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)
//не можем в useEffect прописывать просто await, поэтому делаем самовызывающую f
    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://60d6d8a1307c300017a5f527.mockapi.io/orders')
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (error) {
                alert('Ошибка при запросе заказав')
            }
        })()
    }, [])

    return (
        <div className="content">
            <div className='search_top'>
                <h1>Мои Заказы</h1>
            </div>
            <div className="favorites">
                {isLoading ? [...Array(5)] : orders.map((item, index) => (
                    <Card
                        key={index}
                        {...item}
                        loading={isLoading}
                    />))}
            </div>
        </div>
    )
}