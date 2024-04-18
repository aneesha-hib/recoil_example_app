import { useRecoilState, useRecoilValue } from "recoil";
import { textState } from "../atom";
import { charCountState } from "../selector";
import "./characterCount.css";

function CharacterCounter() {
  return (
    <div className="characterCounterContainer">
      <label>Example 1 : Character Count</label>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="inputContainer">
      <input type="text" value={text} onChange={onChange} placeholder="Type here" />
      <br />
      <br />
      Echo: {text}
    </div>
  );
}
function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export default CharacterCounter;
