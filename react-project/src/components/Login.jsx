function Login(props) {
    
    const { inputEmail, inputPassword } = props;

    return(
        <div className="login-container">
            <div className="input-container">
              <img width="20" src={search} alt=""/>
              <input value={inputEmail} onChange={handleInputChange} className="input-login" type="text" placeholder="Correo electrónico"/>
            </div>
            <div className="input-container">
              <img width="20" src={search} alt=""/>
              <input value={inputPassword} onChange={handleInputChange} className="input-login" type="text" placeholder="Contraseña"/>
            </div>
            <div>
              <button className="btn-login" onClick={loginUser}>Login</button>
            </div>
        </div>
    );
}

export default Login;