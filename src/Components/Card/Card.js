import s from './Card.module.scss';
import {useState} from "react";


export function Card({onFavorite, imgUrl, price,title,onPlus}) {

const[isAdd,setIsAdd]=useState(false)

    const onClickPlus=()=>{
         onPlus({imgUrl, price,title});
        setIsAdd(!isAdd);
    }

    return (
        <div className={s.card}>
            <div className={s.favorite} onClick={onFavorite}>
                <img src={"img/heard_liked.svg"} alt="heart"/>
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
                     src={isAdd?"/img/but-green.svg":"/img/plus.svg"}
                     alt="plus"
                     onClick={onClickPlus}/>
            </div>
        </div>
    )
}
