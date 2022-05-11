

var data = (user) => {
    fetch('https://api.github.com/users/Stout13',
        {headers: {'Authorization': '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'}}).then(data => {
        return(data);
    });
};

console.log(data);


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