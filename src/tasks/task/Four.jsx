/* eslint-disable */ import { useCallback, useState } from "react";
import ActionBar from "./ActionBar";
import Messages from "./Messages.jsx";

const ChallengeThree = () => {
  const [state, setState] = useState(0);

  // YOU are not allowed to place this in the render function directly
  // as a jsx or change it's intial value
  const componentMap = {
    0: <Messages state={state} />,
    1: (
      <>
        <span>{state}</span>
        <Messages state={state} />
      </>
    ),
    2: (
      <>
        <span>{state}</span>
        <Messages state={state} />
      </>
    ),
    3: <Messages state={state} />,
  };

  //   const componentMap = {
  //     0: <Messages state={state} />,
  //     1: <Messages state={state} />,
  //     2: <Messages state={state} />,
  //     3: <Messages state={state} />,
  //   };

  const handleNextClick = useCallback(() => {
    if (state < 3) {
      setState(state + 1);
    }
  }, [state]);

  const handlePreviousClick = useCallback(() => {
    if (state > 0) {
      setState(state - 1);
    }
  }, [state]);

  return (
    <>
      <span> {componentMap[state]}</span>
      <ActionBar
        onNextClick={handleNextClick}
        onPreviousClick={handlePreviousClick}
      />
      <br />
    </>
  );
};

export default ChallengeThree;
