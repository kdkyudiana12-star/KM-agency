type LogoProps = {
  variant?: "gold" | "ivory" | "void";
  className?: string;
};

const FILL: Record<NonNullable<LogoProps["variant"]>, string> = {
  gold: "#C8A96A",
  ivory: "#F5F3EE",
  void: "#0A0A0A",
};

export default function Logo({ variant = "gold", className }: LogoProps) {
  const fill = FILL[variant];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      className={className}
      fill="none"
    >
      <circle cx="20" cy="20" r="18.5" stroke={fill} strokeWidth="1" />
      <circle cx="20" cy="20" r="12.5" stroke={fill} strokeWidth="1" />
      <circle cx="20" cy="20" r="6.5" stroke={fill} strokeWidth="1" />
      <circle cx="20" cy="20" r="1.5" fill={fill} />
    </svg>
  );
}
