import React from "react";
import "./result.css";

function Result({ correctAnswers, totalQuestions, answers }) {
  return (
    <div className="result">
      <h1>Quiz Completed!</h1>
      <p>
        You answered {correctAnswers} out of {totalQuestions} correctly.
      </p>
      <table className="feedback-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Year</th>
            <th>Status</th>
            <th>View Image</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((answer, index) => (
            <tr
              key={index}
              className={answer.correct ? "correct" : "incorrect"}
            >
              <td>{answer.title}</td>
              <td>{answer.artist ? answer.artist : "-"}</td>
              <td>{answer.year}</td>
              <td>{answer.correct ? "correct" : "wrong"}</td>
              <td>
                <a href={answer.url} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Result;
