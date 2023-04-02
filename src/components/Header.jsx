import React from "react";

const Header = () => {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "Febraury",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let d = new Date();
  console.log(d.getDay());
  let date =
    week[d.getDay()] +
    ", " +
    months[d.getMonth()] +
    " " +
    d.getDate() +
    ", " +
    d.getFullYear();
  let time = d.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    timeStyle: "medium",
    hourCycle: "h24",
  });
  return (
    <div className="header">
      <div>{date + " " + time}</div>
      <div>
        {/* <button
          className="admin-btn"
          onClick={() => {
            alert("In order to access admin panel authentication is needed");
          }}
        >
          Admin Panel
        </button> */}

        <a href="#contact">
          <button className="admin-btn">Mail Us</button>
        </a>
      </div>
    </div>
  );
};
export default Header;
