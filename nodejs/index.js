//Assíncrono
/* 
console.log("Before");
getUser(1, (user) => {
  getRepositories(user.gitHugUserName, (repos) => {
    getCommits(repo, (commits) => {});
    //callback hell
  });
}); */

console.log("Before");
//getUser(1, getRepositories);
console.log("After");

function getRepositories(user) {
  getRepositories(user.gitHugUserName, getCommits);
}

function getCommits(repos) {
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

//Sincrono
/* console.log("Before");
const user = getUser(1);
const repos = getRepositories(user.gitHubUserName);
const commits = getCommits(repos[0]);
console.log("After"); */

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database");
    callback({ id: id, gitHubUserName: "mosh" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling GithHub API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log("Calling GithubAPI...");
    callback(["commit"]);
  }, 2000);
}
