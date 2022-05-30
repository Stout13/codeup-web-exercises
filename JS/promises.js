// let reader = new FileReader();
//
// reader.readAsText(`GP1/passcode`, 'utf-8')

// function previewFile() {
//     const content = document.querySelector('#message');
//     const [file] = "GP1/passcode"
//     const reader = new FileReader();
//
//     reader.addEventListener("load", () => {
//         // this will then display a text file
//         content.innerText = reader.result;
//     }, false);
// }
// if (file) {
//     return reader.readAsText(file);
// }


    // let ssh = previewFile();
//     const octokit = new Octokit({
//     auth: "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"
// })
// octokit.request('GET /repos/:Stout13/:codeup-web-exercises/commits/main', {
//     username: 'Stout13'
// })
// console.log(previewFile());
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
    }).then(res => {
        console.log(res);
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

//
// await octokit.request('GET /repos/{owner}/{repo}/commits', {
//     owner: 'Stout13',
//     repo: 'REPO'
// })
//
// console.log(octokit);