import "./App.css";

// Components
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Body />
      <SideBar />
    </div>
  );
}

export default App;
