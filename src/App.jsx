import { useState } from "react";

import "./App.css";
import PlayGround from "./components/PlayGround";
import Sidemenu from "./components/Sidemenu";
import { Button, Card, ParellaxScroll } from "./components/ui";

function App() {
  const [seletedComponent, setSeletedComponent] = useState("ParallaxScroll");

  const components = {
    Button: <Button />,
    Card: <Card />,
    ParallaxScroll: <ParellaxScroll />,
  };

  return (
    <div className="bg-neutral-800 h-screen p-2 flex flex-col-reverse md:flex-row items-stretch justify-start gap-2 ">
      <Sidemenu
        topics={Object.keys(components)}
        onSelect={(topic) => setSeletedComponent(topic)}
      />
      <PlayGround>{components[seletedComponent]}</PlayGround>
    </div>
  );
}

export default App;
