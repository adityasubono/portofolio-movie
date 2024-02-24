import './App.css';
import {Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import Sidebar from "./pages/Sidebar/Sidebar";
import useNavigations from "./hooks/useNavigations";
import MyListMovie from "./pages/MyListMovie/MyListMovie";
import Section from "./pages/Section/Section";
import Main from "./pages/Main/Main";
import Footer from "./pages/Footer/Footer";



function App() {
    const { navigations, location } = useNavigations();
    return (
        <>
            <Header titleHeader={'My Movie List'}/>
            <Section/>
            {/*<Main/>*/}

            <div className="container">
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/my-playlist-movie' element={<MyListMovie/>}/>
                </Routes>
            </div>

            <Footer/>
        </>
    );
}

export default App;
