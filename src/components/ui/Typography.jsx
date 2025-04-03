const Typography = ({ variant = "body", className = "", children }) => {
  const baseStyles = {
    h1: "text-3xl font-bold text-white",
    h2: "text-2xl font-semibold text-white",
    h3: "text-xl font-medium text-gray-300",
    body: "text-base text-gray-400",
  };

  return <p className={`${baseStyles[variant]} ${className}`}>{children}</p>;
};

export default Typography;
