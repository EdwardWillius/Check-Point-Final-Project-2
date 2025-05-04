import Navbar from "../../component/Navbar";

const LoginPage = () => {
    return (
        <div>
            <Navbar />
            <input type="text" name="email" placeholder="email"  />
            <input type="password" name="password" placeholder="password"  />
            <button>Login</button>
        </div>
    );
}


export default LoginPage;