import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{display: 'flex', gap: '10px'}}>
           <Link to='/'>Home</Link>
           <Link to='/about-us'>About Us</Link>

           <Link to='/login'>Login</Link>
        </div>
    );
}

export default Navbar;