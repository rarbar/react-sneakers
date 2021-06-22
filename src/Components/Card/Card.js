import s from './Card.module.scss';


export function Card(props) {

    const onClickBtn=()=>alert(props.price)

    return (
        <div className={s.card}>
            <div className={s.favorite}>
                <img src={"img/heard_liked.svg"} alt="heart"/>
            </div>
            <img
                width='133'
                height='112'
                src={props.imgUrl}
                alt="1"/>

            <h5>{props.title}</h5>
            <div className={s.cardButton}>
                <div className={s.cardSale}>
                    <span>цена</span>
                    <b>{props.price}</b>
                </div>
                <button  className={s.button}
                         onClick={onClickBtn}>
                    <img
                        width={11}
                        height={11}
                        src={"/img/plus.svg"}
                        alt="plus"/>
                </button>
            </div>
        </div>
    )
}