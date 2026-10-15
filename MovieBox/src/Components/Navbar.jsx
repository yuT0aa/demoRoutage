import React, { useContext } from 'react';
import { MovieContext } from '../MovieContext';

export default function Navbar(){
    const{state,dispatch}=useContext(MovieContext);

    const watchlistCount=state.movies.filter(m=>m.inWatchlist).length;
    const likedCount=state.movies.filter(m=>m.liked).length;

    const setFilter=(filterName)=>{
        dispatch({type:'SET_FILTER',payload:filterName});
    };

    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <span>MovieBox</span>
            </div>
            <ul className="navbar-links">
                <li className={state.filter==='ALL'?'active':''}>
                    <button onclick={()=>setFilter('ALL')}>All Movies</button>
                </li> 
                <li className={state.filter === 'WATCHLIST' ? 'active' : ''}>
                    <button onClick={() => setFilter('WATCHLIST')}>
                        Watchlist <span className="badge">{watchlistCount}</span>
                    </button>
                </li>
                <li className={state.filter === 'LIKED' ? 'active' : ''}>
                    <button onClick={() => setFilter('LIKED')}>
                        Favoris <span className="badge">{likedCount}</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}