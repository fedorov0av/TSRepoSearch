import React from "react";

interface RepoProps {
  name: string;
  owner: string;
  stars: number;
  url: string;
}

const RepoCard: React.FC<RepoProps> = ({ name, owner, stars, url }) => {
  return (
    <div className="repo-card">
      <h3>{name}</h3>
      <p>Owner: {owner}</p>
      <p>Stars: {stars}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default RepoCard;
