export const mockSalaryData = {
  'data': {
    'id': null,
    'type': 'Test Name Of Area'
    'attributes': [
      {'id': 1, 'title': 'One', 'min_salary': 1000.50, 'max_salary': 10000},
      {'id': 2, 'title': 'Two', 'min_salary': 2000, 'max_salary': 20000.55},
      {'id': 3, 'title': 'Three', 'min_salary': 3000, 'max_salary': 30000},
      {'id': 4, 'title': 'Four', 'min_salary': 4000, 'max_salary': 40000},
      {'id': 5, 'title': 'Five', 'min_salary': 5000, 'max_salary': 50000}
    ]
  }
}

export const mockUserData = {
  'data': {
    'id': null,
    'type': 'UserOne'
    'attributes': {
      'first_name': 'First Name',
      'last_name': 'Last Name',
      'email': 'Test@Test.com',
      'city': 'Denver',
      'state': 'CO',
      'zipcode': 12345,
      'saved_jobs': [
        { 'job_title': 'THE JOB', 'location': 'Denver', 'company': 'Google', 'url': 'https://github.com/orgs/Mod4JobFinder/projects/1'},
        { 'job_title': 'THE JOB2', 'location': 'New York', 'company': 'Google', 'url': 'https://github.com/orgs/Mod4JobFinder/projects/1'},
        { 'job_title': 'THE JOB3', 'location': 'Los Angeles', 'company': 'Google', 'url': 'https://github.com/orgs/Mod4JobFinder/projects/1'}
      ]
    }
  }
}

export const mockJobsList = {
  "data": [{
    "id": 1,
    "type": "Part Time",
    "attributes": { "title": "Software1", "company": "Google", "category": ["ALL", 'The', 'Tags'], "description": "Are to a dev?", "location": "Anywhere", "publish_date": "datetime", "link": "https://github.com/orgs/Mod4JobFinder/projects/1" }
  }, {
    "id": 2,
    "type": "Part Time",
    "attributes": { "title": "Software2", "company": "Google", "category": ["ALL", 'The', 'Tags'], "description": "Are to a dev?", "location": "Anywhere", "publish_date": "datetime", "link": "https://github.com/orgs/Mod4JobFinder/projects/1" }
  }, {
    "id": 3,
    "type": "Part Time",
    "attributes": { "title": "Software3", "company": "Google", "category": ["ALL", 'The', 'Tags'], "description": "Are to a dev?", "location": "Anywhere", "publish_date": "datetime", "link": "https://github.com/orgs/Mod4JobFinder/projects/1" }
  }, {
    "id": 4,
    "type": "Full Time",
    "attributes": { "title": "Software4", "company": "Google", "category": ["ALL", 'The', 'Tags'], "description": "Are to a dev?", "location": "Anywhere", "publish_date": "datetime", "link": "https://github.com/orgs/Mod4JobFinder/projects/1" }
  }, {
    "id": 5,
    "type": "Full Time",
    "attributes": { "title": "Software5", "company": "Google", "category": ["ALL", 'The', 'Tags'], "description": "Are to a dev?", "location": "Anywhere", "publish_date": "datetime", "link": "https://github.com/orgs/Mod4JobFinder/projects/1" }
  }, {
    "id": 6,
    "type": "Full Time",
    "attributes": { "title": "Software6", "company": "Google", "category": ["ALL", 'The', 'Tags'], "description": "Are to a dev?", "location": "Anywhere", "publish_date": "datetime", "link": "https://github.com/orgs/Mod4JobFinder/projects/1" }
  }, {
    "id": 7,
    "type": "Full Time",
    "attributes": { "title": "Software7", "company": "Google", "category": ["ALL", 'The', 'Tags'], "description": "Are to a dev?", "location": "Anywhere", "publish_date": "datetime", "link": "https://github.com/orgs/Mod4JobFinder/projects/1" }
  }, {
    "id": 8,
    "type": "Full Time",
    "attributes": { "title": "Software8", "company": "Google", "category": ["ALL", 'The', 'Tags'], "description": "Are to a dev?", "location": "Anywhere", "publish_date": "datetime", "link": "https://github.com/orgs/Mod4JobFinder/projects/1" }
  }, {
    "id": 9,
    "type": "Full Time",
    "attributes": { "title": "Software9", "company": "Google", "category": ["ALL", 'The', 'Tags'], "description": "Are to a dev?", "location": "Anywhere", "publish_date": "datetime", "link": "https://github.com/orgs/Mod4JobFinder/projects/1" }
  }, {
    "id": 10,
    "type": "Full Time",
    "attributes": { "title": "Software10", "company": "Google", "category": ["ALL", 'The', 'Tags'], "description": "Are to a dev?", "location": "Anywhere", "publish_date": "datetime", "link": "https://github.com/orgs/Mod4JobFinder/projects/1" }
  }]
}
// {
//   'data': {
//     'id': null,
//       'type': 'urban area'
//       'attributes': [
//         {
//           'id': integer,
//           'title': string,
//           'min_salary': float,
//           'max_salary': float
//         }
//       ]
//   }
// }
// # creating/registering user

// {
//     'first_name': string,
//     'last_name': string,
//     'email': string,
//     'city': string,
//     'state': string (initial),
//     'zipcode': string,
//     'password': string,
//     'password_confirmation': string
//  }

//  #for bad request or invalid credential per user post
//  {
//     error: 'Bad Request for your parameter',
//     errors: "parameter is bad: #{reason}"
// }

// session authentication
// {
//     'email': string,
//     'password': string
//  }

//  #response
//  status: :ok
//  # profile page
//  #request
//  {
//      'email': string,
//  }
//  #response
//  {
//     'data': {
//         'id': null,
//         'type': 'user'
//         'attributes': {
//             'first_name': string,
//             'last_name': string,
//             'email': string,
//             'city': string,
//             'state': string (initial),
//             'zipcode': string,
//             'saved_jobs': [
//                 {
//                     'job_title': string,
//                     'location': string,
//                     'company': string,
//                     'url': string
//                 }
//             ]
//         }
//      }
//
//  salery data
//      [
//  {:title=>"Data Analyst", :min=>"$42878.34", :max=>"$62106.69"},
//  {:title=>"Data Scientist", :min=>"$74686.72", :max=>"$108990.21"},
//  {:title=>"Mobile Developer", :min=>"$69999.26", :max=>"$109493.37"},
//  {:title=>"QA Engineer", :min=>"$56250.12", :max=>"$85478.12"},
//  {:title=>"Systems Administrator", :min=>"$53889.29", :max=>"$78055.83"},
//  {:title=>"Web Developer", :min=>"$51218.22", :max=>"$78639.07"}
// ]
//
// JobPosting API Format
//
// {
//  "data": [{
//    "id": "integer",
//    "type": "job_post",
//    "attributes":{
//      "title": "string",
//      "company": "string",
//      "category": "array(strings)",
//      "description": "string",
//      "location": "string",
//      "publish_date": "datetime",
//      "link": "string"
//      },
//   }]
// }
