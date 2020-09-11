import React from "react";

const Theme = (props) => {
  const handleToggle = () => {
    props.color();
  };

  return (
    <button className="buttonTheme" onClick={() => handleToggle()}>
      Ubah Warna
    </button>
  );
};

export default Theme;
