import React, { useState } from 'react';
import NameEntryPage from './name'
import './quiz.css'
const QuizForm = () => {
    const [questions, setQuestions] = useState([
        {
          id: 1,
          question: 'What is the capital of France?',
          options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
          correctAnswer: 'Paris',
          selectedAnswer: null,
        },
        {
            id: 2,
            question: 'How many planets are in the solar system?',
            options: ['5', '15', '8', '9'],
            correctAnswer: '9',
            selectedAnswer: null,
          },
          {
            id: 3,
            question: 'Which food has the highest number of calories?',
            options: ['French fries', 'Peanuts', 'Eggs', 'Bananas'],
            correctAnswer: 'Peanuts',
            selectedAnswer: null,
          },   {
            id: 4,
            question: 'Who is the author of Things Fall Apart, a novl based from west Africa?',
            options: ['Chinua Achebe', 'Shakespear', 'Ben Carson', 'Nana of Tsekiri'],
            correctAnswer: 'Chinua Achebe',
            selectedAnswer: null,
          },   {
            id: 5,
            question: 'How many countries are in Africa?',
            options: ['40', '80', '60', '54'],
            correctAnswer: '54',
            selectedAnswer: null,
          },   {
            id: 6,
            question: "The teacher gave out an assignment on Monday. Students were supposed to hand i on the day after tomorrow's yesterday. On which day did they hand in?",
            options: ['Friday', 'Monday', 'Tuesday', 'Wednesday'],
            correctAnswer: 'Tuesday',
            selectedAnswer: null,
          },   {
            id: 7,
            question: "Who is the Uganda's gold medalist 2023?",
            options: ['Joshua Cheptegei','Ferdinard Omanyala', 'Felix Chemongesi', 'Stephen Kiprotich'],
            correctAnswer: 'Joshua Cheptegei',
            selectedAnswer: null,
          },   {
            id: 8,
            question: 'What is the most spoken language in the world?',
            options: ['German', 'Arabic', 'Chinese', 'French'],
            correctAnswer: 'Chinese',
            selectedAnswer: null,
          },   {
            id: 9,
            question: 'Who co-founded Apple with Steve Jobs?',
            options: ['Tim Cook', 'Michelengelo', 'Larry Page', 'Steve Wozniak'],
            correctAnswer: 'Steve Wozniak',
            selectedAnswer: null,
          },   {
            id: 10,
            question: 'What is the most abundant mineral on earth?',
            options: ['Sulphur', 'Aluminium', 'Iron', 'Magnesium'],
            correctAnswer: 'Iron',
            selectedAnswer: null,
          },   {
            id: 11,
            question: 'Which is the most common name for boys?',
            options: ['Mohammed', 'James', 'Noah', 'Jack'],
            correctAnswer: 'Mohammed',
            selectedAnswer: null,
          },   {
            id: 12,
            question: 'Which is the most common name for girls?',
            options: ['Jane', 'Sophia', 'Olivia', 'Amelia'],
            correctAnswer: 'Sophia',
            selectedAnswer: null,
          },   {
            id: 13,
            question: "What is Earth's current population in billions?",
            options: ['8', '6.5', '10', '7.2'],
            correctAnswer: '8',
            selectedAnswer: null,
            
          },   {
            id: 14,
            question: 'What is the largest organ in the human body?',
            options: ['Stomach', 'Tongue', 'Liver', 'Heart'],
            correctAnswer: 'Liver',
            selectedAnswer: null,
          },   {
            id: 15,
            question: 'What is the capital city of Zimbabwe?',
            options: ['Lilongwe', 'Pretoria', 'Lusaka', 'Harare'],
            correctAnswer: 'Harare',
            selectedAnswer: null,
          },   {
            id: 16,
            question: 'Which country has the biggest train station?',
            options: ['Germany', 'Dubai', 'America', 'Kampala'],
            correctAnswer: 'America',
            selectedAnswer: null,
          },   {
            id: 17,
            question: 'Which King disobeyed God and as one of his punishments he was made to eat grass?',
            options: ['Aaron', 'Joseph', 'Nebuchadnezzar', 'David'],
            correctAnswer: 'Nebuchadnezzar',
            selectedAnswer: null,
          },   {
            id: 18,
            question: 'Which vitamin in the body gives us strong bones?',
            options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
            correctAnswer: 'Vitamin D',
            selectedAnswer: null,
          },   {
            id: 19,
            question: 'Who is the richest man in the world now?',
            options: ['Larry Page', 'Elon Musk', 'Jeff Bezos', 'Bill Gates'],
            correctAnswer: 'Elon Musk',
            selectedAnswer: null,
          },   {
            id: 20,
            question: 'Which of these is the smallest country?',
            options: ['Seychelles ', 'Ghana', 'Rwanda', 'Ethiopia'],
            correctAnswer: 'Seychelles',
            selectedAnswer: null,
          },
      ]);
  
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userResponses, setUserResponses] = useState({});
    const [userName, setUserName] = useState('');
    const [userScores, setUserScores] = useState([]);
    const [leaderboard, setLeaderboard] = useState([]);
    const [showLeaderboard, setShowLeaderboard] = useState(false);
  
    const handleNameEntered = (name) => {
      setUserName(name);
      setCurrentQuestionIndex(0);
      setShowLeaderboard(false);
      alert(`${name}, you are welcome to this quiz, you may now continue!`)
    };
  
    const handleAnswerSelect = (selectedAnswer) => {
      setUserResponses({
        ...userResponses,
        [currentQuestionIndex]: selectedAnswer,
      });
  
      // Move to the next question or show the leaderboard
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        calculateScore();
        setShowLeaderboard(true);
      }
    };
  
    const calculateScore = () => {
      const score = questions.reduce((totalScore, question, index) => {
        const userAnswer = userResponses[index];
        const isCorrect = userAnswer === question.correctAnswer;
        return isCorrect ? totalScore + 1 : totalScore;
      }, 1);
    
      // Update user scores
      setUserScores((prevUserScores) => [...prevUserScores, { name: userName, score }]);
    
      // Sort user scores by score in descending order
      setUserScores((prevUserScores) =>
        prevUserScores.slice().sort((a, b) => b.score - a.score)
      );
    
      // Update leaderboard with user name and score
      setLeaderboard((prevLeaderboard) => [...prevLeaderboard, { name: userName, score }]);
    
      // Sort leaderboard by score in descending order
      setLeaderboard((prevLeaderboard) =>
        prevLeaderboard.slice().sort((a, b) => b.score - a.score)
      );
    
      // Move to the leaderboard display
      setShowLeaderboard(true);
    };

    const handleNextPerson = () => {
      setUserName('');
      setUserResponses({});
      setCurrentQuestionIndex(0);
      setShowLeaderboard(false);
    };
  
    return (
      <div className = 'body' >
        <div className='questionsflex'>
        {currentQuestionIndex === 0 && !showLeaderboard && (
          <NameEntryPage onNameEntered={handleNameEntered} />
        )}
  
        {currentQuestionIndex < questions.length && !showLeaderboard && (
          <div className="questions">
            <p>{questions[currentQuestionIndex].question}</p>
            {questions[currentQuestionIndex].options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name={`question-${questions[currentQuestionIndex].id}`}
                  value={option}
                  checked={userResponses[currentQuestionIndex] === option}
                  onChange={() => handleAnswerSelect(option)}
                />
                {option}
              </label>
            ))}
          </div>
        )}
  </div>
  <div className='leaderboardflex'>
        {showLeaderboard && (
          <div className="leaderboard">
            <h2>Leaderboard</h2>
            <ul>
              {leaderboard.map((entry, index) => (
                <li className='lists' key={index}>{`${entry.name}: ${entry.score} / ${questions.length}`}</li>
              ))}
            </ul>
            <button className='nextPerson' onClick={handleNextPerson}>Next Person</button>
          </div>
        )}
      </div>
      </div>
    );
  };
  
  export default QuizForm;
  