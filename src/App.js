import "./App.css";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Services from "./components/services/Services";
import appImg from "./assets/images/app-screen-3.png";
function App() {
  return (
    <>
      <Header />
      <Landing />
      <Services />
      <div className="design">
        <div className="image">
          <img src={ appImg } alt="Mobile" />
        </div>
        <div className="text">
          <h2>Our Design Comes With...</h2>
          <ul>
            <li>Responsive Design</li>
            <li>Modern And Clean Design</li>
            <li>Clear Code</li>
            <li>Browser Frindly</li>
          </ul>
        </div>
      </div>
    </>

  );
}

export default App
