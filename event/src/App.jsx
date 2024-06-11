import "./App.css";
import Header from "./layout/Header/header";
import Home from "./Components/Home/Home";
import Conference from "./Components/Conference/conference";
import RecentEvents from "./Components/RecentEvents/RecentEvents";



const App = () => {
    return (
        <>
            <Header />   
            <Home /> 
            <Conference />
            <RecentEvents/>
        </>
    );
};
export default App;