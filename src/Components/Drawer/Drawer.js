


export function Drawer({onClose,items=[],onRemove,id}) {
    return (
        <div className='overlay' >
            <div className='drawer'>
                <h2>Корзина
                    <img
                        className='removeBtn'
                         src={"img/Btn_remove.svg"}
                         alt="remove"
                        onClick={onClose}
                    />
                </h2>
                <div className='items'>
                    {items.map(obj=>(
                        <div key={obj.id}
                            className='cartItem'>
                            <img className='sneakers_remove'
                                 src={obj.imgUrl}
                                 alt="sneakers"/>
                            <div className='names'>
                                <p>{obj.title}</p>
                                <b>{obj.price}</b>
                            </div>
                            <img className='removeBtn'
                                 src={"img/Btn_remove.svg"}
                                 alt="remove"
                                onClick={() => {onRemove(id)}}
                            />
                        </div>
                    ))}
                </div>
                <div className='totalBlock'>
                    <ul>
                        <li>
                            <span> Итого</span>
                            <div> </div>
                            <b>21234 руб</b>
                        </li>
                        <li>
                            <span>Налое</span>
                            <div> </div>
                            <b> 2102 руб</b>
                        </li>
                    </ul>
                    <button className='greenButton'>buy
                        <img src={"img/arrow.svg"} alt="arrow"/>
                    </button>
                </div>
            </div>
        </div>
    )
}