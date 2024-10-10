import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newInputValue) {
    setUserInput((prevInput) => {
      return { ...prevInput, [inputIdentifier]: +newInputValue };
    });
  }
  return (
    <main>
      <Header />;
      <UserInput handleChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center"> Please input a duration greater tha zero</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </main>
  );
}

export default App;
