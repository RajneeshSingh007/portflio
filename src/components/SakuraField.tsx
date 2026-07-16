"use client";

const PETALS = Array.from({ length: 28 }, (_, i) => {
  const col = i % 14;
  const row = Math.floor(i / 14);
  return {
    left: `${4 + col * 7 + (row % 2) * 3}%`,
    delay: `${(i * 0.55) % 9}s`,
    duration: `${10 + (i % 8) * 1.1}s`,
    size: 8 + (i % 7) * 1.4,
    drift: (i % 5) - 2,
    hue: i % 3,
  };
});

export function SakuraField() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 0.85,
            animationDelay: p.delay,
            animationDuration: p.duration,
            ["--drift" as string]: `${p.drift * 28}px`,
            background:
              p.hue === 0
                ? "linear-gradient(135deg, #ffb3d4, #ff6ba8)"
                : p.hue === 1
                  ? "linear-gradient(135deg, #ffc9e0, #ff8fbf)"
                  : "linear-gradient(135deg, #ffd6ea, #ff9ec8)",
            opacity: 0.55 + (i % 4) * 0.1,
          }}
        />
      ))}
      <span className="float-orb left-[12%] top-[20%] h-28 w-28 bg-sakura/20" />
      <span
        className="float-orb right-[10%] top-[35%] h-36 w-36 bg-ice/20"
        style={{ animationDelay: "1.5s" }}
      />
      <span
        className="float-orb bottom-[15%] left-[40%] h-24 w-24 bg-lilac/20"
        style={{ animationDelay: "3s" }}
      />
      <span className="sparkle left-[20%] top-[30%]" />
      <span className="sparkle right-[22%] top-[18%]" style={{ animationDelay: "0.7s" }} />
      <span className="sparkle right-[35%] top-[55%]" style={{ animationDelay: "1.4s" }} />
      <span className="sparkle left-[55%] top-[12%]" style={{ animationDelay: "2.1s" }} />
      <span className="sparkle left-[70%] top-[40%]" style={{ animationDelay: "0.3s" }} />
    </div>
  );
}
