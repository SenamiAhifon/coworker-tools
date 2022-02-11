/* first name ,last name ,job title         ,department  ,manager  ,location  ,first aider ,user slack ,timezone
John       ,Doe       ,Software Engineer ,Engineering ,null     ,Glasgow   ,No          ,johndoe    ,America/Los_Angeles
Jane       ,Doe       ,Software Engineer ,Engineering ,John Doe ,Leeds     ,No          ,janedoe    ,America/Los_Angeles
Bob        ,Doe       ,Software Engineer ,Engineering ,Jane Doe ,Cape Town ,No          ,bobdoe     ,America/Los_Angeles
Sally      ,Doe       ,Software Engineer ,Engineering ,Jane Doe ,Rome      ,No          ,sallydoe   ,America/Los_Angeles
 */
const members = [
  {
    firstName: "John",
    LastName: "Doe",
    jobTitle: "Software Engineer",
    department: "Engineering ",
    manager: "null",
    location: "Glasgow",
    firstAider: "No",
    userSlack: "johndoe",
    timeZone: "America/Los_Angeles",
  },

  {
    firstName: "Jane",
    LastName: "Doe",
    jobTitle: "Software Engineer",
    department: "Engineering ",
    manager: "John Doe",
    location: "Leeds",
    firstAider: "No",
    userSlack: "janedoe",
    timeZone: "America/Los_Angeles",
  },

  {
    firstName: "Bob",
    LastName: "Doe",
    jobTitle: "Software Engineer",
    department: "Engineering ",
    manager: "Jane Doe",
    location: "Cape Town",
    firstAider: "No",
    userSlack: "bobdoe",
    timeZone: "America/Los_Angeles",
  },

  {
    firstName: "Sally",
    LastName: "Doe",
    jobTitle: "Software Engineer",
    department: "Engineering ",
    manager: "Jane Doe",
    location: "Rome",
    firstAider: "No",
    userSlack: "sallydoe",
    timeZone: "America/Los_Angeles",
  },
];



module.exports = members;

console.log (module.exports);
