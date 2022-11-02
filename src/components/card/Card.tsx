import HouseImage from "../../assets/images/house1.jpg";
import BedIcon from "../../assets/images/bed.png";
import BathroomIcon from "../../assets/images/bathroom.png";
import SquareMeterIcon from "../../assets/images/square-meter.png";
import Favorite from "../../assets/images/favorite.png";
import Sparkle from "../../assets/images/sparkle.png";

import "./Card.css";

export default function Card() {
    return (
        <div className="card">
            <div className="card-img">
                <img src={HouseImage} alt="house" aria-label="house" />
            </div>
            <div className="card-details">
                <div className="popular-tag">
                    <img src={Sparkle} alt="sparkle" aria-label="sparkle" />
                    Popular
                </div>
                <div className="favorite">
                    <img src={Favorite} alt="favorite" aria-label="favorite" />
                </div>
                <div className="price"><span className="amount">$2,095</span>/month</div>
                <div className="name">Palm Harbor</div>
                <div className="address">2699 Green Valley, Highland lake, FL</div>
                <div className="ammenities">
                    <span className="ammenity">
                        <img src={BedIcon} alt="ammenity" className="icon" />
                        <span className="ammenity-name">3 Beds</span>
                    </span>
                    <span className="ammenity">
                        <img src={BathroomIcon} alt="ammenity" className="icon" />
                        <span className="ammenity-name">2 Bathrooms</span>
                    </span>
                    <span className="ammenity">
                        <img src={SquareMeterIcon} alt="ammenity" className="icon" />
                        <span className="ammenity-name">5x7.5m<sup>2</sup></span>
                    </span>
                </div>
            </div>
        </div>
    )
}
