import { useEffect, useState } from "react";

const useAllUser = () => {
  const [isVerify, setIsverify] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setIsverify(data);
      });
  }, []);

  return isVerify;
};

export default useAllUser;
