import styles from "./page.module.css";
import { HomeView } from "@/components/Home/Home";
import { SecondScreen } from "@/components/secondScreen/SecondScreen";
import { ThirdScreen } from "@/components/thirdScreen/ThirdScreen";


export default function Home() {
  return (
    <main className={styles}>
     <HomeView/>
     <SecondScreen/>
     <ThirdScreen/>
    </main>
  );
}
