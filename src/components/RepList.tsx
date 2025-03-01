import React from "react";
import { useSelector } from "react-redux";

const RepoList: React.FC = () => {
  const { repos, loading, error } = useSelector((state: any) => state.repos);

  return (
    <div className="content">
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
