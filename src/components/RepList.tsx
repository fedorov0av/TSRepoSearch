import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos } from "../store/repSlice";
import { AppDispatch } from "../store/store";

import RepoCard from "./RepCard";

const RepoList: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const { repos, loading, error } = useSelector((state: any) => state.repos);

  useEffect(() => {
    if (query) {
      dispatch(fetchRepos(query));
    }
  }, [query, dispatch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск репозитория"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="repo-list">
        {repos.map((repo: any) => (
          <RepoCard
            key={repo.id}
            name={repo.name}
            owner={repo.owner.login}
            stars={repo.stargazers_count}
            url={repo.html_url}
          />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
