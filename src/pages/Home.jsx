import {Card} from "../Components/Card/Card";

export function Home({items, searchValue, setSearchValue, onAddFavorites, onAddToCard, onChangeSearchInput}) {
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
                {items
                    .filter((item) => item.title   //фильтруем по названию
                        .toLowerCase()              // название в нижний регистр
                        .includes(searchValue.toLowerCase()))     // содержит ли масив(элемент)
                    .map((item) => (
                        <Card
                            key={item.id}
                            {...item}
                            // id={item.id}
                            // imgUrl={item.imgUrl}
                            // price={item.price}
                            // title={item.title}
                            onFavorite={(obj) => onAddFavorites(obj)}
                            onPlus={(obj) => onAddToCard(obj)}
                        />))}
            </div>
        </div>
    )
}