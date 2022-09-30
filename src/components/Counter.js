// import classes from "./Counter.module.css";
// import { useSelector, useDispatch } from "react-redux";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter);
//   const show = useSelector((state) => state.showCounter);

//   const incrementHandler = () => {
//     dispatch({ type: "increment" });
//   };
//   const decrementHandler = () => {
//     dispatch({ type: "decrement" });
//   };

//   const increaseHandler = () => {
//     dispatch({ type: "increase", amount: 5 });
//   };
//   const decreaseHandler = () => {
//     dispatch({ type: "decrease", amount: 5 });
//   };

//   const toggleCounterHandler = () => {
//     dispatch({ type: "toggle" });
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       {show && (
//         <div>
//           <button onClick={incrementHandler}>increment</button>
//           <button onClick={increaseHandler}>increase by 5</button>
//           <button onClick={decreaseHandler}>increase by 5</button>
//           <button onClick={decrementHandler}>decrement</button>
//         </div>
//       )}
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

//! using toolkit

import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      {show && (
        <div>
          <button onClick={incrementHandler}>increment</button>
          <button onClick={increaseHandler}>increase by 5</button>
          <button onClick={decreaseHandler}>increase by 5</button>
          <button onClick={decrementHandler}>decrement</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
