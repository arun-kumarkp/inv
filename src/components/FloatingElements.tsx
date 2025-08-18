const FloatingElements = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="float-animation float-delay-1 absolute top-10 left-6 text-4xl">✨</div>
      <div className="float-animation float-delay-2 absolute top-1/3 right-10 text-5xl">🌸</div>
      <div className="float-animation float-delay-3 absolute bottom-10 left-1/4 text-3xl">💕</div>
    </div>
  );
};

export default FloatingElements;

