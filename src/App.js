import './App.css';
import {Navbar,WhatWedo, Header,Cl,Expertise} from './container'
import Footer from './container/Footer/Footer';

function App() {
  return (
    <div className='app' >
    <Navbar/>
    <Header/>
    <WhatWedo/>
    <Cl/>
    <Expertise/>
    <Footer/>
    </div>
  );
}

export default App;
