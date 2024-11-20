import Navbar from "@/components/Navbar";
import style from "@/styles/page.module.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Home</h1>
      <div className={style["about"]}>
        <p>Hi! My name is James and I&apos;m currently a 3rd year Computer Engineer.</p>
        <p>Please make a merge conflict for me!</p>
        <p>Gotchu James!</p>
        <p>Hi! My name is Belal and I&apos;m currently a 3rd year Computer Science Student.</p>
      </div>
    </main>
  );
}
