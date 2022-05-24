// import { useContext } from "react";
// import UserContext from "../../contexts/UserContext";
import { Main, Section, HabitsProgression } from "./TodaysHabitsStyle";

const TodaysHabits = () => {
  // const { userData } = useContext(UserContext);
  
  return (
    <Main>
      <Section>
        <h2>Segunda, 17/05</h2>
        <HabitsProgression status={false}>Nenhum hábito concluído ainda</HabitsProgression>
      </Section>
    </Main>
  );
};

export default TodaysHabits;