import React, { useCallback, useState, useEffect } from "react";
import "./App.css";

const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

const initialState = Array(9).fill(null);

function App() {
  const [data, setData] = useState(
    () => JSON.parse(window.localStorage.getItem("data")) || initialState
  );

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const [player, setPlayer] = useState(true);
  const [error, setError] = useState("");
  const [winner, setWinner] = useState("");
  const playerName = player ? "X" : "O";

  const handleClickGame = useCallback(
    (i) => () => {
      let temp = [...data];
      if (temp[i] === null) {
        setError("");

        temp[i] = playerName;
        setData(temp);
        setPlayer((previousPlayer) => !previousPlayer);

        let result = false;
        win.map((e) => {
          const [a, b, c] = e;
          if (temp[a] && temp[a] === temp[b] && temp[a] === temp[c]) {
            result = true;
          }
          return null;
        });
        if (result) {
          setWinner(playerName);
        }
      } else {
        setError("this field already fill, please select the other one");
      }
    },
    [data, playerName]
  );

  const clearGame = useCallback(() => {
    setData(initialState);
    setPlayer(true);
    setError("");
    setWinner("");
  }, []);

  return (
    <div className="container">
      {error && <p>{error}</p>}
      {!error && !winner && <p>player {playerName} turn</p>}
      <div className="content">
        {data.map((e, i) => {
          return (
            <button
              key={i}
              type="button"
              onClick={handleClickGame(i)}
              className="column"
              disabled={winner !== ""}
            >
              {e}
            </button>
          );
        })}
      </div>
      {winner && <p>winner is player {winner}</p>}
      <button type="button" onClick={clearGame}>
        clear
      </button>

      <div style={{ marginTop: "50px", borderTop: "1px solid black" }}>
        <p>history</p>
      </div>
    </div>
  );
}

export default App;
