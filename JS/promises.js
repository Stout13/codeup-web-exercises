
// await octokit.request('GET /users/{Stout13}/events/public', {
//     username: 'STOUT13'
// })
console.log("hello");
// function getGithubUsernames() {
//     return fetch('https://api.github.com/users/Stout13/codeup-web-exercises/commits?per_page=1')
//         .then(response => response.json())
// }

// later on...

// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));




// https://stackoverflow.com/questions/67986923/how-to-display-the-name-of-the-latest-commit-on-github-to-my-website

// fetch from above stack overflow fetches
fetch('https://api.github.com/repos/Stout13/codeup-web-exercises/commits?per_page=1')
    .then(res => res.json())
    .then(res => {
        document.getElementById('message').innerHTML = res[0].commit.message
    })


// Create a file named promises.js inside of your js directory and link it to an HTML file of your choice.
//
//     Generate a Personal Access Token for the GitHub API.
//
//     We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:
//
//
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.



// // Octokit.js
// // https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//     auth: '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3'
// })
//
// await octokit.request('GET /repos/{owner}/{repo}/commits', {
//     owner: 'Stout13',
//     repo: 'REPO'
// })
//
// console.log(octokit);