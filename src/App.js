import {Card} from "./Components/Card";
import {Header} from "./Components/Header";
import {Drawer} from "./Components/Drawer";

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
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default App;
