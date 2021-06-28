import {Card} from "../Components/Card/Card";

export function Favorites({items, onAddFavorites}) {
    return (
        <div className="content">
            <div className='search_top'>
                <h1>Мои закладки</h1>
            </div>
            <div className="favorites">
                {items.map((item, index) => (
                    <Card
                        key={index}
                        id={item.id}
                        {...item}
                        // imgUrl={item.imgUrl}
                        // price={item.price}
                        // id={item.id}
                        // title={item.title}
                        favorited={true}
                        onAddFavorites={onAddFavorites}
                    />))}
            </div>
        </div>
    )
}