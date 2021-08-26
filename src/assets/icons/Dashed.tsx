export default function DashedIcon(): JSX.Element {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="dashed-icon"
    >
      <circle
        cx="40"
        cy="40"
        r="39"
        stroke="#FFB200"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="4 5"
      />
    </svg>
  );
}
