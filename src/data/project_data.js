import pythonImg from "../images/python.svg";
import htmlImg from "../images/html.svg";
import cPlusPlusImg from "../images/c++.svg";
import djangoImg from "../images/django.svg";
import reactjsImg from "../images/reactjs.svg";
import javascriptImg from "../images/javascript.svg";
import mysqlImg from "../images/mysql.svg";
import nodejsImg from "../images/nodejs.svg";
import mongodbImg from "../images/mongodb.svg";
import flaskImg from "../images/flask.svg";

const about_me_content = {
  title: "Hello",
  subtitle: "Here's who I am & what I do.",
  description: `A skilled, knowledgeable, and qualified graduate student with
   extensive background in computer programming and project management.
    Seeking a challenging position as computer programmer to utilize my
     knowledge in a well reputed organization.`,
};

const project_data = [
  {
    id: 1,
    title: "Tweetal",
    icon: "faTwitter",
    iconColor: "blue",
    detail: `This is an Analytical tool which uses Twitter API to perform
        certain Analysis on twitter users which can be further used for
        marketing.`,
    // listTitle: "Functions",
    // list: [
    //   "Search potential users via keywords",
    //   "Tweet",
    //   "Send Direct message to selected users from search results",
    //   "Tweet scheduling",
    // ],
    link: "https://github.com/JaiKumarOfficial/Tweetal",
  },
  {
    id: 2,
    title: "Elder Library",
    icon: "faBook",
    iconColor: "black",
    detail: `Javascript web application developed using Node JS, Express, Pug and Mongoose.
    Elder Library web app has Create Read Update Delete (CRUD) and authentication functionality.
    `,
    link: "https://github.com/JaiKumarOfficial/libray_app_nodeJS",
  },
  {
    id: 3,
    title: "Http Load Balancer",
    icon: "faBalanceScale",
    iconColor: "black",
    detail: `Http loadbalancer developed using Test-Driven-Development. 
    It is a python backend loadbalancer server logic which uses Python's Flask framework. 
    Loadbalancer is capable to handle both Host-Based Routing and Path-Based Routing.
    `,
    link: "https://github.com/JaiKumarOfficial/TDD-http-loadbalancer",
  },
  {
    id: 4,
    title: "Poker Game",
    icon: "faCoins",
    iconColor: "black",
    detail: `It is a command line poker game developed using python. 
    Implemented OOPS fundamentals & python classes. 
    Game covers all possible draw cases as well.`,
    link: "https://github.com/JaiKumarOfficial/PokerGame",
  },
  {
    id: 5,
    title: "Social Block",
    icon: "faUsers",
    iconColor: "blue",
    detail: `MERN Full Stack web application with CRUD functionality.
    Social Block is social media platform to interact with people and socialize.`,
    link: "https://github.com/JaiKumarOfficial/social-block",
  },
];

const skills = [
  {
    id: 1,
    skill: "python",
    skillImg: pythonImg,
    alt: "python-image",
    skillBar: 4,
  },
  {
    id: 2,
    skill: "javascript",
    skillImg: javascriptImg,
    alt: "javascript-image",
    skillBar: 4,
  },
  {
    id: 3,
    skill: "c++",
    skillImg: cPlusPlusImg,
    alt: "c++-image",
    skillBar: 3,
  },
  {
    id: 4,
    skill: "html",
    skillImg: htmlImg,
    alt: "html-image",
    skillBar: 4,
  },
  {
    id: 5,
    skill: "Docker",
    skillImg: `${process.env.PUBLIC_URL}/images/docker.png`,
    alt: "docker-image",
    skillBar: 2,
  },
  {
    id: 6,
    skill: "nodejs",
    skillImg: nodejsImg,
    alt: "nodejs-image",
    skillBar: 4,
  },
  {
    id: 7,
    skill: "mysql",
    skillImg: mysqlImg,
    alt: "mysql-image",
    skillBar: 4,
  },
  {
    id: 8,
    skill: "django",
    skillImg: djangoImg,
    alt: "django-image",
    skillBar: 4,
  },
  {
    id: 9,
    skill: "flask",
    skillImg: flaskImg,
    alt: "flask-image",
    skillBar: 4,
  },
  {
    id: 10,
    skill: "mongodb",
    skillImg: mongodbImg,
    alt: "mongodb-image",
    skillBar: 3,
  },
  {
    id: 11,
    skill: "reactjs",
    skillImg: reactjsImg,
    alt: "reactjs-image",
    skillBar: 4,
  },
];

const timeline_data = [
  {
    title: "React Developer at Technoarch Softwares",
    date: "Jan'19 - Jun'19",
    body: "",
    category: {
      tag: "INTERNSHIP",
      color: "pink",
    },
  },
  {
    title: "Graduated B.Tech. in Computer Science",
    date: "Jul'19",
    body: "",
    category: {
      tag: "EDUCATION",
      color: "#62cd62",
    },
  },
  {
    title: "Python Developer at Techahead corp.",
    date: "Aug'19 - Dec'19",
    body: "",
    category: {
      tag: "INTERNSHIP",
      color: "pink",
    },
  },
  {
    title: "Master's of Internetworking at Dalhousie University",
    date: "Jan'20 - Jul'21",
    body: "",
    category: {
      tag: "EDUCATION",
      color: "#62cd62",
    },
  },
];

export { about_me_content, project_data, skills, timeline_data };
