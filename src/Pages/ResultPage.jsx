import { Link } from "react-router-dom";

const ResultPage = () => {
    const { userAnswers, questions } = location.state || {}; // Add defensive check
  
    // Check if userAnswers or questions are undefined before accessing them
    if (!userAnswers || !questions) {
      return <div className="pt-28">Error: User answers or questions data is not available.</div>;
    }
  
    // Calculate the score based on user answers
    const score = userAnswers.reduce((acc, userAnswer) => {
      const question = questions.find(question => question.id === userAnswer.questionId);
      if (question && userAnswer.selectedOptionId === question.correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);
  
    return (
      <div>
        <h1>Quiz Result</h1>
        <p>Your score: {score} / {questions.length}</p>
        <Link to="/">Try Again</Link>
      </div>
    );
  };
  
export default ResultPage;