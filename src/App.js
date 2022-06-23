import logo from './logo.svg';
import './App.css';
import Ex1 from "./components/ex1";
import MapEx from "./components/mapEx";
import Kiosk from "./components/kiosk";
import Count from "./components/count";
import Posts from "./components/posts";

function App() {
    return (
        <div className="App">
            {/*<Ex1></Ex1>*/}
            {/*<MapEx></MapEx>*/}
            {/*<MapEx></MapEx>*/}
            {/*<MapEx></MapEx>*/}
            {/*<Kiosk></Kiosk>*/}
            <Count/>
            <Posts></Posts>
        </div>
    );
}

export default App;
