import { useCallback, useEffect, useState } from "react";
import { Location } from "react-router-dom";

const useHeader = (location: Location) => {
  const [isMain, setIsMain] = useState(true);
  const [title, setTitle] = useState("전체차량");
  const { pathname } = location;

  const handleTitle = useCallback(() => {
    if (pathname === "/") {
      setTitle("전체차량");
      setIsMain(true);
    } else if (pathname === "/detail") {
      setTitle("차량상세");
      setIsMain(false);
    } else {
      setTitle("404");
      setIsMain(false);
    }
  }, [pathname]);

  useEffect(() => {
    handleTitle();
  }, [pathname]);

  return {
    isMain,
    title
  };
};

export default useHeader;
