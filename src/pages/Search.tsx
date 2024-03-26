import { useEffect, useState } from "react";
import "./Search.css";

export default function () {
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    console.log(searchField);
  }, [searchField]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(`https://jisho.org/search/${searchField}`, "_blank");
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
    </div>
  );
}
