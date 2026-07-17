export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  updatedAt: string;
};

const GITHUB_USER = "RajneeshSingh007";

const EXCLUDE = new Set([
  "RajneeshSingh007",
  "portflio",
  "porfolio",
]);

export async function getPublicRepos(limit = 6): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "portfolio-site",
        },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      console.error("GitHub API error", res.status);
      return [];
    }

    const data = (await res.json()) as Array<{
      id: number;
      name: string;
      description: string | null;
      html_url: string;
      language: string | null;
      stargazers_count: number;
      forks_count: number;
      topics?: string[];
      updated_at: string;
      fork: boolean;
      archived: boolean;
    }>;

    return data
      .filter(
        (repo) =>
          !repo.fork &&
          !repo.archived &&
          !EXCLUDE.has(repo.name),
      )
      .sort((a, b) => {
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return (
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
      })
      .slice(0, limit)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        htmlUrl: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics ?? [],
        updatedAt: repo.updated_at,
      }));
  } catch (error) {
    console.error("Failed to fetch GitHub repos", error);
    return [];
  }
}

export const githubProfileUrl = `https://github.com/${GITHUB_USER}`;
