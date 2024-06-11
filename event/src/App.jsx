import "./App.css";
import Header from "./layout/Header/header";
import Home from "./Components/Home/Home";
import Conference from "./Components/Conference/conference";
import RecentEvents from "./Components/RecentEvents/RecentEvents";
import Events from "./Components/Events/Events";
import Contact from "./Components/Contact/Contact";


const App = () => {
    return (
        <>
            <Header />   
            <Home /> 
            <Conference />
            <RecentEvents/>
            <Events/>
            <Contact/>
        </>
    );
};
export default App;