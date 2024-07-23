import React from "react";

const ProfileBox = (props) => {
  return (
    <div
      className="w-full flex flex-row items-center gap-2 hover:cursor-pointer"
      onClick={props.onClick}
    >
      <div>
        <img
          src="https://img.freepik.com/fotos-kostenlos/3d-illustration-eines-teenagers-mit-lustigem-gesicht-und-brille_1142-50955.jpg?w=740&t=st=1721305069~exp=1721305669~hmac=369615d3d2a3347075f2d76a37930f1993e32e9ce1a8ba878e5517bf36456482"
          className="h-8 w-8 p-1 rounded-3xl"
        />
      </div>
      <h2 className="font-anderson text-mainblue">{props.name}</h2>
    </div>
  );
};

export default ProfileBox;
