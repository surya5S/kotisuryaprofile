import { useState, useEffect } from "react";

type Board = (null | "X" | "O")[];

const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function getWinner(board: Board): { winner: "X" | "O" | null; line: number[] | null } {
  for (const line of WIN_LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a] as "X" | "O", line };
    }
  }
  return { winner: null, line: null };
}

function minimax(board: Board, isMaximizing: boolean): number {
  const { winner } = getWinner(board);
  if (winner === "O") return 10;
  if (winner === "X") return -10;
  if (board.every(Boolean)) return 0;

  if (isMaximizing) {
    let best = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = "O";
        best = Math.max(best, minimax(board, false));
        board[i] = null;
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = "X";
        best = Math.min(best, minimax(board, true));
        board[i] = null;
      }
    }
    return best;
  }
}

function getBestMove(board: Board): number {
  let bestVal = -Infinity;
  let bestMove = -1;
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = "O";
      const moveVal = minimax(board, false);
      board[i] = null;
      if (moveVal > bestVal) {
        bestVal = moveVal;
        bestMove = i;
      }
    }
  }
  return bestMove;
}

export default function TicTacToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [justPlaced, setJustPlaced] = useState<number | null>(null);

  const { winner, line: winLine } = getWinner(board);
  const isDraw = !winner && board.every(Boolean);

  useEffect(() => {
    if (isPlayerTurn || gameOver) return;
    const timer = setTimeout(() => {
      const move = getBestMove([...board]);
      if (move === -1) return;
      const next = [...board];
      next[move] = "O";
      setBoard(next);
      setJustPlaced(move);
      setIsPlayerTurn(true);
      const { winner: w } = getWinner(next);
      if (w || next.every(Boolean)) setGameOver(true);
    }, 450);
    return () => clearTimeout(timer);
  }, [isPlayerTurn, board, gameOver]);

  const handleClick = (i: number) => {
    if (!isPlayerTurn || board[i] || gameOver) return;
    const next = [...board];
    next[i] = "X";
    setBoard(next);
    setJustPlaced(i);
    const { winner: w } = getWinner(next);
    if (w || next.every(Boolean)) {
      setGameOver(true);
    } else {
      setIsPlayerTurn(false);
    }
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameOver(false);
    setJustPlaced(null);
  };

  const statusText = winner
    ? winner === "X" ? "You win! 🎉" : "AI wins! 🤖"
    : isDraw
    ? "Draw! 🤝"
    : isPlayerTurn
    ? "Your turn"
    : "AI thinking…";

  const statusColor = winner === "X"
    ? "text-teal-400"
    : winner === "O"
    ? "text-rose-400"
    : isDraw
    ? "text-amber-400"
    : isPlayerTurn
    ? "text-violet-400"
    : "text-gray-400";

  return (
    <div className="mt-8 flex flex-col items-center gap-3 w-full">
      {/* Header */}
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-rose-400 to-violet-500" />
        <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Tic Tac Toe
        </p>
        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-500 to-teal-400" />
      </div>

      {/* Legend */}
      <div className="flex gap-3 text-[9px] font-semibold">
        <span className="text-teal-500">X — You</span>
        <span className="text-rose-400">O — AI</span>
      </div>

      {/* Status badge */}
      <div className={`text-[10px] font-bold px-3 py-0.5 rounded-full border ${
        winner === "X" ? "border-teal-400/50 bg-teal-400/10 text-teal-400"
        : winner === "O" ? "border-rose-400/50 bg-rose-400/10 text-rose-400"
        : isDraw ? "border-amber-400/50 bg-amber-400/10 text-amber-400"
        : `border-violet-400/30 bg-violet-400/5 ${statusColor}`
      } transition-all`}>
        {statusText}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1.5 p-2 rounded-xl bg-white/20 dark:bg-gray-900/40 border border-white/30 dark:border-violet-900/50 shadow-inner">
        {board.map((cell, i) => {
          const isWinCell = winLine?.includes(i);
          const isNew = justPlaced === i;
          const isEmpty = !cell;

          return (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className={`
                w-11 h-11 rounded-lg text-base font-black border-2 transition-all duration-200
                flex items-center justify-center select-none
                ${isWinCell
                  ? "bg-violet-200 border-violet-300 text-violet-600 dark:bg-violet-300/30 dark:border-violet-400/50 dark:text-violet-300 shadow-[0_0_10px_rgba(139,92,246,0.35)] scale-110"
                  : cell === "X"
                  ? "bg-teal-100 border-teal-200 text-teal-500 dark:bg-teal-300/20 dark:border-teal-300/40 dark:text-teal-300"
                  : cell === "O"
                  ? "bg-rose-100 border-rose-200 text-rose-400 dark:bg-rose-300/20 dark:border-rose-300/40 dark:text-rose-300"
                  : "bg-white/60 dark:bg-white/10 border-gray-200 dark:border-white/20 hover:bg-violet-50 dark:hover:bg-violet-300/10 hover:border-violet-300 dark:hover:border-violet-400/40 hover:scale-105 cursor-pointer"
                }
                ${isNew ? "scale-110" : ""}
                ${isEmpty && !isPlayerTurn ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              {cell}
            </button>
          );
        })}
      </div>

      {/* Restart */}
      <button
        onClick={reset}
        className="mt-1 px-4 py-1 text-[10px] font-bold rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-teal-500 text-white hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-md tracking-wide uppercase"
      >
        Restart
      </button>
    </div>
  );
}
