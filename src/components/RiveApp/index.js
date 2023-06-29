import React from "react";
import { useRive } from "@rive-app/react-canvas";
import RiveFile from "../../assets/track.riv";
import "../../index.css";

const RiveApp = () => {
  const { RiveComponent } = useRive({
    src: RiveFile,
    autoplay: true,
    stateMachines: "State Machine 1",
    artboard: "New Artboard",
    onStop: (e) => console.log(e),
    onStateChange: (e) => console.log("State Changed: ", e),
  });

  return <RiveComponent className="rivexample" />;
};

export default RiveApp;
