import React from 'react'
import {Card} from "../Components/Card/Card";
import btnRemove from "../img/btnRemove.svg"
import search from "../img/search.svg"

export function Home({   items,
                         searchValue,
                         setSearchValue,
                         onAddFavorites,
                         onAddToCard,
                         onChangeSearchInput,
                         isLoading
                     }) {
    const renderItems = () => {
        const filterItems = items.filter((item) =>
            //фильтруем по названию // название в нижний регистр // содержит ли масив(элемент)
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        //если isLoading(true) ты мы создадим массив из 10 (undefined)
        return (isLoading ? [...Array(5)] : filterItems).map((item,index) => (
            <Card
                key={index}
                // id={item.id}
                // imgUrl={item.imgUrl}
                // price={item.price}
                // title={item.title}
                {...item}
                onFavorites={onAddFavorites}
                onPlus={(obj) => onAddToCard(obj)}
                loading={isLoading}
            />))
    }
    return (
        <div className="content">
            <div className='search_top'>
                <h1>{searchValue ? `введите текст:${searchValue}` : 'All scooters'}</h1>
                {'searchValue' &&
                <img
                    className='clear'
                    onClick={() => {
                        setSearchValue('')
                    }}
                    src={btnRemove}
                    alt="remove"/>}
                <div className='search_block'>
                    <img src={search} alt="Search"/>
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