import React, { useState } from "react";

function Question(props) {
  const questions = [
    {
      id: 1,
      q: "1. What was Meta Platforms Inc formerly known as?",
      a: [
        { option: "Alphabet", isCorrect: false },
        { option: "Oracle", isCorrect: false },
        { option: "Facebook", isCorrect: true },
        { option: "Yahoo", isCorrect: false },
      ],
    },
    {
      id: 2,
      q: "2. HeadQuaters of Apple located at?",
      a: [
        { option: "New York", isCorrect: false },
        { option: "Los Angles", isCorrect: false },
        { option: "California", isCorrect: true },
        { option: "Washington D.C.", isCorrect: false },
      ],
    },
    {
      id: 3,
      q: "3. Who is the CEO of Tesla ?",
      a: [
        { option: "Jeff Bezos", isCorrect: false },
        { option: "Bill Gates", isCorrect: false },
        { option: "Elon Musk", isCorrect: true },
        { option: "Tony Stark", isCorrect: false },
      ],
    },
    {
      id: 4,
      q: "4. Number of Harry Potter series available ?",
      a: [
        { option: "9", isCorrect: false },
        { option: "7", isCorrect: false },
        { option: "8", isCorrect: true },
        { option: "6", isCorrect: false },
      ],
    },
    {
      id: 5,
      q: "5. Among these which is the product of Korea ?",
      a: [
        { option: "Oppo", isCorrect: false },
        { option: "Micromax", isCorrect: false },
        { option: "Samsung", isCorrect: true },
        { option: "Hauwei", isCorrect: false },
      ],
    },
  ];

  const [currentQues, nextQues] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const next = currentQues + 1;

    if (next < questions.length) {
      nextQues(next);
    } else {
      setShowScore(true);
    }
  };

  const backHome = () => {
    props.history.replace("/");
  };

  return (
    <>
      <div className="flex h-screen flex-col justify-evenly items-center">
        {showScore ? (
          <>
            <div className="text-white text-xl font-bold shadow-2xl p-8 sm:text-2xl md:text-3xl lg:text-4xl w-[350px] md:w-[600px] lg:w-[900px]">
              Congratulations !!, You scored{" "}
              <strong className="text-indigo-900">{score}</strong> out of{" "}
              {questions.length}{" "}
            </div>
            <button
              onClick={backHome}
              className="rounded-md px-6 py-3 m-14 bg-white text-blue-600 transition ease-in-out ">
              HOME
            </button>
          </>
        ) : (
          <div className="shadow-2xl flex flex-col items-center p-2.5 h-auto w-[350px] md:w-[600px] lg:w-[900px]">
            {/* Rendering Questions */}

            <div className="ques font-semibold text-xl sm:text-2xl md:text-[28px] lg:text-3xl">
              {questions[currentQues].q}
            </div>

            {/* Rendering Answers */}

            <div className="p-2 mt-6 font-medium text-xl sm:text-2xl md:text-[28px] lg:text-3xl ">
              <div className=" flex flex-col p-2 ">
                {questions[currentQues].a.map((answer) => (
                  <button
                    onClick={() => handleClick(answer.isCorrect)}
                    className="w-40 sm:w-52 md:w-60 lg:w-64 p-1 sm:p-1.5 md:p-1.5 lg:p-1.5 border-2 border-blue-300 m-1.5 rounded-full text-center hover:bg-blue-400 hover:text-white hover:border-blue-400 transition ease-in-out hover:-translate-y-1 focus:border-green-500 focus:border-2 focus:bg-green-500">
                    {answer.option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Question;
