import {useOnDraw} from './Hooks';

const Canvas = ({
  width,
  height
}) => {

    const setCanvasRef = useOnDraw();

    return (
      <canvas
          width={width}
          height={height}
          style={canvasStyle}
          ref={setCanvasRef}
      />
    );
}

export default Canvas;

const canvasStyle = {
  border: "1px solid black"
}