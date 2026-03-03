const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="absolute animate-ping bg-green-500 h-full w-full rounded-full"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;