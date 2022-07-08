import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Items from "./components/Items";
import Transactions from "./components/Transactions";
import Statistics from "./components/Statistics";
import Navbar from "./components/Navbar";

function App() {

  return (

    <div className='app'>
      <Navbar />
      <div className="Main">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="sell" element={<Items />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="statistics" element={<Statistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
