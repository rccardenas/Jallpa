import jallpa from "../assets/wallpapers/jallpa.jpg";

function Information() {

    return(
        <div className="section-information">
            <img src={jallpa} alt=""/>
            <div className="title">Conoce Jallpa</div>
            <div>
                Estacionamientos vayas donde vayas
            </div>
        </div>
    );
}
export default Information;