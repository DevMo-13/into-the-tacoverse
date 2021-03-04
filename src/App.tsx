import React from 'react';
import Footer from './components/Footer';
// import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import RandomTacoData from './components/RandomTacoData';

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
