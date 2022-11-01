import { NavLink } from 'react-router-dom';

import Logo from "../../assets/images/logo.png";
import { APP_NAME } from "../../utils/Constants";
import Button from '../button/Button';
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" aria-label="logo" />
        <span className="app-name">{APP_NAME}</span>
      </div>
      <nav>
        <NavLink end to={'/'}>Rent</NavLink>
        <NavLink to={'/buy'}>Buy</NavLink>
        <NavLink to={'/sell'}>Sell</NavLink>
        <NavLink to={'/manage-property'}>Manage Property</NavLink>
        <NavLink to={'/resources'}>Resources</NavLink>
      </nav>
      <div className="auth-btns">
      <Button buttonText="Login" onClick={()=>''}/>
      <Button buttonText="Sign up" onClick={()=>''} fill={true}/>
      </div>
    </header>
  )
}
