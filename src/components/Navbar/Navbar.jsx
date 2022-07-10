import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import SellIcon from '@mui/icons-material/Sell';
import ReceiptIcon from '@mui/icons-material/Receipt';
import InsertChartIcon from '@mui/icons-material/InsertChart';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                Market Pool
            </div>
            <ul className='navbar-ul'>
                <li className='navbar-li'>
                    <Link className='navbar-anchor' to="/">
                        <HomeIcon className='nav-icon'/>
                        <span className='nav-span'>Home</span>
                    </Link>
                </li>
                <li className='navbar-li'>
                    <Link className='navbar-anchor' to="sell">
                        <SellIcon className='nav-icon'/>
                        <span className='nav-span'>Sell Item</span>
                    </Link>
                </li>
                <li className='navbar-li'>
                    <Link className='navbar-anchor' to="transactions">
                        <ReceiptIcon className='nav-icon'/>
                        <span className='nav-span'>Transactions</span>
                    </Link>
                </li>
                <li className='navbar-li'>
                    <Link className='navbar-anchor' to="statistics">
                        <InsertChartIcon className='nav-icon'/>
                        <span className='nav-span'>Reports</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar