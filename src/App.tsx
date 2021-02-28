import React from 'react';
import RandomTacoData from './components/RandomTacoData';
import Footer from './components/Footer';
// import ReactDOM from 'react-dom';
import Nav from './components/Nav';

function App() {
    return (
        <>
            <div className="content">
                <Nav />
                <main>
                    <RandomTacoData />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
