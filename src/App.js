import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import MyListMovie from "./pages/MyListMovie/MyListMovie";
import Section from "./pages/Section/Section";
import Footer from "./pages/Footer/Footer";



function App() {
    return (
        <div>
            <Header titleHeader={'My Movie List'}/>
            <Section/>

            <div className="container">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/my-playlist-movie' element={<MyListMovie/>}/>
                </Routes>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
