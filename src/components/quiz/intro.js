import "./intro.css";
import CustomBtn from "../custombtn";
function Intro({ totalQuestions, startQuiz }) {
  return (
    <div className="intro">
      <h1>Ready to take the AI Art Quiz?</h1>
      <p>
        Test your ability to distinguish between AI-generated and human-created
        artwork.
      </p>
      <ul>
        <li>
          Choose which artwork is made by a human.
        </li>
        <li>There are a total of {totalQuestions} questions.</li>
      </ul>
      <CustomBtn onClick={startQuiz} text="Start Quiz" />
    </div>
  );
}
export default Intro;
