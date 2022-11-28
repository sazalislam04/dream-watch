import Lottie from "lottie-react";
import React from "react";
import dashboard from "../../assets/animationFile/dashboard.json";
import useSetTitle from "../../hook/useSetTitle";

const Dashboard = () => {
  useSetTitle("Dashboard");
  return (
    <div className="justify-center h-96 my-12 items-center flex">
      <Lottie animationData={dashboard} loop={true} />
    </div>
  );
};

export default Dashboard;
