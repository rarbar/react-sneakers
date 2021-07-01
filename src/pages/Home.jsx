import {Card} from "../Components/Card/Card";

export function Home({cartItems, items, searchValue, setSearchValue, onAddFavorites, onAddToCard, onChangeSearchInput, isLoading})

{
    const renderItems = () => {
        const filterItems = items.filter((item) =>
            //фильтруем по названию // название в нижний регистр // содержит ли масив(элемент)
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        //если isLoading(true) ты мы создадим массив из 10 (undefined)
        return (isLoading ? [...Array(8)] : filterItems).map((item) => (
                    <Card
                        // key={item.id}
                        // id={item.id}
                        // imgUrl={item.imgUrl}
                        // price={item.price}
                        // title={item.title}
                        {...item}
                        added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
                        onFavorites={onAddFavorites}
                        onPlus={(obj) => onAddToCard(obj)}
                        loading={isLoading}
                    />))
    }
    return (
        <div className="content">
            <div className='search_top'>
                <h1>{searchValue ? `введите текст:${searchValue}` : 'All sneakers'}</h1>
                {'searchValue' &&
                <img
                    className='clear'
                    onClick={() => {
                        setSearchValue('')
                    }}
                    src={"img/Btn_remove.svg"}
                    alt="remove"/>}
                <div className='search_block'>
                    <img src={"img/search.svg"} alt="Search"/>
                    <input
                        value={searchValue}
                        onChange={onChangeSearchInput}
                        placeholder='search'/>
                </div>
            </div>
            <div className="Sneakers">
                {renderItems()}
            </div>
        </div>
    )
}