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
        <li>You have 30 seconds to answer each question.</li>
        <li>
          Choose whether the artwork is made by AI, a human, or both are made by
          AI.
        </li>
        <li>There are a total of {totalQuestions} questions.</li>
      </ul>
      <CustomBtn onClick={startQuiz} text="Start Quiz" />
    </div>
  );
}
export default Intro;
