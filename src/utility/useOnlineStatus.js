import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      console.log("The network connection has been lost.");
      setStatus(false);
    });

    window.addEventListener("online", () => {
      console.log("The network connection has been lost.");
      setStatus(true);
    })

  }, []);

  return status;
};
