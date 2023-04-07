import React, { useEffect, useState } from "react";

const UnMountTest = () => {
  useEffect(() => {
    console.log("Mount!");
    return () => {
      // Unmount 시점에 실행되게 됨
      console.log("Unmount!");
    };
  }, []);

  return <div>UnMount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnMountTest />}
    </div>
  );
};

export default Lifecycle;
