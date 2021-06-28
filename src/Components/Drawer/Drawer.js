export function Drawer({onClose, items = [], onRemove}) {
    return (
        <div className='overlay'>
            <div className='drawer'>
                <h2>Корзина
                    <img
                        className='removeBtn'
                        src={"img/Btn_remove.svg"}
                        alt="remove"
                        onClick={onClose}
                    />
                </h2>

                {items.length > 0 ? <>
                    <div className='items'>
                        {items.map((obj) => (
                            <div key={obj.id}
                                 className='cartItem'>
                                <img className='sneakers_remove'
                                     src={obj.imgUrl}
                                     alt="sneakers"/>
                                <div className='names'>
                                    <p>{obj.title}</p>
                                    <b>{obj.price}</b>
                                </div>
                                <img
                                    onClick={() => onRemove(obj.id)}
                                    className='removeBtn'
                                    src={"img/Btn_remove.svg"}
                                    alt="remove"
                                />
                            </div>
                        ))}
                    </div>
                    <div className='totalBlock'>
                        <ul>
                            <li>
                                <span> Итого</span>
                                <div></div>
                                <b>21234 руб</b>
                            </li>
                            <li>
                                <span>Налое</span>
                                <div></div>
                                <b> 2102 руб</b>
                            </li>
                        </ul>
                        <button className='greenButton'>buy
                            <img className='arow' src={"img/arrow.svg"} alt="arrow"/>
                        </button>
                    </div>
                </> : <div className='cartEmpty'>
                    <img className='empty' src={"img/empty.png"} alt="garbich"/>
                    <h2>Корзина пуста</h2>
                    <p> Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <button onClick={onClose}  className='greenButton'>
                        вернуться назад
                        <img className='arow' src={"img/arrow.svg"} alt="Arow"/>
                    </button>
                </div>}
            </div>
        </div>
    )
}