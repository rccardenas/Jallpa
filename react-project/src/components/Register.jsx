function Register(props) {
    
    const { inputName, inputLastname, inputEmail, inputPassword, inputCellphone, inputLocation, handleInputChange, registerUser } = props;

    return(
        <div className="register-container">
            <div className="input-container">
              <img width="20" src={search} alt=""/>
              <input value={inputName} onChange={handleInputChange} className="input-register" type="text" placeholder="Nombre"/>
            </div>
            <div className="input-container">
              <img width="20" src={search} alt=""/>
              <input value={inputLastname} onChange={handleInputChange} className="input-register" type="text" placeholder="Apellido"/>
            </div>
            <div className="input-container">
              <img width="20" src={search} alt=""/>
              <input value={inputEmail} onChange={handleInputChange} className="input-register" type="text" placeholder="Correo electrónico"/>
            </div>
            <div className="input-container">
              <img width="20" src={search} alt=""/>
              <input value={inputPassword} onChange={handleInputChange} className="input-register" type="text" placeholder="Contraseña"/>
            </div>
            <div className="input-container">
              <img width="20" src={search} alt=""/>
              <input value={inputCellphone} onChange={handleInputChange} className="input-register" type="number" placeholder="Número de teléfono"/>
            </div>
            <div className="input-container">
              <img width="20" src={search} alt=""/>
              <input value={inputLocation} onChange={handleInputChange} className="input-register" type="text" placeholder="Ciudad donde te encuentras"/>
            </div>
            <div>
              <button className="btn-register" onClick={registerUser}>Regístrate</button>
            </div>
        </div>
    );
}

export default Register;