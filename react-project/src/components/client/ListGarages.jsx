function ListGarages(props) {

  const { inputName, inputPrice, inputLocation, inputPhoto, handleInputChange, registerGarage } = props;

  return(
    <div className="section-information">
        <div className="title">Conoce Jallpa</div>
        <div>
            Estacionamientos vayas donde vayas
        </div>
    </div>
);
}

export default ListGarages;