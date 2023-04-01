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
  let date =
    week[d.getDay() - 1] +
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
      <div>content two</div>
    </div>
  );
};
export default Header;
