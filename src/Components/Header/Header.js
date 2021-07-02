import {Link} from "react-router-dom";

export function Header(props) {
    return (
        <header>
            <div className='headerLeft'>
                <Link to='/'>
                    <img width='40' height='40' src={"/img/logo.png"} alt="logo"/>
                </Link>
                <div className='headerInfo'>
                    <h3>React sneakers</h3>
                    <p>Магазин </p>
                </div>
            </div>
            <ul className='headerRight'>
                <li onClick={props.onClickCard}>
                    <img width='18' height='18' src={"img/cart.svg"} alt="logo"/>
                    <span>1250 $</span>
                </li>
                <li>
                    <Link to='/favorites'>
                        <img width='18' height='18' src={"img/Heard.svg"} alt="logo"/>
                    </Link>

                </li>
                <li>
                    <img width='18' height='18' src={"img/user.svg"} alt="logo"/>
                </li>
            </ul>

        </header>
    )
}