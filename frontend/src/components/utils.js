

export function getNodeStyle({ left, top }){
  return {
    width: 160,
    height: 160,
    transform: `translate(${left * (160/ 2)}px, ${top * (160 / 2)}px)`,
  };
}
