
import './App.css';
import LadingPage from './dilse/pages/LadingPage';
import {Routes, Route } from 'react-router-dom';
import ProductMenu from './dilse/components/ProductMenu';
import TopBar from './dilse/components/TopBar';
function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<LadingPage/>}/>
         <Route path='/products/:firmId' element={
          <>
              <TopBar/>
              <ProductMenu/>
          </>
          }/>
      </Routes>
    </div>
  );
}

export default App;
