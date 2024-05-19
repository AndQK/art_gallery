import "./options.css";
import CustomBtn from "../custombtn";
function Options({ handleAnswer }) {
  return (
    <div className="options">
      <CustomBtn onClick={() => handleAnswer("left")} text="Left" />
      <CustomBtn onClick={() => handleAnswer("right")} text="Right" />
      <CustomBtn onClick={() => handleAnswer("both")} text="Both" />
    </div>
  );
}
export default Options;
