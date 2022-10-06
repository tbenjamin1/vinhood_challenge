import React from 'react';
import SearchFilter from '@components/searchFilter'
import { Header } from '../../stories/Header';

const Home = () => {
    return (
        <div>
           
             <Header user={{
                name: 'VinHood Challenge'
            }}
                onCreateAccount={() => { }}
                onLogin={() => { }}
                onLogout={() => { }} />
            <SearchFilter />
        </div>
    )
}

export default Home
