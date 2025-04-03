const Card = ({ title, value, percentage, children }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-md w-full">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
        {percentage && (
          <span className="text-green-400 text-sm">{`+${percentage}%`}</span>
        )}
      </div>
      <p className="text-2xl font-bold text-white mt-2">{value}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Card;
