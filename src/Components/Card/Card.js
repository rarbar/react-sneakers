import s from './Card.module.scss';
import {useState} from "react";

export function Card({onAddFavorites, imgUrl, price, title, onPlus, id, favorited = false}) {

    const [isAdd, setIsAdd] = useState(false)
    const [isFavorite, setIsFavorite] = useState(favorited)

    const onClickPlus = () => {
        onPlus({id, imgUrl, price, title});
        setIsAdd(!isAdd);
    }
    const onClickFavorite = () => {
        onAddFavorites({id, imgUrl, price, title})
        setIsFavorite(!isFavorite);
    }
    return (
        <div className={s.card}>
            <div className={s.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "img/heard_liked.svg" : "img/unLike.svg"} alt="heart"/>
            </div>
            <img
                width='133'
                height='112'
                src={imgUrl}
                alt="1"/>

            <h5>{title}</h5>
            <div className={s.cardButton}>
                <div className={s.cardSale}>
                    <span>цена</span>
                    <b>{price}</b>
                </div>
                <img className={s.plus}
                     src={isAdd ? "/img/but-green.svg" : "/img/plus.svg"}
                     alt="plus"
                     onClick={onClickPlus}/>
            </div>
        </div>
    )
}
