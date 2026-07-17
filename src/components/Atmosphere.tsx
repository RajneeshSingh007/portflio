export function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(165deg,#f4f7fb_0%,#eef5f4_42%,#e8eef6_100%)]" />

      <div className="orb-drift absolute -left-[12%] -top-[18%] h-[55vw] max-h-[520px] w-[55vw] max-w-[520px] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.28)_0%,transparent_68%)] blur-2xl" />
      <div
        className="orb-drift absolute -right-[8%] top-[8%] h-[48vw] max-h-[460px] w-[48vw] max-w-[460px] rounded-full bg-[radial-gradient(circle,rgba(15,154,138,0.18)_0%,transparent_70%)] blur-2xl"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="orb-drift absolute bottom-[5%] left-[28%] h-[40vw] max-h-[380px] w-[40vw] max-w-[380px] rounded-full bg-[radial-gradient(circle,rgba(196,165,116,0.16)_0%,transparent_70%)] blur-2xl"
        style={{ animationDelay: "5s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,16,31,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(7,16,31,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 75% 55% at 50% -5%, black 15%, transparent 72%)",
        }}
      />

      <div className="grain" />
    </div>
  );
}
