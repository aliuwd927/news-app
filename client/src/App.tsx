import "./App.css";
import NewsHeader from "./header/NewsHeader";
import NewsBody from "./body/NewsBody";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  // console.log(store);

  return (
    <Provider store={store}>
      <div className="App">
        <NewsHeader />
        <NewsBody />
      </div>
    </Provider>
  );
}

export default App;

// function lowerCase(){}

// function UpperCase(){} ===> Object
// UpperCase ===> this keyword
