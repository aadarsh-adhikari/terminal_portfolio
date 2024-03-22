import { useEffect } from "react";

function RedirectComponent() {
  useEffect(() => {
   window.open("https://www.aadarshadhikari.com.np", "_blank");
  }, []);
  return null ;
}

export default RedirectComponent;
