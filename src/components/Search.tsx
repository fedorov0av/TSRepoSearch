import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, clearRepos } from "../store/repSlice";
import { AppDispatch } from "../store/store";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const { repos } = useSelector((state: any) => state.repos);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value === "") {
      dispatch(clearRepos());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (query) {
        dispatch(fetchRepos(query));
      }
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Введите название репозитория и нажмите Enter"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={() => {
          if (query) {
            dispatch(fetchRepos(query));
          }
        }}
      >
        Поиск
      </button>
      {repos.length > 0 ? (
        <button onClick={() => dispatch(clearRepos())}>Очистить</button>
      ) : null}
    </div>
  );
};

export default Search;
