import {Header} from "./Components/Header/Header";
import {Drawer} from "./Components/Drawer/Drawer";
import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {Home} from './pages/Home'
import {Route} from "react-router-dom";
import {Favorites} from "./pages/Favorites";
import {Orders} from "./pages/Orders";


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
        (async () => {
            try {
                //Promise.all не особо удобенн т.к. если хотя бы 1 promise не выполнится мы поподем сразу в catch
                const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
                    axios.get('https://60d6d8a1307c300017a5f527.mockapi.io/card'),
                    axios.get('https://60d6d8a1307c300017a5f527.mockapi.io/favorites'),
                    axios.get('https://60d6d8a1307c300017a5f527.mockapi.io/items')
                ])

                setIsLoading(false)//что бы у нас когда все прогрузилось карточки серые затерлись

                setCartItems(cartResponse.data)//сначало загружаются корзина
                setFavorites(favoritesResponse.data)//потом закладки
                setItems(itemsResponse.data)//а последними главная стр
            } catch (error) {
                alert('Ошибка при запросе данных.')
            }
        })()
    }, [])

    const onAddToCard = async (obj) => {
        try {
            const findItem = cartItems.find((item) => Number(item.parantID) === Number(obj.id))
            if (findItem) {
                setCartItems(prev => prev.filter(item => Number(item.parantID) !== Number(obj.id)))
                await axios.delete(`https://60d6d8a1307c300017a5f527.mockapi.io/card/${obj.id}`) //по ссылки передай мне этот  obj
            } else {
                setCartItems((prev) => [...prev, obj])
                const {data} = await axios.post('https://60d6d8a1307c300017a5f527.mockapi.io/card', obj)
                setCartItems(prev => prev.map((item) => {
                    if (item.parentID === data.parentID) {
                        return {
                            ...item, id: data.id
                        }
                    }
                    return item
                }))
            }
        } catch (error) {
            alert('Не удалось добавить')
        }
    }
    //post запрос при получении чегото
    const onRemoveItems = (id) => {
        try {
            axios.delete(`https://60d6d8a1307c300017a5f527.mockapi.io/card/${id}`) //по ссылки передай мне этот  id
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))// фильтруем если приходит id=3 то новый массив будет без id=3
        } catch (error) {
            alert('Ошибка при удалении из корзины :(')
        }
    }
    const onAddFavorites = async (obj) => {
        //функция у нас ассинхронная и дожидаюсь там ответа где нам необходимо
        try {
            if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
                await axios.delete(`https://60d6d8a1307c300017a5f527.mockapi.io/favorites/${obj.id}`)
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
                onAddToCard,
                isItemAdded,
                setCartOpened,
                setCartItems,
            }}>
            <div className='wrapper'>
                {cartOpened && <Drawer
                    onRemove={onRemoveItems}
                    items={cartItems}
                    onClose={() => setCartOpened(false)}
                />}
                {/*если cartOpened true то отображаем*/}
                <Header onClickCard={() => setCartOpened(true)}/>
                <Route exact path='/'>
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
                <Route exact path='/favorites'>
                    <Favorites/>
                </Route>
                <Route exact path='/orders'>
                    <Orders/>
                </Route>
            </div>
        </AppContext.Provider>
    );
}

export default App;
