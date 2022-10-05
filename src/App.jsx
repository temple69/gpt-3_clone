import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Brands from './components/Brands/Brands';
import Footer from './components/Footer/Footer';
import Future from './components/Future/Future';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Layout from './components/Layout/Layout';
import Register from './components/Register/Register';

function App() {
    return ( 
        <>
        <Header/>
        <Layout>
            <Intro/>
            <Brands/>
        <About/>
        <Register/>
        <Future/>
        <Blog/>
        </Layout>
        <Footer/>
         </>

    );
}

export default App;