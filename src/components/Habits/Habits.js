import { Main, Section, TitleHabits, HabitsList } from "./HabitsStyle";
import { useState, useEffect, useContext } from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import CreationHabitBox from "./CreationHabitBox";
import HabitBox from "./HabitBox";

const Habits = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newHabit, setNewHabit] = useState({ name: "", days: [] });
  const [userHabits, setUserHabits] = useState([]);
  const { userData } = useContext(UserContext);

  const URL_LISTAR =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

  useEffect(() => {
    reloadUserHabits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function reloadUserHabits() {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const promise = axios.get(URL_LISTAR, config);
    promise
      .then((res) => setUserHabits([...res.data]))
      .catch((err) => console.log(err));
  }

  const habitCreationBox = (
    <CreationHabitBox
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      newHabit={newHabit}
      setNewHabit={setNewHabit}
      token={userData.token}
      reload={reloadUserHabits}
    />
  );

  function renderUserHabitsList() {
    if (userHabits.length === 0) {
      return undefined;
    } else {
      return userHabits.map(({ id, name, days }, index) => (
        <HabitBox
          key={index}
          habitName={name}
          habitDays={days}
          habitId={id}
          reload={reloadUserHabits}
        />
      ));
    }
  }

  const userHabitsList = renderUserHabitsList();
  
  return (
    <Main>
      <Section>
        <TitleHabits>
          <h2>Meus hábitos</h2>
          <button type="button" onClick={() => setIsOpen(true)}>
            <IconContext.Provider value={{size: "30", color: "#52b6ff"}}>
              <BsPlusSquareFill title={"Adicionar hábito"} />
            </IconContext.Provider>
          </button>
        </TitleHabits>
        <HabitsList>
          {habitCreationBox}
          {userHabits.length === 0 ? (
            <p>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </p>
          ) : undefined}
          {userHabitsList}
        </HabitsList>
      </Section>
    </Main>
  );
};

export default Habits;
