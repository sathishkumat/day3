// for the given JSON iterate over all for loops(for,for in, for of, for Each)
// for in loop object

var studentname={
    "name":"john doe",
    "age":"32",
    "year":"2018",
    "address":"san fransico",
  };
  for(var a in studentname){
    console.log(a,studentname[a]);
  }
  //for loop
  var studentname={"Attendance":["mon","tue","wed"]
};
studentname.Attendance=["mon","tue","wed"];
for(var i=0;i<studentname.Attendance.length;i++){
    console.log(studentname.Attendance[i]);
}
// Create your own resume data in JSON format
let myResume={
    "basics": {
      "name": "SATHISHKUMAR N",
      "email": "skgrsarthish@gamil.com",
      "phone": 9994273214,
      "degree": "B.E",
      "location": {
        "address": "102/80 darlington bridge",
        "postalCode": 643101,
        "city": "coonoor",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "github":"https://github.com/sathishkumat
        }
      ]
    },
    "work": [
      {
        "company": "Thryve digital",
        "position": "Bsenior process specilist",
        "startDate": "2020-05-02",
        "endDate": "2021-09-11",
        },
    ],
    "education": [
      {
        "institution": "JKK Munirajha College Of technology",
        "department": "ECE",
        "studyType": "fulltime",
        "batch start year": 2013,
        "batch end year": 2016,
        "gpa":6.6,
      }
    ],
    "skills": [
      {
        "name": "javascript",
        "level": "beginer",
         }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "books,music,",
      }
    ]
  }
  console.log(myResume);