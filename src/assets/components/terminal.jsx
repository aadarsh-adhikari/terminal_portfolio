import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Help from "./help";
import About from "./about";
import Gui from "./gui";
import SkillCard from "./skills";

function Terminal() {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");
  const [components, setComponents] = useState([]);
  

  const handleCommand = (command) => {
    switch (command.trim().toLowerCase()) {
      case "color":
        setComponents([...components, <Color key={components.length} />]);
        break;
      case "help":
        setComponents([...components, <Help key={components.length} />]);
        break;
      case "gui":
        setComponents([...components, <Gui key={components.length} />]);
        break;
      case "about":
        setComponents([...components, <About key={components.length} />]);
        break;
        case "skillcard":
            setComponents([...components, <SkillCard key={components.length} />]);
            break;
        case "clear":
            setComponents([]);
        break;

      default:
        setOutput("Wrong command. Type 'help' for available commands.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputValue);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="inline-block w-full ">
        <p>aadarsh/portfiloi/~</p>
        <form onSubmit={handleSubmit}>
          <div className="text-2xl font-extrabold">
            <FontAwesomeIcon icon={faArrowRight} className="text-black" />
            <input
              className="outline-none bg-transparent w-11/12"
              type="text"
              name="cmd"
              id="cmd"
              autoComplete="off"
              spellCheck="false"
              autoFocus
              value={inputValue}
              onChange={handleChange}
            />
          </div>
        </form>
        {output && <div>{output}</div>}
        {components.map((component, index) => (
          <div key={index}>{component}</div>
        ))}
      </div>
    </div>
  );
}

export default Terminal;
