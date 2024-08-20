import fill from "../../../assets/home-fill.svg";

const CompanyRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-main">
        <img className="w-1/2 max-h-full" src={fill} alt="" />
        <div className=" w-1/2 bg-white my-5 rounded-md flex flex-col items-center">
          <span className="font-bold m-3">Sign Up for Company</span>
          <form className="flex p-2 w-full h-full" action="">
            <div className="w-1/2 h-5/6 flex flex-col">
              <span>Full Name</span>
              <input className="input-box" type="text" />

              <span>Full Name</span>
              <input className="input-box" type="text" />

              <span>Full Name</span>
              <input className="input-box" type="text" />
            </div>
            <div className="w-1/2 h-5/6">
              <span>Full Name</span>
              <input className="input-box" type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegister;
