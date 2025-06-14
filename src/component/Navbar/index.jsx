import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{display: 'flex', gap: '10px'}}>
           <Link to='/'>Home</Link>
           <Link to='/about-us'>About Us</Link>
           <Link to='/auth'>Auth</Link>
            <Link to='/file'>File</Link>
            <Link to='/profil'>Profil</Link>
            <Link to='/sportcategory'>Sport Category</Link>
            <Link to='/location'>Location</Link>
            <Link to='/sportactiviy'>Sport Activity</Link>
            <Link to='/paymentmethod'>Payment Method</Link>
            <Link to='/transaction'>Transaction</Link>
        </div>
    );
}

export default Navbar;