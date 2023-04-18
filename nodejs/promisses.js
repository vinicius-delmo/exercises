const p = new Promise((resolve, reject) => {
  //asycn work... = value or error
  setTimeout(() => {
    resolve(1); //pending => resolved, fulffiel
    reject(new Error("404 - Not Found")); // pending => rejected
  }, 2000);
});

p.then((result) => console.log("Result", result)).catch((err) =>
  console.log("Error", err.message)
);

// Replacing callback hell in Promises

/* console.log("Before");
getUser(1, (user) => {
  getRepositories(user.gitHugUserName, (repos) => {
    getCommits(repo, (commits) => {});
    //callback hell
  });
}); */

/* getUser(1)
  .then((user) => getRepositories(user.gitHubUserName))
  .then((repos) => getCommits(repos[0])
  .then((commits) => console.log("Commits", commits))
  .catch(err=> console.log('Error', err.message))

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database");
      resolve({ id: id, gitHubUserName: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GithHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GithubAPI...");
      resolve(["commit"]);
    }, 2000);
  });
}
 */
