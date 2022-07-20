import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import PortfolioPerform from './components/portfoliohistory/PortfolioPerform';
import Positions from './components/positions/Positions';
import Nav from './components/pages/nav/Nav';
import Trade from './components/trade/Trade';
import News from './components/news/News';
import OrderHistory from './components/orderhistory/OrderHistory';
import TradeConfirm from './components/trade/TradeConfirm';
import {PositionProvider} from './contexts/PosContext'
import { AcctProvider } from './contexts/AcctContext';

function App() {

  return (
    <div className="App">
      <PositionProvider>
        <AcctProvider>
        <BrowserRouter>
          <div className="sections">
            <Nav/>
              <Routes>
                <Route path='/news' element={<News />}/>
                  <Route exact path='/' element={ <Dashboard />}/>
                  <Route path='/positions' element={<Positions/>} />
                  <Route path='/trade' element={<Trade />} />
                  <Route path='/tradeconfirm' element={<TradeConfirm/>} />
                  <Route path='/orderhistory' element={<OrderHistory/>} />
                  <Route path='/performance' element={<PortfolioPerform />} />
              </Routes>
          </div>
          </BrowserRouter>
          </AcctProvider>
        </PositionProvider>
    </div>
  )
}

export default App;
