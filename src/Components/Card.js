export function Card() {
    return (
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
    )
}