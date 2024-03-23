import React, { useState } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ onLogout }) => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => setExpanded(true);
  const handleMouseLeave = () => setExpanded(false);

  const renderButton = (onClick, text, bgColor) => {
    return (
      <Button
        variant="ghost"
        onClick={onClick}
        className={`${
          expanded ? `bg-${bgColor}-500 hover:bg-${bgColor}-700` : "text-white"
        } font-bold mt-8 py-2 px-4 rounded w-full mb-4 focus:outline-none focus:ring-2 ${
          expanded ? `focus:ring-${bgColor}-500` : ""
        }`}
        style={{ transition: "background-color 0.3s" }}
      >
        {text}
      </Button>
    );
  };

  const renderIcon = (onClick, IconComponent) => {
    return (
      <IconComponent
        onClick={onClick}
        className={`text-white cursor-pointer mb-4 mt-8`}
        size={24}
        style={{ transition: "color 0.5s" }}
      />
    );
  };

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/profile");
  };

  const handlePost = () => {
    // Handle post button click
    console.log("Post button clicked");
  };

  return (
    <div
      className={`bg-gray-900 sticky text-white h-screen p-4 transition-all duration-300 ${
        expanded ? "w-64" : "w-16"
      } fixed left-0 top-0 bottom-0 z-10`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mb-8">
        {/* Profile Button */}
        {expanded
          ? renderButton(handleRedirect, "Profile", "blue")
          : renderIcon(handleRedirect, AiOutlineUser)}

        {/* Messages Button */}
        {expanded
          ? renderButton(
              () => console.log("Messages button clicked"),
              "Messages",
              "blue",
            )
          : renderIcon(
              () => console.log("Messages button clicked"),
              FaEnvelope,
            )}

        {/* Post Button */}
        {expanded
          ? renderButton(handlePost, "Add Post", "blue")
          : renderIcon(handlePost, MdLibraryAdd)}

        {/* Logout Button */}
        <div style={{ position: "absolute", bottom: 0 }}>
          {expanded
            ? renderButton(onLogout, "Logout", "red")
            : renderIcon(onLogout, RiLogoutBoxLine)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
