import React, {useContext, useState} from 'react'
import s from './Card.module.scss';
import ContentLoader from "react-content-loader"
import {AppContext} from "../../App";
import heard_liked from '../../img/heard_liked.svg'
import unLike from "../../img/unLike.svg"
import butGreen from "../../img/butGreen.svg"
import plus from "../../img/plus.svg"


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
    const objItem = {id, title, imgUrl, price}

    const onClickPlus = () => {
        onPlus(objItem);
    }
    const onClickFavorite = () => {
        onFavorites(objItem)
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
                    {onFavorites && (<div className={s.favorite} onClick={onClickFavorite}>
                        <img src={isFavorite ? heard_liked : unLike} alt="heart"/>
                    </div>)}
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
                        {onPlus && (<img className={s.plus}
                                         src={isItemAdded(id) ? butGreen : plus}
                                         alt="plus"
                                         onClick={onClickPlus}/>)}
                    </div>
                </>
            }
        </div>
    )
}
