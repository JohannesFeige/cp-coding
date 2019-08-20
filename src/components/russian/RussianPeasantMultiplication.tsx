import React, { useCallback, useState } from 'react';
import { mul } from '../shared/calculation.service';

interface State {
  x: number;
  y: number;
  result: number;
}

const RussianPeasantMultiplication: React.FC = () => {
  const [state, setState] = useState<State>({ x: 0, y: 0, result: 0 });
  const submitFormHandler = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  const xChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newX = +event.target.value;
      setState({ ...state, x: newX, result: mul(newX, state.y) });
    },
    [state]
  );

  const yChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newY = +event.target.value;
      setState({ ...state, y: newY, result: mul(state.x, newY) });
    },
    [state]
  );

  return (
    <React.Fragment>
      <form onSubmit={submitFormHandler}>
        <div className="form-row">
          <div className="form-group col-md-2">
            <input type="number" className="form-control" placeholder="X" value={state.x} onChange={xChangeHandler} />
          </div>
          *
          <div className="form-group col-md-2">
            <input type="number" className="form-control" placeholder="Y" value={state.y} onChange={yChangeHandler} />
          </div>
          =
          <div className="form-group col-md-2">
            <span className="form-control" id="result">
              {state.result}
            </span>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default RussianPeasantMultiplication;
