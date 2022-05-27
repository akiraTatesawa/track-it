import { useState, useContext } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { IconContext } from "react-icons";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import {
  CurrentSequence,
  HighestSequence,
  TodaysHabitBox,
} from "./TodaysHabitsStyle";

const TodayHabitBox = ({
  id,
  title,
  done,
  currentSequence,
  highestSequence,
  setCompletedHabits,
  completedHabits,
  reload,
}) => {
  const [habitData, setHabitData] = useState({
    done: done,
    currentSequence: currentSequence,
    highestSequence: highestSequence,
  });
  const { userData } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };

  function changeColor() {
    if (habitData.done) {
      return "#8FC549";
    } else {
      return "#EBEBEB";
    }
  }

  function checkHabit() {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const promise = axios.post(URL, {}, config);
    promise.then(() => reload()).catch((err) => console.log(err.response));
    setCompletedHabits(completedHabits + 1);
    setHabitData({
      ...habitData,
      done: true,
      currentSequence: habitData.currentSequence + 1,
    });
  }

  function uncheckHabit() {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
    const promise = axios.post(URL, {}, config);
    promise.then(() => reload()).catch((err) => console.log(err.response));
    setCompletedHabits(completedHabits - 1);
    setHabitData({
      ...habitData,
      done: false,
      currentSequence: habitData.currentSequence - 1,
    });
  }

  function handleClick() {
    if (habitData.done) {
      uncheckHabit();
    } else {
      checkHabit();
    }
  }

  function renderHabitSequences() {
    let highestSeqText, currentSeqText;

    if (habitData.currentSequence <= 1) {
      currentSeqText = ` ${habitData.currentSequence} dia`;
    } else {
      currentSeqText = ` ${habitData.currentSequence} dias`;
    }

    if (highestSequence <= 1) {
      highestSeqText = ` ${highestSequence} dia`;
    } else {
      highestSeqText = ` ${highestSequence} dias`;
    }

    return (
      <>
        <p>
          Sequência atual:
          <CurrentSequence done={habitData.done}>
            {currentSeqText}
          </CurrentSequence>
        </p>
        <p>
          Seu recorde:
          <HighestSequence
            isEqual={
              habitData.currentSequence === highestSequence &&
              highestSequence !== 0
            }
          >
            {highestSeqText}
          </HighestSequence>
        </p>
      </>
    );
  }

  return (
    <TodaysHabitBox>
      <div>
        <h3>{title}</h3>
        {renderHabitSequences()}
      </div>
      <IconContext.Provider value={{ color: changeColor(), size: "69" }}>
        <ImCheckboxChecked onClick={handleClick} />
      </IconContext.Provider>
    </TodaysHabitBox>
  );
};

export default TodayHabitBox;
