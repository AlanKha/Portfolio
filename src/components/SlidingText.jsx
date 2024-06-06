import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function SlidingText() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/AlanKha/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 5)));
  }, []);

  return (
    <div className="h-20 flex bg-[#FFFCEC] text-[#000000] border-y-2">
      <Marquee pauseOnHover={true} delay={1}>
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={`https://github.com/AlanKha/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mx-6 text-xl">
              {repo.name}, ⭐ {repo.stargazers_count}, 🍴 {repo.forks_count}
            </span>
          </a>
        ))}
      </Marquee>
    </div>
  );
}
