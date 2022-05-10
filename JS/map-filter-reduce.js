const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];



var multifacetedUsers = users.filter(function(userList) {
    return userList.languages.length >2;
});

console.log(multifacetedUsers);


var userEmails = users.map(function(userList) {
    return userList.email;
});

console.log(userEmails);

const sum = users.reduce((a, b)  => {
    return a + b.yearsOfExperience;
}, 0);

console.log(sum/users.length);
// var emailLengthArray = users.reduce((a.email) => {
//     return a.lengthOf = a.email.length;
// });

const longestEmail = users.sort((a, b) => (a.email.length > b.email.length) ? 1 : -1);


console.log(longestEmail);
// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
//     Use .map to create an array of strings where each element is a user's email address
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
//     Use .reduce to get the longest email from the list of users.
//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
//