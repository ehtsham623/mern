import React from "react";
import { Oval } from "react-loader-spinner";

const CircularLoader = ({ height = "25", width = "25" }) => {
  return (
    <div className="flex center h-10 px-4 py-2 justify-center">
      <Oval
        visible={true}
        height={height}
        width={width}
        strokeWidth="6"
        color="#2563eb"
        secondaryColor="#374151"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperclassName=""
      />
    </div>
  );
};

export default CircularLoader;
