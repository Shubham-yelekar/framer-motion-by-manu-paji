import { useState } from "react";

import "./App.css";
import PlayGround from "./components/PlayGround";
import Sidemenu from "./components/Sidemenu";
import { Button, Card, Gallery } from "./components/ui";

function App() {
  const [seletedComponent, setSeletedComponent] = useState("Gallery");

  const components = {
    Button: <Button />,
    Card: <Card />,
    Gallery: <Gallery/>
  };

  return (
    <div className="flex h-screen flex-col-reverse items-stretch justify-start gap-2 bg-neutral-800 p-2 md:flex-row">
      <Sidemenu
        topics={Object.keys(components)}
        onSelect={(topic) => setSeletedComponent(topic)}
      />
      <PlayGround>{components[seletedComponent]}</PlayGround>
    </div>
  );
}

export default App;
