import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import SellIcon from '@mui/icons-material/Sell';
import ReceiptIcon from '@mui/icons-material/Receipt';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { useAuth } from '../../context/authContext';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Navbar = () => {

    const {logout, loading } = useAuth();

    const handleLogout = async () => {
        try{
            await logout();
        }
        catch (error){
            console.error(error);
        }
    };

    if (loading) return <h1>loading</h1>;

    return (
        <div className='navbar'>
            <div className='logo'>
                Market Pool
            </div>
            <div className='navbar-wrapper'>
                <ul className='navbar-ul'>
                    <li className='navbar-li'>
                        <Link className='navbar-anchor' to="/">
                            <HomeIcon className='nav-icon' />
                            <span className='nav-span'>Home</span>
                        </Link>
                    </li>
                    <li className='navbar-li'>
                        <Link className='navbar-anchor' to="sell">
                            <SellIcon className='nav-icon' />
                            <span className='nav-span'>Sell Item</span>
                        </Link>
                    </li>
                    <li className='navbar-li'>
                        <Link className='navbar-anchor' to="transactions">
                            <ReceiptIcon className='nav-icon' />
                            <span className='nav-span'>Transactions</span>
                        </Link>
                    </li>
                    <li className='navbar-li'>
                        <Link className='navbar-anchor' to="statistics">
                            <InsertChartIcon className='nav-icon' />
                            <span className='nav-span'>Reports</span>
                        </Link>
                    </li>
                </ul>
                <ul className='navbar-ul'>
                    <li className="navbar-li">
                        <button onClick={handleLogout} className="navbar-anchor">
                            <PowerSettingsNewIcon className='nav-icon' />
                            <span className="nav-span">Log out</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar