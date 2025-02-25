const LightBar = ({ fill = "#1C1C1C" }) => {
  return (
    <svg
      width="2"
      height="18"
      viewBox="0 0 2 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.78409 0.536932V17.2812H0.789773V0.536932H1.78409Z"
        fill={fill}
        fillOpacity="0.2"
      />
    </svg>
  );
};

export default LightBar;
