function App() {
    return (
        <div className='wrapper'>
            <div className="overlay">
                <div className="drawer">
                    <h2>Корзина
                        <img className='removeBtn'
                             src={"img/Btn_remove.svg"}
                             alt="remove"/>
                    </h2>
                    <div className="items">
                        <div className="cartItem">

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
                        <div className="cartItem">

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
                    <div className="totalBlock">
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
                            <img src={"img/arow.svg"} alt="arow"/>
                        </button>
                    </div>
                </div>
            </div>

            <header>
                <div className='headerLeft'>
                    <img width='40' height='40' src={"/img/logo.png"} alt="logo"/>
                    <div className='headerInfo'>
                        <h3>React sneakers</h3>
                        <p>Магазин </p>
                    </div>
                </div>
                <ul className='headerRight'>
                    <li>
                        <img width='18' height='18' src={"img/cart.svg"} alt="logo"/>
                        <span>1250 $</span>
                    </li>
                    <li>
                        <img width='18' height='18' src={"img/hert.svg"} alt="logo"/>
                    </li>
                    <li>
                        <img width='18' height='18' src={"img/user.svg"} alt="logo"/>
                    </li>
                </ul>

            </header>
            <div className="content">
                <div className='search_top'>
                    <h1>All sneakers</h1>
                    <div className='search_block'>
                        <img src={"img/search.svg"} alt="Search"/>
                        <input placeholder='search'/>
                    </div>
                </div>
                <div className="Sneakers">

                    <div className="card">
                        <div className="favorite">
                            <img src={"img/heard_liked.svg"} alt="heart"/>
                        </div>
                        <img
                            width='133'
                            height='112'
                            src={"img/sneakers/1.jpg"}
                            alt="1"/>

                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className='cardButton'>
                            <div className='cardSale'>
                                <span>цена</span>
                                <b>12333</b>
                            </div>
                            <button className='button'>
                                <img
                                    width='11'
                                    height='11'
                                    src={"/img/plus.svg"}
                                    alt="plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            width='133'
                            height='112'
                            src={"img/sneakers/2.jpg"}
                            alt="2"/>

                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className='cardButton'>
                            <div className='cardSale'>
                                <span>цена</span>
                                <b>12333</b>
                            </div>
                            <button className='button'>
                                <img
                                    width='11'
                                    height='11'
                                    src={"/img/plus.svg"}
                                    alt="plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            width='133'
                            height='112'
                            src={"img/sneakers/3.jpg"}
                            alt="3"/>

                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className='cardButton'>
                            <div className='cardSale'>
                                <span>цена</span>
                                <b>12333</b>
                            </div>
                            <button className='button'>
                                <img
                                    width='11'
                                    height='11'
                                    src={"/img/plus.svg"}
                                    alt="plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            width='133'
                            height='112'
                            src={"img/sneakers/4.jpg"}
                            alt="4"/>

                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className='cardButton'>
                            <div className='cardSale'>
                                <span>цена</span>
                                <b>12333</b>
                            </div>
                            <button className='button'>
                                <img
                                    width='11'
                                    height='11'
                                    src={"/img/plus.svg"}
                                    alt="plus"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
