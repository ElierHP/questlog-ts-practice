import Quests from "../components/quests/Quests";
import { useAppSelector } from "../app/hooks";

export default function Completed() {
  // Get quests from global store with completed: true
  const quests = useAppSelector((state) =>
    state.quests.filter((quest) => quest.completed)
  );

  return (
    <div>
      <h2 className="center mt-1">Completed Quests</h2>
      <Quests quests={quests} />
    </div>
  );
}