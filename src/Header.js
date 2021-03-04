import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  People,
  Search,
} from "@material-ui/icons";
import React from "react";
import { useDispatch} from "react-redux";
import { logout} from "./features/userSlice";
import { auth } from "./firebase";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import logo from "./images/linkedin.png";

function Header() {

  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }


  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="linkdein_logo_from_flaticon" />
        <div className="header__search">
          <Search />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={People} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar={true}
          title="me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
