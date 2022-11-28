import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BallTriangle } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="">
      {loading ? (
        <>
          <span className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100  to-gray-100">
            <BallTriangle
              height={120}
              width={120}
              radius={5}
              color="#570df8"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
            />
          </span>
        </>
      ) : (
        <>
          <RouterProvider router={router} />
          <Toaster />
        </>
      )}
    </div>
  );
}

export default App;
