import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';



const Home = () => {

  return (
    <div className='home-page'>
      <Link to="/sell" className='action-card-square sell-bg no-decoration'>
        <div className='action-header'>
          <h2 className='action-sell-title'>Sell</h2>
        </div>
        <div className='action-card-content'>
          <ArrowCircleUpIcon fontSize={'large'} className="sell-action" />
        </div>
      </Link>

      <Link to="/withdraws" className='action-card-square withdraw-bg no-decoration'>
        <div className='action-header'>
          <h2 className='action-withdraw-title'>Withdraw</h2>
        </div>
        <div className='action-card-content'>
          <ArrowCircleDownIcon fontSize={'large'} className="withdraw-action" />
        </div>
      </Link>
    </div>
  )
}

export default Home