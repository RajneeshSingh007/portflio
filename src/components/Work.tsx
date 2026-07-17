import { WorkClient } from "@/components/WorkClient";
import { getPublicRepos, githubProfileUrl } from "@/lib/github";

type WorkProps = {
  repos: Awaited<ReturnType<typeof getPublicRepos>>;
};

export function Work({ repos }: WorkProps) {
  return <WorkClient repos={repos} profileUrl={githubProfileUrl} />;
}
