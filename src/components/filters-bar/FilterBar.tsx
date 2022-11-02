import Button from "../button/Button";
import DownArrow from "../../assets/images/arrow-down.png";
import CalendarIcon from '../../assets/images/calendar.png';
import "./FilterBar.css";

export default function FilterBar() {
  return (
    <div className="filter-bar">
        <div className="filter">
            <div className="filter-title">Location</div>
            <span className="filter-value">New York, USA</span>
        </div>
        <div className="filter">
            <div className="filter-title">When</div>
            <span className="filter-value">Select Move-in Date</span>
            <span className="filter-dropdown">
                <img src={CalendarIcon} alt="filter-dropdown" aria-label="filter-dropdown" />
            </span>
        </div>
        <div className="filter">
            <div className="filter-title">Price</div>
            <span className="filter-value">$500-$2,500</span>
            <span className="filter-dropdown">
                <img src={DownArrow} alt="filter-dropdown" aria-label="filter-dropdown" />
            </span>
        </div>
        <div className="filter">
            <div className="filter-title">Property Type</div>
            <span className="filter-value">Houses</span>
            <span className="filter-dropdown">
                <img src={DownArrow} alt="filter-dropdown" aria-label="filter-dropdown" />
            </span>
        </div>
        <div className="search-btn">
            <Button buttonText="Search" fill={true} size="large" onClick={()=>""}/>
        </div>
    </div>
  )
}
