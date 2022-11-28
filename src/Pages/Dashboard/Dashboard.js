import Lottie from "lottie-react";
import React from "react";
import dashboard from "../../assets/animationFile/dashboard.json";

const Dashboard = () => {
  return (
    <div className="justify-center h-screen items-center flex">
      <Lottie animationData={dashboard} loop={true} />
    </div>
  );
};

export default Dashboard;
