import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos } from "../store/repSlice";
import { AppDispatch } from "../store/store";

const RepoList: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const { repos, loading, error } = useSelector((state: any) => state.repos);

  // Функция для обработки события изменения текста в input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Функция для обработки события нажатия клавиши
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Запускаем поиск только при нажатии Enter
      if (query) {
        dispatch(fetchRepos(query));
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск репозитория"
        value={query}
        onChange={handleChange} // только сохраняет состояние
        onKeyDown={handleKeyDown} // запускает поиск при нажатии Enter
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && repos.length > 0 && (
        <table className="repo-table">
          <thead>
            <tr>
              <th>Название</th>
              <th>Владелец</th>
              <th>Звезды</th>
              <th>Ссылка</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo: any) => (
              <tr key={repo.id}>
                <td>{repo.name}</td>
                <td>{repo.owner.login}</td>
                <td>{repo.stargazers_count}</td>
                <td>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RepoList;
