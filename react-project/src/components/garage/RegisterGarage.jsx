function RegisterGarage(props) {

  const { inputName, inputPrice, inputLocation, inputPhoto, handleInputChange, registerGarage } = props;

  return (
    <div className="register-garage-container">
      <div className="input-container">
        <img width="20" src={search} alt="" />
        <input value={inputName} onChange={handleInputChange} className="input-register-garage" type="text" placeholder="Nombre" />
      </div>
      <div className="input-container">
        <img width="20" src={search} alt="" />
        <input value={inputPrice} onChange={handleInputChange} className="input-register-garage" type="number" placeholder="Precio por hora" />
      </div>
      <div className="input-container">
        <img width="20" src={search} alt="" />
        <input value={inputLocation} onChange={handleInputChange} className="input-register-garage" type="text" placeholder="Dirección" />
      </div>
      <div className="input-container">
        <img width="20" src={search} alt="" />
        <input value={inputPhoto} onChange={handleInputChange} className="input-register-garage" type="number" placeholder="Fotos" />
      </div>
      <div>
        <button className="btn-register-garage" onClick={registerGarage}>Registrar cochera</button>
      </div>
    </div>
  );
}

export default RegisterGarage;