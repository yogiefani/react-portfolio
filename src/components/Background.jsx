export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div
        className="absolute top-[-300px] left-[-200px] w-[800px] h-[800px] rounded-full"
        style={{
          background: "#12124D",
          filter: "blur(230px)",
          opacity: "0.15",
        }}
      />
      <div
        className="absolute bottom-[-300px] right-[-200px] w-[800px] h-[800px] rounded-full"
        style={{
          background: "#12124D",
          filter: "blur(230px)",
          opacity: "0.15",
        }}
      />
    </div>
  );
};
