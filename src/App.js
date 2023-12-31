import React from 'react';
import Nav from './components/nav';
import Pagetwo from './components/pagetwo'; 
import Border from './components/border';
import Pagethree from './components/pagethree';
import Pagefour from './components/pagefour';
import Pagefive from './components/pagefive';
import Last from './components/last';
import Footer from './components/footer';

export default function App(){
    return(
        <div className='background'>
            <Nav />
            <Border />
            <Pagetwo />
            <Border />
            <Pagethree />
            <Border />
            <Pagefour />
            <Border />
            <Pagefive />
            <Border />
            <Last />
            <Border />
            <Footer />
        </div>
    );
}