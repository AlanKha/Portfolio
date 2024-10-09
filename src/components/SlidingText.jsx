import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function SlidingText() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/AlanKha/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className="h-20 my-0 flex text-black text-2xl bg-gradient-to-b from-transparent to-white via-white overflow-hidden h-full">
        <div
          className="h-32 flex items-center justify-center w-full bg-marqueeBanner bg-repeat-x bg-contain"
        >
          <Marquee pauseOnHover={true} delay={1}>
            {repos
              .filter((repo) => !repo.private) // Filter out private repositories
              .map((repo) => (
                <a
                  key={repo.id}
                  href={`https://github.com/AlanKha/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mx-6 ">
                    {repo.name}{" "}
                    <span className="text-sm">
                      {repo.language ? `(${repo.language})` : ""}
                    </span>
                  </span>
                </a>
              ))}
          </Marquee>
        </div>
      </div>
  );
}