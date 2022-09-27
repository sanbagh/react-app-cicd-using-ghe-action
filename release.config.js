module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/sanbagh/react-app-cicd-using-ghe-action",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
