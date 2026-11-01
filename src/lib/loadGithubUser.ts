import type {GitHubUser} from "../types/user.ts";

export async function loadGithubUser(
  user: string,
  signal?: AbortSignal
): Promise<GitHubUser> {
  const res = await fetch(`https://api.github.com/users/${user}`, {
    signal,
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  return res.json();
}