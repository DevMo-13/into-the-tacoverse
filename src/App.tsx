import React from 'react';
import Footer from './components/Footer';
// import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import TacoLoco from './taco loco/TacoLoco';
import TacoRecipes from './taco recipes/TacoRecipes';

function App() {
    return (
        <>
            <div className="content">
                <Nav />
                <main>
                    <TacoLoco />
                    <TacoRecipes />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
