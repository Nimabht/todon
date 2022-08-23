import "./App.css";
import NavBar from "./component/navBar";
import LoginForm from "./loginForm";
function App() {
  return (
    <div className="flex relative svg-background">
      <NavBar />
      <div className="container w-11/12 h-screen">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
