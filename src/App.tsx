import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  	return (
		<>
			<div className='content'>
				<Nav />
				<main>
					<p>Let's eat tacos!</p>
				</main>
				<Footer />
			</div>
		</>
 	 );
}

export default App;
