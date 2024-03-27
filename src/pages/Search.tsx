import { useEffect, useState } from "react";
import "./Search.css";
import { useAppDispatch, useAppSelector } from "../util/hooks";
import { addToHistory, selectSearchHistory } from "../util/historySlice";

type HistoryObjType = {
  word: string;
  date: string;
};
export default function () {
  const dispatch = useAppDispatch();
  const history = useAppSelector(selectSearchHistory) as HistoryObjType[];
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    history.map((ele) => console.log(ele.word));
  }, [history]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = (todayDate.getMonth() + 1).toString().padStart(2, "0");
    const day = todayDate.getDate().toString().padStart(2, "0");

    e.preventDefault();
    const searchObject:HistoryObjType = { word: searchField, date: `${year}-${month}-${day}` };

    dispatch(addToHistory(searchObject));
    //  window.open(`https://jisho.org/search/${searchField}`, "_blank");
  };

  return (
    <div>
      <form
        className="search-container"
        onSubmit={handleSearch}
        autoComplete="off"
      >
        <label htmlFor="search">Jisho</label>
        <div>
          <input
            type="text"
            name="search"
            id="search"
            value={searchField}
            onChange={(e) => {
              setSearchField(e.target.value);
            }}
          />
          <button>Search</button>
        </div>
      </form>

      <div className="history-container">
        {history.map((obj) => {
          return <div>{obj.word}</div>;
        })}
      </div>
    </div>
  );
}
