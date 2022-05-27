import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import {
  Main,
  Title,
  HabitsProgression,
  TodaysHabitsSection,
} from "./TodaysHabitsStyle";

import TodayHabitBox from "./TodayHabitBox";

const TodaysHabits = () => {
  const { userData, habits, setHabits } = useContext(UserContext);
  const [completedHabits, setCompletedHabits] = useState(0);
  const [todaysHabits, setTodaysHabits] = useState([]);
  const URL_TODAY =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

  function renderHabitsProgression() {
    const habitsRatio = Math.round(
      (completedHabits / todaysHabits.length) * 100
    );
    if (completedHabits === 0) {
      return (
        <HabitsProgression status={false}>
          Nenhum hábito concluído ainda
        </HabitsProgression>
      );
    } else {
      return (
        <HabitsProgression status={true}>
          {habitsRatio}% dos hábitos concluídos
        </HabitsProgression>
      );
    }
  }

  function reloadTodaysHabits() {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const promise = axios.get(URL_TODAY, config);
    promise
      .then((res) => {
        setTodaysHabits(res.data);
        let doneCont = 0;
        setCompletedHabits(() => {
          res.data.map((item) => (item.done ? doneCont++ : doneCont));
          return doneCont;
        });
        setHabits({...habits, completed: doneCont, total: res.data.length, ratio: doneCont/res.data.length});
      })
      .catch((err) => console.log(err));
  }

  function mountTodaysHabits() {
    if (todaysHabits.length !== 0) {
      return todaysHabits.map(
        ({ name, id, done, currentSequence, highestSequence }) => (
          <TodayHabitBox
            key={id}
            id={id}
            title={name}
            completedHabits={completedHabits}
            setCompletedHabits={setCompletedHabits}
            done={done}
            currentSequence={currentSequence}
            highestSequence={highestSequence}
            reload={reloadTodaysHabits}
          />
        )
      );
    }
  }

  function setTodaysDate() {
    const todaysDate = `${dayjs()
      .locale("pt-br")
      .format("dddd")}, ${dayjs().format("DD/MM")}`;
    return todaysDate.charAt(0).toUpperCase() + todaysDate.slice(1);
  }

  useEffect(() => {
    reloadTodaysHabits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(habits)

  return (
    <Main>
      <Title>
        <h2>{setTodaysDate()}</h2>
        {renderHabitsProgression()}
      </Title>
      <TodaysHabitsSection>{mountTodaysHabits()}</TodaysHabitsSection>
    </Main>
  );
};

export default TodaysHabits;
