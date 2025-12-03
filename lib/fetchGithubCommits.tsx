interface Repo {
  name: string
  fork: boolean
}

interface Commit {
  sha: string
}

export const fetchGitHubCommits = async (
  username: string,
  token: string,
): Promise<number> => {
  // Check if token is provided
  if (!token) {
    console.warn(
      'GitHub token not provided, returning default value',
    )
    return 300
  }

  try {
    let repos: Repo[] = []
    let page = 1

    // Fetch all repositories
    while (true) {
      const repoResponse = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'User-Agent': 'Node.js',
            Accept: 'application/vnd.github.v3+json',
          },
          cache: 'force-cache',
        },
      )

      if (!repoResponse.ok) {
        throw new Error(
          `Failed to fetch repos: ${repoResponse.status}`,
        )
      }
      const repoData: Repo[] = await repoResponse.json()
      if (repoData.length === 0) break
      repos = [...repos, ...repoData]
      page++
    }

    let totalCommits = 0

    for (const repo of repos) {
      if (repo.fork) continue // Skip forks

      let commitPage = 1
      let repoCommits = 0

      while (true) {
        const commitResponse = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/commits?author=${username}&per_page=100&page=${commitPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'User-Agent': 'Node.js',
              Accept: 'application/vnd.github.v3+json',
            },
            cache: 'force-cache',
          },
        )

        if (!commitResponse.ok) {
          console.warn(
            `Skipping ${repo.name}, got status: ${commitResponse.status}`,
          )
          break
        }

        const commits: Commit[] =
          await commitResponse.json()
        repoCommits += commits.length
        if (commits.length < 100) break
        commitPage++
      }

      totalCommits += repoCommits
    }
    return totalCommits
  } catch (err) {
    console.error('Error fetching commits:', err)
    throw new Error(
      `Failed to fetch commits: ${(err as Error).message}`,
    )
  }
}
