import { useLocation, useNavigate } from 'react-router-dom';

const useNavigations = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigations = [
        {
            id: 1,
            name: 'List Movie',
            icon: <i className='bi bi-house'></i>,
            path: '/'
        },
        {
            id: 2,
            name: 'My Playlist Movie',
            icon: <i className='bi bi-list'></i>,
            path: '/my-playlist-movie'
        },
    ];

    const handleClick = (path) => {
        navigate(path);
    };

    return { navigations, handleClick, location };
};

export default useNavigations;
