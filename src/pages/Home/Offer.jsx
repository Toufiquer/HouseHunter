import React from "react";
import Divider from "../../components/Divider/Divider";

const Offer = () => {
  const [counter, setCounter] = React.useState(60);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        clearInterval(interval);
        setCounter(60);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <div>
      <Divider />
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="text center text-6xl font-thin block mb-2 uppercase">
          Offer will start soon
        </div>
        <div className="flex gap-5">
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            days
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div>
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": counter }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
