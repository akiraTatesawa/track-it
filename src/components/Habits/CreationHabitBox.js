import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { CancelButton, HabitCreationBox, SubmitButton } from "./HabitsStyle";
import WeekDay from "./WeekDay";

const CreationHabitBox = ({
  isOpen,
  setIsOpen,
  newHabit,
  setNewHabit,
  token,
  reload,
}) => {
  const standardWeekdays = [
    { day: "D", id: 0, isSelected: false },
    { day: "S", id: 1, isSelected: false },
    { day: "T", id: 2, isSelected: false },
    { day: "Q", id: 3, isSelected: false },
    { day: "Q", id: 4, isSelected: false },
    { day: "S", id: 5, isSelected: false },
    { day: "S", id: 6, isSelected: false },
  ];
  const [weekdaysArray, setWeekdaysArray] = useState(standardWeekdays);
  const [isLoading, setIsLoading] = useState(false);
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

  function registerHabitsName(e) {
    setNewHabit({ ...newHabit, name: e.target.value });
  }

  function registerNewHabit(e) {
    e.preventDefault();
    if (newHabit.days.length === 0) {
      alert("Selecione pelo menos um dia!");
    } else {
      setIsLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const promise = axios.post(URL, newHabit, config);
      promise
        .then(() => {
          setIsLoading(false);
          setIsOpen(false);
          setNewHabit({ ...newHabit, name: "", days: [] });
          setWeekdaysArray(standardWeekdays);
          reload();
        })
        .catch(() => {
          setIsLoading(false);
          alert("Falha ao criar hábito! Tente novamente");
          reload();
        });
    }
  }

  function mountWeekdays() {
    const weekdays = weekdaysArray.map(({ day, isSelected, id }, index) => (
      <WeekDay
        key={index}
        day={day}
        id={id}
        isSelected={isSelected}
        setNewHabit={setNewHabit}
        newHabit={newHabit}
        setWeekdaysArray={setWeekdaysArray}
        weekdaysArray={weekdaysArray}
        isLoading={isLoading}
      />
    ));
    return weekdays;
  }

  function changeSubmitButtonContent() {
    if (isLoading) {
      return (
        <div>
          <ThreeDots color="#ffffff" height={20} width={50} />
        </div>
      );
    } else {
      return "Salvar";
    }
  }

  const buttonContent = changeSubmitButtonContent();
  const weekdays = mountWeekdays();

  return (
    <HabitCreationBox isOpen={isOpen}>
      <form onSubmit={registerNewHabit}>
        <input
          type="text"
          placeholder="nome do hábito"
          maxLength={20}
          value={newHabit.name || ""}
          onChange={registerHabitsName}
          disabled={isLoading}
          required
        ></input>

        {weekdays}

        <CancelButton
          type="button"
          value="Cancelar"
          disabled={isLoading}
          onClick={() => setIsOpen(false)}
          title={"Cancelar"}
        ></CancelButton>

        <SubmitButton type="submit" isLoading={isLoading} disabled={isLoading || newHabit.days.length === 0} title={"Enviar"} >
          {buttonContent}
        </SubmitButton>
      </form>
    </HabitCreationBox>
  );
};

export default CreationHabitBox;
