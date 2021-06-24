import {Card} from "./Components/Card/Card";
import {Header} from "./Components/Header/Header";
import {Drawer} from "./Components/Drawer/Drawer";
import {logDOM} from "@testing-library/react";


const arr = [
    {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: '12 300',
        imgUrl: 'img/sneakers/1.jpg'
    },
    {
        title: 'Мужские Кроссовки Nike Air Max 270',
        price: '12 000',
        imgUrl: 'img/sneakers/2.jpg'
    },
    {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: '12 100',
        imgUrl: 'img/sneakers/3.jpg'
    },
    {
        title: 'Кроссовки Puma X Aka Boku Future Rider',
        price: '89 000',
        imgUrl: 'img/sneakers/4.jpg'
    },
]

function App() {
    return (
        <div className='wrapper'>
            <Drawer/>
            <Header/>
            <div className="content">
                <div className='search_top'>
                    <h1>All sneakers</h1>
                    <div className='search_block'>
                        <img src={"img/search.svg"} alt="Search"/>
                        <input placeholder='search'/>
                    </div>
                </div>
                <div className="Sneakers">
                    {arr.map((obj) => (
                        <Card
                            imgUrl={obj.imgUrl}
                            price={obj.price}
                            title={obj.title}
                            onFavorite={()=>console.log(1)}
                            onPlus={()=>console.log(2)}
                        />))}
                </div>
            </div>
        </div>
    );
}

export default App;
