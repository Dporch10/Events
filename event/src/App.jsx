import "./App.css";
import Header from "./layout/Header/header";
import Home from "./Components/Home/Home";
import Conference from "./Components/Conference/conference";
const App = () => {
    return (
        <>
            <Header />   
            <Home /> 
            <Conference />
        </>
    );
};
export default App;