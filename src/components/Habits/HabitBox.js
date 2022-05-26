import { HabitContainer, WeekdayListItem } from "./HabitsStyle";
import { BsTrash } from "react-icons/bs";
import { IconContext } from "react-icons";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const Weekday = ({ id, habitDays }) => {
  let weekdayChar = "";
  let isSelected = false;

  if (habitDays.some((day) => day === id)) {
    isSelected = true;
  }

  switch (id) {
    case 0:
      weekdayChar = "D";
      break;
    case 1:
      weekdayChar = "S";
      break;
    case 2:
      weekdayChar = "T";
      break;
    case 3:
      weekdayChar = "Q";
      break;
    case 4:
      weekdayChar = "Q";
      break;
    case 5:
      weekdayChar = "S";
      break;
    case 6:
      weekdayChar = "S";
      break;
    default:
      weekdayChar = "deu ruim";
  }
  return (
    <WeekdayListItem isSelected={isSelected}>{weekdayChar}</WeekdayListItem>
  );
};

const HabitBox = ({ habitId, habitName, habitDays, reload }) => {
  const weekdaysIds = [0, 1, 2, 3, 4, 5, 6];
  const URL_DELETE = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`;
  const { userData } = useContext(UserContext);

  function renderWeekdays() {
    return weekdaysIds.map((id) => (
      <Weekday id={id} key={id} habitDays={habitDays} />
    ));
  }

  function deleteHabit() {
    if (window.confirm("Deseja mesmo excluir esse hábito?")) {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const promise = axios.delete(URL_DELETE, config);
      promise
        .then(() => reload())
        .catch(() => {
          alert("Erro ao deletar o hábito tente novamente!");
          reload();
        });
    }
  }

  const weekdays = renderWeekdays();

  return (
    <HabitContainer>
      <div>
        <h3>{habitName}</h3>
        <IconContext.Provider value={{ className: "trash-icon" }}>
          <BsTrash onClick={deleteHabit} />
        </IconContext.Provider>
        <ul>{weekdays}</ul>
      </div>
    </HabitContainer>
  );
};

export default HabitBox;
