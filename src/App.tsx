import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import SideBar from "./components/SideBar/SideBar";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.shell} id="top">
      <Nav />
      <SideBar />
      <main className={styles.main}>
        <Header />
        <Body />
      </main>
    </div>
  );
}

export default App;
