import {
  changeZoom,
  clear,
  randomize,
  toDefaults,
  toggleLoop,
} from "../utils/sketch";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";

interface SketchControlsProps {}

const SketchControls: React.FC<SketchControlsProps> = () => {
  return (
    <div className="m-4 flex flex-col w-full">
      <h1 className="text-3xl">{"Conway's Game of Life"}</h1>
      <div className="my-5 flex-grow">
        <div className="flex gap-x-5">
          <button
            className="bg-stone-800 btn py-1 px-3 rounded"
            onClick={() => clear()}
          >
            Clear
          </button>
          <button
            className="bg-stone-800 btn py-1 px-3 rounded"
            onClick={() => toDefaults()}
          >
            Reset Position
          </button>
          <button
            className="bg-stone-800 btn py-1 px-3 rounded"
            onClick={() => randomize()}
          >
            Randomize
          </button>
          <button
            className="bg-stone-800 btn py-1 px-3 rounded"
            onClick={() => toggleLoop()}
          >
            Toggle Loop
          </button>
        </div>
      </div>

      <div className="flex-shrink flex gap-x-3 flex-row-reverse">
        <button
          className="bg-stone-800 btn py-1 px-3 rounded"
          onClick={() => changeZoom(1, 0.5, 0.5)}
        >
          <BsZoomOut />
        </button>
        <button
          className="bg-stone-800 btn py-1 px-3 rounded"
          onClick={() => changeZoom(-1, 0.5, 0.5)}
        >
          <BsZoomIn />
        </button>
      </div>
    </div>
  );
};

export default SketchControls;
