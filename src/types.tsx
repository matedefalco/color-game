export interface Colors {
  name: string;
  color: string;
}

export interface GameContextData {
  status: "initial" | "playing" | "finished";
  setStatus: React.Dispatch<
    React.SetStateAction<"initial" | "playing" | "finished">
  >;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  maxScore: number;
  setMaxScore: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}
