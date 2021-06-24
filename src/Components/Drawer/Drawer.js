


export function Drawer() {
    return (
        <div className='overlay'>
            <div className='drawer'>
                <h2>Корзина
                    <img className='removeBtn'
                         src={"img/Btn_remove.svg"}
                         alt="remove"/>
                </h2>
                <div className='items'>
                    <div className='cartItem'>

                        <img className='sneakers_remove'
                             width={70}
                             height={70}
                             src={"img/sneakers/1.jpg"}
                             alt="sneakers"/>
                        <div className='names'>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>121212</b>
                        </div>
                        <img className='removeBtn'
                             src={"img/Btn_remove.svg"}
                             alt="remove"/>
                    </div>
                    <div className='cartItem'>

                        <img className='sneakers_remove'
                             width={70}
                             height={70}
                             src={"img/sneakers/1.jpg"}
                             alt="sneakers"/>
                        <div className='names'>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>121212</b>
                        </div>
                        <img className='removeBtn'
                             src={"img/Btn_remove.svg"}
                             alt="remove"/>
                    </div>
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