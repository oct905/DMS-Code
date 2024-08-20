import logo from "../assets/logo-avisha-white.svg";

const LoginNavbar = () => {
  return (
    <nav className="nav-login">
      <div className="nav-login-container">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className="flex items-center gap-3">
          <span className="text-white text-base">
            <a href="">Company</a> | <a href="/">Jobseekers</a>
          </span>
          <button className="custom-blue-btn">Signup</button>
          <button className="custom-blue-btn">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default LoginNavbar;
