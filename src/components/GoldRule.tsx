export default function GoldRule({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`h-px bg-gold ${className}`} />;
}
