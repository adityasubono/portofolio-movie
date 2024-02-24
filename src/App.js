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
        <div>
            <Header titleHeader={'My Movie List'}/>
            <Section/>
            <Main/>
            <Footer/>
            {/*<div className="container-fluid">*/}
            {/*    <div className="row">*/}
            {/*        <Sidebar navigation={navigations} location={location}/>*/}
            {/*        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">*/}
            {/*            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">*/}
            {/*                <Routes>*/}
            {/*                    <Route path='/' element={<Dashboard/>}/>*/}
            {/*                    <Route path='/my-playlist-movie' element={<MyListMovie/>}/>*/}
            {/*                </Routes>*/}
            {/*            </div>*/}
            {/*        </main>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
