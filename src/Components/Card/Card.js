import React, {useContext} from 'react'
import s from './Card.module.scss';
import {useState} from "react";
import ContentLoader from "react-content-loader"
import {AppContext} from "../../App";

export function Card({
                         id,
                         title,
                         imgUrl,
                         price,
                         onFavorites,
                         onPlus,
                         favorited = false,
                         loading = false
                     }) {
    const {isItemAdded} = useContext(AppContext)
    const [isFavorite, setIsFavorite] = useState(favorited)

    const onClickPlus = () => {
        onPlus({id, title, imgUrl, price});
    }
    const onClickFavorite = () => {
        onFavorites({id, title, imgUrl, price})
        setIsFavorite(!isFavorite)
    }
    return (
        <div className={s.card}>

            {loading ?
                <ContentLoader
                    speed={2}
                    width={155}
                    height={265}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="150"/>
                    <rect x="0" y="170" rx="5" ry="5" width="150" height="15"/>
                    <rect x="0" y="190" rx="5" ry="5" width="90" height="15"/>
                    <rect x="0" y="230" rx="5" ry="5" width="80" height="25"/>
                    <rect x="118" y="223" rx="10" ry="10" width="32" height="32"/>
                </ContentLoader> : <>
                    <div className={s.favorite} onClick={onClickFavorite}>
                        <img src={isFavorite ? "img/heard_liked.svg" : "img/unLike.svg"} alt="heart"/>
                    </div>
                    <img
                        width='100%'
                        height='135'
                        src={imgUrl}
                        alt="1"/>
                    <h5>{title}</h5>
                    <div className={s.cardButton}>
                        <div className={s.cardSale}>
                            <span>цена</span>
                            <b>{price}</b>
                        </div>
                        <img className={s.plus}
                             src={isItemAdded(id) ? "/img/but-green.svg" : "/img/plus.svg"}
                             alt="plus"
                             onClick={onClickPlus}/>
                    </div>
                </>
            }
        </div>
    )
}
