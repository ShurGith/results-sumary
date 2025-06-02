import React, { useState, useEffect } from 'react';
import summaryData from './components/data'; // Import your local JSON data

function App() {
  const [summaryItems, setSummaryItems] = useState([]);
  const overallScore = 76; // Example overall score

  useEffect(() => {
    // In a real application, this data might come from an API.
    setSummaryItems(summaryData);
  }, []);

  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-azul font-poppins
      "
    >
      <div
        className="
          flex flex-col md:flex-row
          bg-white shadow-lg rounded-3xl
          overflow-hidden
          w-full max-w-md md:max-w-3xl
          m-4 md:m-0
        "
      >
  
        <div
          className="
          bg-linear-to-b from-linearUno to-linearDos
            flex flex-col items-center justify-center
            text-center
            bg-gradient-section
            p-8 md:p-14
            rounded-b-3xl md:rounded-3xl md:rounded-l-3xl md:rounded-br-none
            text-white
            flex-1
          "
        >
          <h2 className="text-xl font-medium text-white/50 mb-6">
            Your Result
          </h2>
          <div
            className="
              w-36 h-36 md:w-48 md:h-48
              rounded-full
              bg-linear-to-b from-circleUno to-circleDos
              flex flex-col items-center justify-center
              mb-6
              shadow-lg
            "
          >
            <span className="text-6xl md:text-7xl text-white font-extrabold">
              {overallScore}
            </span>
            <span className="text-lavander opacity-60">of 100</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Great
          </h3>
          <p className="text-lavander text-opacity-80 px-4 md:px-8">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="flex-1 p-8 md:p-10">
          <h2 className="text-xl font-bold text-azulOscuro mb-6">
            Summary
          </h2>
          <div className="space-y-4 mb-6">
            {summaryItems.map((item, index) => (
              <div
                key={index}
                className={`
                  flex items-center justify-between
                  p-4 rounded-lg
                 ${item.bgColor}
                  font-medium
                  hover:scale-[1.01] transition-transform duration-200
                  focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-opacity-75 focus-within:ring-cobalt-blue
                `}
                tabIndex={index} 
              >
                <div className="flex items-center">
                  <img src={item.icon} alt={item.category} className="mr-3" />
                  <span className={`${item.color}`}>
                    {item.category}
                  </span>
                </div>
                <div className="text-azulOscuro">
                  <span className="font-bold mr-1">{item.score}</span>
                  <span className="opacity-50">/ 100</span>
                </div>
              </div>
            ))}
          </div>
          <button
            className="
              w-full py-4 rounded-full
              bg-cobalto text-white text-lg font-medium
              hover:bg-cobalto focus:bg-cobalto
              focus:outline-none focus:ring-2 focus:ring-cobalto focus:ring-offset-2
              transition duration-200 cursor-pointer
            "
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;