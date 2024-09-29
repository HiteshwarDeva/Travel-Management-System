import { Link } from 'react-router-dom'
import './index.css'
const Navbar = () => {
    return (
        <div className="nav-container">
            <img src='Images/logo.jpg' className='logo-img'/>
            <div className="btn-container">
                <button className="nav-button">
                    <span className="spanEl">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    Search
                </button>
            </div>
            <div className="btn-container">
                <Link to='/home' className="nav-button">
                    <span className="spanEl">
                        <i class="fa-solid fa-house"></i>
                    </span>
                    Home
                </Link>
            </div>
            <div className="btn-container">
                <Link to='/bookings' className="nav-button">
                    <span className="spanEl">
                        <i class="fa-solid fa-plane-departure"></i>
                    </span>

                    Travel Bookings

                </Link>
            </div>
            <div className="btn-container">
                <Link to='/hotels' className="nav-button">
                    <span className="spanEl">
                        <i class="fa-solid fa-hotel"></i>
                    </span>

                    Hotel Bookings

                </Link>
            </div>
            <div className="btn-container">
                <Link to='/feed' className='nav-button'>
                    <span className="spanEl">
                        <i class="fa-solid fa-comment"></i>
                    </span>
                    Your Feed
                </Link>
            </div>
        </div>
    )
}

export default Navbar