import React from "react";
import { Oval } from "react-loader-spinner";

const CircularLoader = () => {
  return (
    <div className="flex center h-10 px-4 py-2 justify-center">
      <Oval
        visible={true}
        height={25}
        width={25}
        strokeWidth="6"
        color="#88B04B"
        secondaryColor="#88B04B"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperclassName=""
      />
    </div>
  );
};

export default CircularLoader;
