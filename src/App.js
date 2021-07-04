import {Header} from "./Components/Header/Header";
import {Drawer} from "./Components/Drawer/Drawer";
import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {Home} from './pages/Home'
import {Route} from "react-router-dom";
import {Favorites} from "./pages/Favorites";


export const AppContext = createContext({})

function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favorites, setFavorites] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [cartOpened, setCartOpened] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    //useEffect отрисовывает нам один раз массив и запинает его и следит за ним если он изменится он перерисует
    useEffect(() => {   //useEffect никогда нельзя делать async поэтому мы помещяем в нее F которую делаем async
        async function fetchData() {
            try {
                const cartResponse = await axios.get('https://60d6d8a1307c300017a5f527.mockapi.io/card')
                const favoritesResponse = await axios.get('https://60d6d8a1307c300017a5f527.mockapi.io/favorites')
                const itemsResponse = await axios.get('https://60d6d8a1307c300017a5f527.mockapi.io/items')

                setIsLoading(false)//что бы у нас когда все прогрузилось карточки серые затерлись

                setCartItems(cartResponse.data)//сначало загружаются корзина
                setFavorites(favoritesResponse.data)//потом закладки
                setItems(itemsResponse.data)//а последними главная стр
            } catch (error) {
                alert('Ошибка при запросе данных.')
            }
        }

        fetchData()
    }, [])

    const onAddToCard = (obj) => {
        try {
            if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
                axios.delete(`https://60d6d8a1307c300017a5f527.mockapi.io/card/${obj.id}`) //по ссылки передай мне этот  obj
                setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
            } else {
                axios.post('https://60d6d8a1307c300017a5f527.mockapi.io/card/', obj) //по ссылки передай мне этот  obj
                setCartItems((prev) => [...prev, obj])
            }
        } catch (error) {
            alert('Не удалось добавить')
        }
    }
    //post запрос при получении чегото
    const onRemoveItems = (id) => {
        try {
            axios.delete(`https://60d6d8a1307c300017a5f527.mockapi.io/card/${id}`) //по ссылки передай мне этот  obj
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))// фильтруем если приходит id=3 то новый массив будет без id=3
        } catch (error) {
            alert('Ошибка при удалении из корзины :(')
        }
    }
    const onAddFavorites = async (obj) => {
        //функция у нас ассинхронная и дожидаюсь там ответа где нам необходимо
        try {
            if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
                axios.delete(`https://60d6d8a1307c300017a5f527.mockapi.io/favorites/${obj.id}`)
                setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
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
        let text = e.currentTarget.value
        setSearchValue(text)
    }
    //если хотябы один id есть в корзине, выдовай мне true
    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.id) === Number(id))
    }

    return (
        // помести В AppContext items, cartItems, favorites
        <AppContext.Provider
            value={{
                items,
                cartItems,
                favorites,
                onAddFavorites,
                isItemAdded,
                setCartOpened,
                setCartItems
            }}>
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
                        cartItems={cartItems}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onAddFavorites={onAddFavorites}
                        onAddToCard={onAddToCard}
                        onChangeSearchInput={onChangeSearchInput}
                        isLoading={isLoading}
                    />
                </Route>
                <Route path='/favorites' exact>
                    <Favorites/>
                </Route>
            </div>
        </AppContext.Provider>
    );
}

export default App;
