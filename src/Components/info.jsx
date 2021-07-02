import React, {useContext} from 'react'
import {AppContext} from "../App";

export function Info({title, img, description}) {
    const {setCartOpened} = useContext(AppContext)
    return (
        <div className='cartEmpty'>
            <img className='empty' src={img} alt="garbich"/>
            <h2>{title}</h2>
            <p> {description}</p>
            <button onClick={() => setCartOpened(false)} className='greenButton'>
                вернуться назад
                <img className='arow' src={"img/arrow.svg"} alt="Arow"/>
            </button>
        </div>
    )
}