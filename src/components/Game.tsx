import { Fit, Layout, useRive } from "@rive-app/react-canvas";
import "./../css/game.css";

const Game = () => {
  const { RiveComponent } = useRive({
    src: "src/assets/rive/game.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
    }),
  });

  return (
    <main>
      <div className="dynamicTextContainer">
        <h2 className="dynamicText">این وبسایت در حال توسعه است.</h2>
        <h2 className="dynamicText">حالا فعلا یکمی بازی کن!!!</h2>
      </div>
      <div id="gameContainer">
        <RiveComponent id="game" />
      </div>
    </main>
  );
};

export default Game;
