import "./App.css";
import Admin__loginForm from "./components/Admin__loginform";
import Admin__login from "./components/Admin__loginform";
import Email__verify from "./components/Email__verify";
import Otp__verify from "./components/Otp__verify";
import Password__form from "./components/Password__form";

function App() {
  return (
    <div className="App">
      {/* <Admin__loginForm /> */}
      {/* <Email__verify /> */}
      {/* <Otp__verify /> */}
      <Password__form />
    </div>
  );
}

export default App;
