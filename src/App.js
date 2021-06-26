import {Card} from "./Components/Card/Card";
import {Header} from "./Components/Header/Header";
import {Drawer} from "./Components/Drawer/Drawer";
import {useEffect, useState} from "react";

// const arr = [
//     // {
//     //     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//     //     "price": 12300,
//     //     "imgUrl": "img/sneakers/1.jpg"
//     // },
//     // {
//     //     "title": "Мужские Кроссовки Nike Air Max 270",
//     //     "price": 12000,
//     //     "imgUrl": "img/sneakers/2.jpg"
//     // },
//     // {
//     //     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//     //     "price": 12100,
//     //     "imgUrl": "img/sneakers/3.jpg"
//     // },
//     // {
//     //     "title": "Кроссовки Puma X Aka Boku Future Rider",
//     //     "price": 89000,
//     //     "imgUrl": "img/sneakers/4.jpg"
//     // }
// ]

function App(props) {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)


    //useEffect отрисовывает нам один раз массив и запинает его и следит за ним если он изменится он перерисует
    useEffect(() =>
        fetch('https://60d6d8a1307c300017a5f527.mockapi.io/items')
            .then((res) => {
                return res.json()
            }).then((json) => {
            setItems(json)
        }), [])
    //вытаскиваем данные с back end
    //отправил запрос на этот адрес .log(Network XHR)можно посмотреть
    //только promise res обещай мне вернуть его в .json формате
    const onAddToCard = (obj) => {
        setCartItems(prev=>[...prev,obj])
    }
    const onRemoveCard = (id) => {
        setCartItems(cartItems.filter(tl => tl.id !== id))
    }


    return (
        <div className='wrapper'>
            {cartOpened && <Drawer
                items={cartItems}
                onClose={() => setCartOpened(false)}
                onRemove={onRemoveCard}
            />}
            {/*если cartOpened true то отображаем*/}

            <Header onClickCard={() => setCartOpened(true)}/>

            <div className="content">
                <div className='search_top'>
                    <h1>All sneakers</h1>
                    <div className='search_block'>
                        <img src={"img/search.svg"} alt="Search"/>
                        <input placeholder='search'/>
                    </div>
                </div>
                <div className="Sneakers">
                    {items.map((item) => (
                        <Card
                            key={item.id}
                            imgUrl={item.imgUrl}
                            price={item.price}
                            title={item.title}
                            onFavorite={() => console.log(1)}
                            onPlus={(obg)=>onAddToCard(obg)}
                        />))}
                </div>
            </div>
        </div>
    );
}

export default App;
