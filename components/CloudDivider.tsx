interface CloudDividerProps {
  flip?: boolean;
  className?: string;
}

const CloudDivider = ({ flip = false, className = "" }: CloudDividerProps) => (
  <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}>
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[60px] md:h-[80px] lg:h-[100px]"
      preserveAspectRatio="none"
    >
      <path
        d="M0 60C120 20 240 80 360 60C480 40 600 80 720 60C840 40 960 80 1080 60C1200 40 1320 80 1440 60V120H0V60Z"
        fill="hsl(var(--background))"
      />
      <path
        d="M0 70C160 30 280 90 400 70C520 50 640 90 760 70C880 50 1000 90 1120 70C1240 50 1360 90 1440 70V120H0V70Z"
        fill="hsl(var(--card))"
        fillOpacity="0.5"
      />
    </svg>
  </div>
);

export default CloudDivider;
