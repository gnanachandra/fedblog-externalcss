import './App.css';
import Intro from './pages/Intro';
import ErrorPage from './pages/ErrorPage';
import ExternalCSS from './pages/ExternalCSS';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" exact element = {<Intro/>}/>
          {/*<Route path='/TypesOfCSS' exact element={<TypesOfCSS/>}/>*/}
          <Route path='/ExternalCSS' exact element={<ExternalCSS/>}/>
          <Route path='*' exact element={<ErrorPage/>}/> 
        </Routes>
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
