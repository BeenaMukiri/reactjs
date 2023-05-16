import React, { useCallback, useState } from 'react'
import List from './List';

const Home = () => {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false);

    const theme = {
        backgroundColor: dark? '#333' :'#FFF'
    }
    const getItems = useCallback(() => {
      return [number, number + 1, number + 2];
    }, [number]);
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default Home