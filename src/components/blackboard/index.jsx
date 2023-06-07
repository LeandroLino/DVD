import { Container } from "./style";
import Symbol from "../symbol";
import React, { useEffect, useState } from "react";

const Blackboard = () => {
  const retanguloWidth = 750; // Largura do retângulo
  const retanguloHeight = 500; // Altura do retângulo

  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black", "gray", "brown", "pink"];
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [x, setX] = useState(Math.floor(Math.random() * retanguloWidth));
  const [y, setY] = useState(Math.floor(Math.random() * retanguloHeight));
  const [directionX, setDirectionX] = useState(1);
  const [directionY, setDirectionY] = useState(1);

  const objetoWidth = 60; // Largura do objeto
  const objetoHeight = 60; // Altura do objeto

  const toAngle = () => {
    const angles = [{x: 250, y:0, dirX: 1, dirY: 1}, {x: 275, y: 415, dirX:1, dirY: -1}, 
      {x: 275, y: 165, dirX:-1, dirY: 1}, {x: 270, y: 270, dirX:-1, dirY: -1}]
    const currentAngle = Math.floor(Math.random() * angles.length)
    setX(angles[currentAngle].x)
    setY(angles[currentAngle].y)
    setDirectionX(angles[currentAngle].dirX)
    setDirectionY(angles[currentAngle].dirY)
    setCurrentColor(colors[Math.floor(Math.random() * colors.length)])
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Calcular a próxima posição do objeto
      const newX = x + directionX;
      const newY = y + directionY;

      // Verificar se o objeto atingiu as bordas horizontais do retângulo
      if (newX <= 0 || newX >= retanguloWidth - objetoWidth) {
        setCurrentColor(colors[Math.floor(Math.random() * colors.length)])
        setDirectionX(-directionX); // Inverter a direção horizontal
      }

      // Verificar se o objeto atingiu as bordas verticais do retângulo
      if (newY <= 0 || newY >= retanguloHeight - objetoHeight) {
        setCurrentColor(colors[Math.floor(Math.random() * colors.length)])
        setDirectionY(-directionY); // Inverter a direção vertical
      }

      setX(newX);
      setY(newY);
    }, 10);
    console.log(x, y)
    return () => clearInterval(interval); // Limpar o intervalo quando o componente for desmontado
  }, [x, y, directionX, directionY]);


  return (<div>
     <Container style={{ position: "relative", width: retanguloWidth, height: retanguloHeight, border: "1px solid black" }}>
      <Symbol
        position="absolute"
        top={y}
        left={x}
        width={objetoWidth}
        height={objetoHeight}
        background={currentColor}
        />
     </Container>
     <button onClick={()=>toAngle()}>Angulo!</button>
    </div>
  );
};

export default Blackboard;

