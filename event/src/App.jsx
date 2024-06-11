import "./App.css";
import Header from "./layout/Header/header";
import Home from "./Components/Home/Home";
import Conference from "./Components/Conference/conference";
import RecentEvents from "./Components/RecentEvents/RecentEvents";
import Events from "./Components/Events/Events";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <>
            <Header />   
            <Home /> 
            <Conference />
            <RecentEvents/>
            <Events/>
            <Contact/>
            <Footer/>
        </>
    );
};
export default App;