import { useAppSelector } from "../../app/hooks";
import styles from "./Quests.module.scss";

export default function Quests() {
  const { quests } = useAppSelector((state) => state.quests);

  return (
    <main className={styles.main}>
      <ul className={styles.list}>
        {/* Render list items based on tasks global state */}
        {quests.map((quest) => (
          <li key={quest.name}>
            <h2>{quest.name}</h2>
            <p>{quest.description}</p>
            <div>
              <button className={styles.button}>Complete Quest</button>
              <p className={"center font-small"}>abandon quest</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
