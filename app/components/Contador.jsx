import React, { useState, useEffect } from 'react';

const Contador = () => {
  // Defino los estados y variables, y los inicializo vacios
  const [valor, setValor] = useState("");
  const [gasto, setGasto] = useState("");
  const [agrego, setAgrego] = useState("");
  const [total, setTotal] = useState("");

  //Esto es pa coger el valor inicial y ya
  const handleChangeInicial = (event) => {
    const newValue = Number(event.target.value);
    setValor(newValue);
  };

  // Cambios en el gasto
  const handleChangeGasto = (event) => {
    const newGasto = Number(event.target.value);
    setGasto(newGasto);
  };

  //Cambios en el billete agregado
  const handleChangeagrego = (event) => {
    const newAgrego = Number(event.target.value);
    setAgrego(newAgrego);
  };

  // Actualiza el total cada vez que valor, gasto o agrego cambien
  useEffect(() => {
    setTotal(valor + agrego - gasto);
  }, [valor, gasto, agrego]);

  return (
    <div>
      <h2>Agrega un valor inicial</h2>
        <label>
          Valor inicial:
          <input
            type="number"
            value={valor}
            onChange={handleChangeInicial}
          />
        </label>

      <p>Agregar gasto:</p>
      <input
        type="number"
        value={gasto}
        onChange={handleChangeGasto}
      />

      <p>Agregar billete:</p>
      <input
        type="number"
        value={agrego}
        onChange={handleChangeagrego}
      />

      <h2>Total: {total}</h2>
    </div>
  );
};

export default Contador;
