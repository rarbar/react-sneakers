import {Header} from "./Components/Header/Header";
import {Drawer} from "./Components/Drawer/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";
import {Home} from './pages/Home'
import {Route} from "react-router-dom";
import {Favorites} from "./pages/Favorites";


function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favorites, setFavorites] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [cartOpened, setCartOpened] = useState(false)


    //useEffect отрисовывает нам один раз массив и запинает его и следит за ним если он изменится он перерисует
    useEffect(() => {
        axios.get('https://60d6d8a1307c300017a5f527.mockapi.io/items').then((res) => {
            setItems(res.data)
        })//get запрос при получении чегото
        axios.get('https://60d6d8a1307c300017a5f527.mockapi.io/card').then((res) => {
            setCartItems(res.data)
        })
        axios.get('https://60d6d8a1307c300017a5f527.mockapi.io/favorites').then((res) => {
            setFavorites(res.data)
        })//get запрос в корзину при получении чегото
    }, [])
    const onAddToCard = (obj) => {
        axios.post('https://60d6d8a1307c300017a5f527.mockapi.io/card', obj) //по ссылки передай мне этот  obj
        setCartItems((prev) => [...prev, obj])
    }
    //post запрос при получении чегото
    const onRemoveItems = (id) => {
        axios.delete(`https://60d6d8a1307c300017a5f527.mockapi.io/card/${id}`) //по ссылки передай мне этот  obj
        setCartItems((prev) => prev.filter((item) => item.id !== id))// фильтруем если приходит id=3 то новый массив будет без id=3
        // console.log(id)
    }

    const onAddFavorites = async (obj) => {
        //функция у нас ассинхронная и дожидаюсь там ответа где нам необходимо
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                axios.delete(`https://60d6d8a1307c300017a5f527.mockapi.io/favorites/${obj.id}`)
                // setFavorites((prev) => prev.filter((item) => item.id !== obj.id))
            } else {
                const {data} = await axios.post(`https://60d6d8a1307c300017a5f527.mockapi.io/favorites`, obj)
                //await дождись ответа сверху и перемести в переменную resp
                setFavorites((prev) => [...prev, data])
            }
        } catch (error) {
            alert('Не удалось добавить')
        }// если что то в коде сломается отлови эту ошибку и предупреди нас из за async
    }
    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className='wrapper'>
            {cartOpened && <Drawer
                onRemove={onRemoveItems}
                items={cartItems}
                onClose={() => setCartOpened(false)}
            />}
            {/*если cartOpened true то отображаем*/}
            <Header onClickCard={() => setCartOpened(true)}/>
            <Route path='/' exact>
                <Home
                    items={items}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onAddFavorites={onAddFavorites}
                    onAddToCard={onAddToCard}
                    onChangeSearchInput={onChangeSearchInput}
                />
            </Route>
            <Route path='/favorites' exact>
                <Favorites
                    items={favorites}
                    onAddFavorites={onAddFavorites}
                />
            </Route>
        </div>
    );
}

export default App;
