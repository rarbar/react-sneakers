import {Link} from "react-router-dom";
import logo from '../../img/logos.png'
import cart from "../../img/cart.svg"
import heard from "../../img/Heard.svg"
import user from "../../img/User.svg"
import {AppContext} from "../../App";
import {useContext} from "react";

export function Header(props) {

    const {cartItems} = useContext(AppContext)
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

    return (
        <header>

            <div className='headerLeft'>
                <Link to='/'>
                    <img width='80' height='80' src={logo} alt="logo"/>
                </Link>
                <div className='headerInfo'>
                    <h3>React sneakers</h3>
                    <p>Магазин </p>

                </div>
            </div>
            <ul className='headerRight'>
                <li onClick={props.onClickCard}>
                    <img width='18' height='18' src={cart} alt="logo"/>
                    <span>{totalPrice}</span>
                </li>
                <li>
                    <Link to='/favorites'>
                        <img width='18' height='18' src={heard} alt="logo"/>
                    </Link>

                </li>
                <li>
                    <Link to='/orders'>
                        <img width='18' height='18' src={user} alt="logo"/>
                    </Link>
                </li>
            </ul>

        </header>
    )
}