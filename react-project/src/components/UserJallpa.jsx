import parking from "../assets/wallpapers/parking.jpg";

function UserJallpa() {

    return(
        <div className="section-user">
            <img width="200" src={parking} alt=""/>
            <h3 className="title">Busco estacionamiento</h3>
            <div>
                Y con Jallpa conectarás con más estacionamientos disponibles donde sea te encuentres
            </div>
            <div>Empieza ya</div>
        </div>
    );
}
export default UserJallpa;