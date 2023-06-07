import dvd from "./dvd.png"

function Symbol({ position, top, left, width, height, background }) {
  return (
    <div
      style={{
          position,
          top,
          left,
          width,
          height,
          background,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
    <img style={{
      width: "50px",
      height: "50px"
    }}
 src={dvd}/>
    </div>
  );
}

export default Symbol;
