import React from 'react';
import ListMenuSidebar from "../../components/ListMenuSidebar/ListMenuSidebar";

function Sidebar({navigation, location}) {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                {navigation.map((itemMenu, indexMenu) => (
                    <ListMenuSidebar menu={itemMenu} location={location} key={indexMenu}/>
                ))}
            </div>
        </nav>
    );
}

export default Sidebar;
