
const Card = ({ title, description, imageUrl }) => {
  return (
    <div
      className="
        bg-white rounded-lg shadow-md overflow-hidden
        transition-all duration-300 ease-in-out
        transform hover:scale-105 hover:shadow-lg
        focus-within:ring-4 focus-within:ring-blue-300
        outline-none
        flex flex-col
      "
      tabIndex="0" // Make the div focusable
      aria-labelledby="card-title"
      aria-describedby="card-description"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-grow flex flex-col">
        <h3 id="card-title" className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p id="card-description" className="text-gray-600 flex-grow">
          {description}
        </p>
        <button
          className="
            mt-4 self-start px-4 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
            focus:ring-opacity-75 transition duration-200
          "
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;