export function CyberpunkGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Perspective Grid */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60vh] opacity-20"
        style={{
          background: `
            linear-gradient(90deg, transparent 0%, cyan 50%, transparent 100%) 0 0 / 100% 2px,
            linear-gradient(transparent 0%, cyan 50%, transparent 100%) 0 0 / 2px 100%
          `,
          backgroundSize: "80px 80px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      />
      
      {/* Energy Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 animate-pulse" />
      <div className="absolute top-1/4 right-0 w-1 h-[300px] bg-gradient-to-b from-transparent via-violet-500 to-transparent opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-0 w-1 h-[250px] bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
