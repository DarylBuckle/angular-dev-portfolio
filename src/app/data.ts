import { Profile } from './_Classes/profile';

export const PROFILE: Profile = {
  name: 'Joseph Bloggs',
  title: 'Web Developer',
  location: 'Anytown, Your County, United Kingdom',
  email: 'joe.bloggs@yourdomain.com',
  projects: [
    {
      name: 'My Website',
      owner: 'Joseph Bloggs',
      icon: ['fab' , 'angular'],
      url: 'https://darylbuckle.github.io/angular-dev-portfolio',
      image: '../assets/images/my-website-thumb.png',
      images: ['../assets/images/my-website-1.png', '../assets/images/my-website-2.png'],
      private: false,
      startdate: new Date(2020, 6, 1),
      current: true,
      skills: [
        { name: 'Angular', group: 'Front End' },
        { name: 'Bootstrap', group: 'Front End' },
        { name: 'GitHub Pages', group: 'Hosting' }
      ],
      info: '<p>This is my porfolio page. You are looking at it right now.</p>' +
      '<p>The page was created from <a href=\'https://www.github.com/DarylBuckle/angular-dev-portfolio\'>angular-dev-portfolio</a>.</p>'
    },
    {
      name: 'angular-tour-of-heroes',
      owner: 'Joseph Bloggs',
      icon: ['fab' , 'angular'],
      private: false,
      enddate: new Date(2020, 5, 1),
      skills: [
        { name: 'Angular', group: 'Skills' },
        { name: 'Front End Development', group: 'Skills' },
      ],
      info: '<p>This was a tutorial I did to learn Angular.</p>' +
      '<p>For more info visit <a href=\'https://angular.io/tutorial\'>https://angular.io/tutorial</a>.</p>'
    },
  ],
  roles: [
    {
      title: 'Web Software Developer',
      company: 'ABC Solutions',
      location: 'Anytown, Your County, United Kingdom',
      url: '',
      startdate: new Date(2018, 2, 1),
      current: true,
      positions: [
        {
          title: 'Web Software Developer',
          company: 'Halo Service Solutions',
          startdate: new Date(2019, 8, 1),
          current: true
        },
        {
          title: 'Junior Developer',
          company: 'Halo Service Solutions',
          startdate: new Date(2018, 2, 1),
          enddate: new Date(2019, 8, 1),
          current: false
        },
      ],
      info: '<p>I was employed as a Junior Developer and am now a Web Software Developer. I have worked on building several websites for a range of customers throughout my time at ABC.</p>' +
      'Role duties;' +
        '<ul>' +
          '<li>Helping with web design</li>' +
          '<li>Liasing with customers</li>' +
          '<li>Creating websites to customer specification</li>' +
          '<li>Training junior developers</li>' +
        '</ul>',
      projects: [
        {
          name: 'Project 1',
          owner: 'ABC Solutions',
          role: 'ABC Solutions',
          private: true,
          startdate: new Date(2019, 6, 1),
          enddate: new Date(2019, 8, 1),
          current: false,
          skills: [
            { name: 'HTML', group: 'Front End' },
            { name: 'CSS', group: 'Front End' },
            { name: 'Javascript', group: 'Front End' },
            { name: 'Wordpress', group: 'Front End' },
            { name: 'PHP', group: 'Back End' },
          ],
          info: '<p>This is an example of a project.</p>' +
          '<p>Details about this project will show here.</p>' +
          '<p>You can also show multiple images of the project above.</p>'
        },
        {
          name: 'Project 2',
          owner: 'ABC Solutions',
          role: 'ABC Solutions',
          private: true,
          startdate: new Date(2019, 6, 1),
          enddate: new Date(2019, 8, 1),
          current: false,
          skills: [
            { name: 'HTML', group: 'Front End' },
            { name: 'CSS', group: 'Front End' },
            { name: 'Javascript', group: 'Front End' },
            { name: 'Wordpress', group: 'Front End' },
            { name: 'PHP', group: 'Back End' },
          ],
          info: '<p>This is an example of a project.</p>' +
          '<p>Details about this project will show here.</p>' +
          '<p>You can also show multiple images of the project above.</p>'
        }
      ]
    },
    {
      title: 'Service Desk Engineer',
      company: 'XYZ Ltd',
      location: 'Anytown, Your County, United Kingdom',
      url: '',
      startdate: new Date(2016, 7, 1),
      enddate: new Date(2018, 2, 1),
      current: false,
      info: '<p>My first full time job after graduating from university. This role gave me my first professional experiences working in Software.</p>'
    },
    {
      title: 'Intern Software Developer',
      company: 'CBA Software',
      location: 'Anytown, Your County, United Kingdom',
      url: '',
      startdate: new Date(2015, 5, 1),
      enddate: new Date(2015, 7, 1),
      current: false,
      info: '<p>I interned at CBA Software whilst at University.</p>'
    }
  ],
  qualifications: [
    {
      name: 'Bachelor of Science in Computer Science',
      location: 'Your University',
      grade: 'First Class Honours',
      startdate: new Date (2013, 8, 1),
      enddate: new Date (2016, 7, 1),
      current: false,
      icon: ['fas' , 'graduation-cap'],
      info: '<p>You can enter more information about your qualifcation here.</p>'
    },
    {
      name: 'Example Qualification',
      location: 'ABC Solutions',
      enddate: new Date (2019, 11, 1),
      image: 'https://www.microsoft.com/en-us/CMSImages/lrn_mcc-MTA-Certification2x.png?version=6303ba51-6df0-6c10-fedd-3d21cd6672f4',
      info: '<p>You can enter more information about your qualifcation here.</p>'
    },
    {
      name: 'A Levels',
      location: 'Anytown High School',
      grade: '4 x A-C grades',
      startdate: new Date (2011, 8, 1),
      enddate: new Date (2013, 7, 1),
      icon: ['fas' , 'book-open'],
      info: '<p>You can enter more information about your qualifcation here.</p>'
    },
    {
      name: 'GCSEs',
      location: 'Anytown High School',
      grade: '10 x A-C grades',
      startdate: new Date (2009, 8, 1),
      enddate: new Date (2011, 7, 1),
      icon: ['fas' , 'book-open'],
      info: '<p>You can enter more information about your qualifcation here.</p>'
    },
  ],
  skills: [
    { name: 'Web Design', group: 'Key Skills', level: 90 },
    { name: 'Problem Solving', group: 'Key Skills', level: 90 },
    { name: 'Team Work', group: 'Key Skills', level: 80 },
    { name: 'Angular', group: 'Technologies', level: 60 },
    { name: 'JQuery', group: 'Technologies', level: 80 },
    { name: 'PHP', group: 'Technologies', level: 90 },
    { name: 'HTML', group: 'Technologies', level: 90 },
    { name: 'CSS', group: 'Technologies', level: 90 },
    { name: 'Javascript', group: 'Technologies', level: 90 },
    { name: 'Bootstrap', group: 'Technologies', level: 80 },
    { name: 'Wordpress', group: 'Technologies', level: 80 },
    { name: 'My SQL', group: 'Technologies', level: 70 },
    { name: 'Git', group: 'Technologies', level: 80 },
  ],
  linkedin: 'yourusernamegoeshere',
  facebook: 'yourusernamegoeshere',
  twitter: 'yourusernamegoeshere',
  instagram: 'yourusernamegoeshere',
  github: 'yourusernamegoeshere',
  stackoverflow: 'youruseridgoeshere',
  mailto: 'joe.bloggs@yourdomain.com?subject=Contact Request',
  about: '<p>Hi, I\'m Joe. As you might of guessed, I am not real.</p>' +
  '<p>If I was real, I\'d probably write a bit about my experiences as a Developer and about how I love Football, but alas, I am not.</p>' +
  '<p>This page serves as a way of showing an example of what angular-dev-portfolio looks like and what it can do. It\'s extremely easy to customise!</p>' +
  '<p>For more information please visit the Github repository at <a href=\'https://github.com/DarylBuckle/angular-dev-portfolio\'>https://github.com/DarylBuckle/angular-dev-portfolio</a>.</p>'
};
