import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slice/mainStateSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const mainStateSelector = useSelector((state) => state.mainState);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </div>
  );
};

export default HomePage;
