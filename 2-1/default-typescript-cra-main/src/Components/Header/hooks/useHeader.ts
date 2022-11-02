import { useEffect, useState } from "react";
import { Location } from "react-router-dom";

const useHeader = (location: Location) => {
  const [isMain, setIsMain] = useState(true);
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/") {
      setIsMain(true);
    } else {
      setIsMain(false);
    }
  }, [pathname]);

  return {
    isMain
  };
};

export default useHeader;
