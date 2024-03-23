import React from 'react';



function handleChange(){

}
function Questions({ question, options, selectedOption, handleChange },props) {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-6 mb-4">
      <h2 className="text-lg font-semibold mb-4">{question}</h2>
      <div className="grid gap-2">
        {Object.entries(options).map(([key, value]) => (
          <label key={key} className="flex items-center">
            <input
              type="radio"
              value={value}
              checked={selectedOption === value}
              onChange={handleChange}
              className="form-radio text-myFavorite border-gray-300 focus:border-myFavorite focus:ring-myFavorite"
/>
            <span className="ml-2">{value}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Questions;
