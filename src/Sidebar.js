import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import img from "./images/sidebar__top.jpg";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  const { displayName, email, photoUrl } = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={img} alt="" />
        <Avatar src={photoUrl} className="sidebar__avatar">
          {!photoUrl ? email[0] : photoUrl}
        </Avatar>
        <h2>{displayName}</h2>
        <h4> {email} </h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">100</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">100</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("html")}
        {recentItem("css")}
        {recentItem("javascript")}
        {recentItem("firebase")}
      </div>
    </div>
  );
}

export default Sidebar;
