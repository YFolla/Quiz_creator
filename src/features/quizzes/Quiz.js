import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
// import quiz selector
import { selectQuizzes } from "./quizzesSlices";

// Shuffle function
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Quiz() {
  const quizzes = useSelector(selectQuizzes);
  const { quizId } = useParams();
  const quiz = quizzes[quizId];

  // Shuffle cards only when quiz changes or page refreshes
  const shuffledCardIds = useMemo(() => 
    quiz ? shuffleArray(quiz.cardIds) : [],
    [quiz, quizId] // Re-shuffle when quiz or quizId changes
  );

  if(!quiz) {
    return <Navigate to={ROUTES.quizzesRoute()} replace/>
  }

  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {shuffledCardIds.map((cardId) => (
          <Card key={cardId} id={cardId} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
