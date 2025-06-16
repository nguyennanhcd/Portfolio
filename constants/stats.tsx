import { fetchGitHubCommits } from '@/app/api/fetchGithubCommits'

const numOfCommits: number = await fetchGitHubCommits(
  'nguyennanhcd',
  process.env.githubToken!,
)

const calculateYearsOfExperience = (
  startDate: string | number | Date,
) => {
  const start = new Date(startDate) // e.g., '2018-06-01'
  const now = new Date()
  const diffInYears =
    now.getFullYear() - start.getFullYear()

  let years = diffInYears
  if (
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() &&
      now.getDate() < start.getDate())
  ) {
    years = diffInYears - 1
  }
  return years
}

export const stats = [
  {
    num: calculateYearsOfExperience('2024-01-07'),
    text: 'Years of experience',
  },
  {
    num: 5,
    text: 'Years of experience',
  },
  {
    num: 4,
    text: 'Technologies Mastered',
  },
  {
    num: numOfCommits,
    text: 'Code commits',
  },
]
