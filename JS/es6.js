/*
 * Complete the TODO items below
 */
let users = [
    {
      name: 'zach',
      email: 'zach@codeup.com',
      languages: ['javascript', 'bash']
    },
    {
      name: 'ryan',
      email: 'ryan@codeup.com',
      languages: ['clojure', 'javascript']
    },
    {
      name: 'luis',
      email: 'luis@codeup.com',
      languages: ['java', 'scala', 'php']
    },
    {
      name: 'fernando',
      email: 'fernando@codeup.com',
      languages: ['java', 'php', 'sql']
    },
    {
      name: 'justin',
      email: 'justin@codeup.com',
      languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know

// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Andrew';
const email = 'stout.stephen13@gmail.com';
const languages = ['html', 'css', 'javascript', 'java', 'sql', 'python', 'rslogix5000(beginner)'];

// TODO: rewrite the object literal using object property shorthand
// users = users.shift({name, email, languages});


users.push(user = {
    name,
    email,
    languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach((user) => {
    return emails.push(user.email);
});
users.forEach((user)=> {
    return names.push(user.name);
});
users.forEach((user)=> {
    return names.push(user.languages);
});

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(({name, email, languages}) => {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;


    // TODO: rewrite the assignment below to use template strings


      // .join(', '));
  // });

    // users.forEach((user) => {
    developers.push(`${name} 's email is ,${email} ${name} knows ${languages}`);
  // developers.push(user.name + '\'s email is ' + user.email + " " + user.name + ' knows ' + user.languages.join(', '))
});


// TODO: Use `let` for the following variable
let list = '';
// console.log(list);
list += `<ul>`;
// console.log(list);

// TODO: rewrite the following loop to use a for..of loop


for (let developer of developers) {
  // ...

// developers.forEach(function (developer) {


  // TODO: rewrite the assignment below to use template strings

  var dev = `<li> ${developer} </li>`;
  list += dev;
}
// console.log(list);
    //
    // var dev = '<li>' + developer + '</li>';
// list.push(dev);
// };
list += `</ul>`;
$('#es6-test').html(list);



