import React, { useState } from 'react';
import './CharacterSheet.css';

const CharacterSheet = () => {
  // Atributos principais
  const [st, setSt] = useState(11);
  const [dx, setDx] = useState(14);
  const [iq, setIq] = useState(12);
  const [ht, setHt] = useState(12);
  
  // Resistências
  const [rd, setRd] = useState(12);
  
  // Habilidades
  const [rifle, setRifle] = useState(18);
  const [pistola, setPistola] = useState(16);
  const [canhao, setCanhao] = useState(15);
  const [lancaFoguetes, setLancaFoguetes] = useState(15);
  const [arremesso, setArremesso] = useState(15);
  const [briga, setBriga] = useState(14);
  const [primeirosSocorros, setPrimeirosSocorros] = useState(14);
  const [explosivos, setExplosivos] = useState(12);
  const [montarArmadilhas, setMontarArmadilhas] = useState(12);
  const [tatica, setTatica] = useState(12);
  const [armeiro, setArmeiro] = useState(11);

  // Função genérica para incrementar
  const increment = (setter, currentValue) => {
    setter(currentValue + 1);
  };

  // Função genérica para decrementar
  const decrement = (setter, currentValue) => {
    if (currentValue > 0) {
      setter(currentValue - 1);
    }
  };

  // Função genérica para resetar
  const reset = (setter, defaultValue) => {
    setter(defaultValue);
  };

  // Componente de contador reutilizável
  const Counter = ({ label, value, setter, defaultValue }) => {
    return (
      <div className="counter-row">
        <span className="counter-label">{label}</span>
        <div className="counter-controls">
          <button onClick={() => decrement(setter, value)}>-</button>
          <span className="counter-value">{value}</span>
          <button onClick={() => increment(setter, value)}>+</button>
          <button 
            className="reset-btn"
            onClick={() => reset(setter, defaultValue)}
            title="Resetar"
          >
            ↺
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="character-sheet">
      <h1>Masaharu Ishii</h1>
      
      <div className="attributes-section">
        <h2>Atributos</h2>
        <div className="attributes-grid">
          <Counter label="ST" value={st} setter={setSt} defaultValue={11} />
          <Counter label="DX" value={dx} setter={setDx} defaultValue={14} />
          <Counter label="IQ" value={iq} setter={setIq} defaultValue={12} />
          <Counter label="HT" value={ht} setter={setHt} defaultValue={12} />
          <Counter label="RD" value={rd} setter={setRd} defaultValue={12} />
        </div>
      </div>
      
      <div className="skills-section">
        <h2>Habilidades</h2>
        <Counter label="Rifle" value={rifle} setter={setRifle} defaultValue={18} />
        <Counter label="Pistola" value={pistola} setter={setPistola} defaultValue={16} />
        <Counter label="Canhão" value={canhao} setter={setCanhao} defaultValue={15} />
        <Counter label="Lança Foguetes" value={lancaFoguetes} setter={setLancaFoguetes} defaultValue={15} />
        <Counter label="Arremesso" value={arremesso} setter={setArremesso} defaultValue={15} />
        <Counter label="Briga" value={briga} setter={setBriga} defaultValue={14} />
        <Counter label="Primeiros Socorros" value={primeirosSocorros} setter={setPrimeirosSocorros} defaultValue={14} />
        <Counter label="Explosivos" value={explosivos} setter={setExplosivos} defaultValue={12} />
        <Counter label="Montar Armadilhas" value={montarArmadilhas} setter={setMontarArmadilhas} defaultValue={12} />
        <Counter label="Tática" value={tatica} setter={setTatica} defaultValue={12} />
        <Counter label="Armeiro" value={armeiro} setter={setArmeiro} defaultValue={11} />
      </div>
    </div>
  );
};

export default CharacterSheet;