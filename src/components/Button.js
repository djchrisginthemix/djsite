import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  text,
  type,
  link,
  useLink,
  color = "blue",
  size = "md",
  onClick,
  disabled,
  dataName,
  dataPrice,
  dataInitialCost,
}) => {
  const colorClasses = {
    blue: "bg-blue-ice hover:bg-pink-mid text-white",
    orange: "bg-pink-mid hover:bg-blue-ice text-white",
    orangeYellow: "bg-pink-mid hover:bg-orange-mid text-white",
    yellow: "bg-orange-mid hover:bg-pink-mid text-white",
    white: "bg-white hover:bg-pink-mid text-gray-800 hover:text-white",
    whiteBlue: "bg-white hover:bg-blue-ice text-gray-800 hover:text-white",
  };

  const sizeClasses = {
    sm: "text-lg md:text-base font-bold px-8 md:px-6 py-3 md:py-2",
    md: "text-xl md:text-lg font-bold px-10 md:px-8 py-4 md:py-3",
    lg: "text-xl font-extrabold px-12 md:px-10 py-5 md:py-4",
  };

  const commonButtonProps = {
    type,
    className: `rounded-full ${colorClasses[color]} ${sizeClasses[size]} cursor-pointer transition duration-500 ease-in-out shadow-sm`,
    onClick,
    disabled,
    "data-name": dataName,
    "data-price": dataPrice,
    "data-initial-cost": dataInitialCost,
  };

  if (!useLink) {
    return <button {...commonButtonProps}>{text}</button>;
  }

  return (
    <Link to={link}>
      <button {...commonButtonProps}>{text}</button>
    </Link>
  );
};

export default Button;
