import "./Body.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect } from "react";
import { Button, Alert } from "react-bootstrap";
import CalculaterContext from "../context/Body";

const Body = () => {
  const {
    result,
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    add,
    subtract,
    multiply,
    divide,
    clear,
    equal,
    mod,
    point,
    keyDown,
  } = useContext(CalculaterContext);

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    return () => window.removeEventListener("keydown", keyDown);
  }, [keyDown]);


  return (
    <div id="container" className="col-3 m-auto">
      <Alert id="display" className="row mb-4" variant="secondary">
        {" "}
        {result}{" "}
      </Alert>
      <div className="row numbers">
        <div className="num-1 row mb-2">
          {" "}
          <Button className="col me-2" variant="secondary" onClick={clear}>
            C
          </Button>
          <Button className="col me-2" variant="secondary" onClick={mod}>
            %
          </Button>
          <Button className="col me-2" variant="secondary" onClick={divide}>
            /
          </Button>
        </div>
        <div className="num-2 row mb-2">
          {" "}
          <Button className="col me-2" variant="secondary" onClick={seven}>
            7
          </Button>
          <Button className="col me-2" variant="secondary" onClick={eight}>
            8
          </Button>
          <Button className="col me-2" variant="secondary" onClick={nine}>
            9
          </Button>
          <Button className="col me-2" variant="secondary" onClick={multiply}>
            X
          </Button>
        </div>
        <div className="num-3 row mb-2">
          {" "}
          <Button className="col me-2" variant="secondary" onClick={four}>
            4
          </Button>
          <Button className="col me-2" variant="secondary" onClick={five}>
            5
          </Button>
          <Button className="col me-2" variant="secondary" onClick={six}>
            6
          </Button>
          <Button className="col me-2" variant="secondary" onClick={subtract}>
            -
          </Button>
        </div>
        <div className="num-4 row mb-2">
          {" "}
          <Button className="col me-2" variant="secondary" onClick={one}>
            1
          </Button>
          <Button className="col me-2" variant="secondary" onClick={two}>
            2
          </Button>
          <Button className="col me-2" variant="secondary" onClick={three}>
            3
          </Button>
          <Button className="col me-2" variant="secondary" onClick={add}>
            +
          </Button>
        </div>
        <div className="num-5 row mb-2">
          <Button className="col me-2" variant="secondary" onClick={zero}>
            0
          </Button>
          <Button className="col me-2" variant="secondary" onClick={point}>
            .
          </Button>
          <Button className="col me-2" variant="secondary" onClick={equal}>
            =
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Body;
