export function ScrollIndicator({
  targetId,
  direction = "down",
  dark = false,
}: {
  targetId: string;
  direction?: "up" | "down";
  dark?: boolean;
}) {
  return (
    <a
      href={`#${targetId}`}
      aria-label={direction === "down" ? "Ir para a próxima seção" : "Ir para a seção anterior"}
      className={`absolute ${direction === "down" ? "bottom-6 right-6" : "top-6 right-6"} z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
        dark
          ? "text-white/70 hover:text-white bg-white/10 hover:bg-white/20"
          : "text-content-secondary hover:text-content-primary bg-black/5 hover:bg-black/10"
      } animate-bounce`}
    >
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-5 w-5"
      >
        {direction === "down" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        )}
      </svg>
    </a>
  );
}
