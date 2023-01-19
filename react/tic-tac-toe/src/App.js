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

  const [history, setHistory] = useState(
    () => JSON.parse(window.localStorage.getItem("history")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(data));
    window.localStorage.setItem("history", JSON.stringify(history));
  }, [data, history]);

  const [player, setPlayer] = useState(true);
  const [error, setError] = useState("");
  const [winner, setWinner] = useState("");
  const playerName = player ? "X" : "O";

  const handleClickGame = useCallback(
    (i) => () => {
      const tempData = [...data];
      if (tempData[i] === null) {
        setError("");

        tempData[i] = playerName;
        setData(tempData);
        setPlayer((previousPlayer) => !previousPlayer);

        const historyData = {
          label: `player ${playerName} put in position ${i}`,
          data: tempData,
        };
        const tempHistory = [...history];
        tempHistory.push(historyData);
        setHistory(tempHistory);

        let result = false;
        win.map((e) => {
          const [a, b, c] = e;
          if (
            tempData[a] &&
            tempData[a] === tempData[b] &&
            tempData[a] === tempData[c]
          ) {
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
    [data, playerName, history]
  );

  const handleClickHistory = useCallback(
    (index) => () => {
      if (winner === "") {
        const dataChange = history[index].data;
        setData(dataChange);
        const historyChange = history.filter((e, i) => i <= index && e);
        setHistory(historyChange);
      }
    },
    [history, winner]
  );

  const clearGame = useCallback(() => {
    setData(initialState);
    setPlayer(true);
    setError("");
    setWinner("");
    setHistory([]);
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          {history.map((e, i) => {
            return (
              <button
                key={i}
                style={{
                  marginTop: "5px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                }}
                type="button"
                onClick={handleClickHistory(i)}
              >
                <p>{e.label}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
