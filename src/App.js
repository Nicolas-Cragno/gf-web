import './assets/css/App.css';
import Layout from './components/Layout';
import Home from './containers/Home';
import News from './containers/News';
import About from './containers/About';
import Market from './containers/Market';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/noticias' element={<News/>}></Route>
            <Route exact path='/predio' element={<About/>}></Route>
            <Route exact path='/indumentaria' element={<Market/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
