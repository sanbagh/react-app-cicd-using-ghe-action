module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/sanbagh/react-app-cicd-using-ghe-action",
  plugins: [
    "@semantic-release/commit-analyze",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};