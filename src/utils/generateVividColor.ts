export const generateVividColor = () => {
  const [R, G, B] = Array.from({ length: 3 }, (_) => Math.floor(Math.random() * 128) + 128);
  return `rgb(${R},${G},${B})`;
};
