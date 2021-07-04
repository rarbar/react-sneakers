import React from 'react'
import {Card} from "../Components/Card/Card";
import {useContext} from "react";
import {AppContext} from "../App";

export function Favorites() {

    const {favorites, onAddFavorites}=useContext(AppContext) //favorites вытаскиваю из AppContext

    return (
        <div className="content">
            <div className='search_top'>
                <h1>Мои закладки</h1>
            </div>
            <div className="favorites">
                {favorites.map((item,index) => (
                    <Card
                        key={index}
                        {...item}
                        favorited={true}
                        onFavorites={onAddFavorites}
                    />))}
            </div>
        </div>
    )
}