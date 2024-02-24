import React from 'react';
function ListMenuSidebar({menu, location}) {

    const isSelected = location.pathname === menu.path

    return (
            <ul className="nav nav-pills flex-column mb-auto">
                <li className='nav-item'>
                    <a href={menu.path}
                       className={`nav-link ${isSelected ? `active` : ``}`}
                       aria-current="page">
                        {menu.icon} {menu.name}
                    </a>
                </li>
            </ul>
    );
}

export default ListMenuSidebar;
