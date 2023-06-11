// gitprofile.config.js

const config = {
  github: {
    username: 'jbheuschen', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'julian-benedikt-heuschen',
    twitter: 'jbheuschen',
    mastodon: '',
    facebook: '',
    instagram: 'jbheuschen',
    dribbble: '',
    behance: '',
    medium: 'jbheuschen',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://jbheuschen.me',
    phone: '',
    email: 'contact@jbheuschen.me',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'Node.js',
    'Remix.run',
    'MySQL',
    'Git',
    'Docker',
    'Tailwind',
    'Swift',
    'Java Spring',
    'Linux Administration',
  ],
  experiences: [
    {
      company: 'main Incubator GmbH',
      position: 'Intern',
      from: 'January 2020',
      to: 'February 2021',
      companyLink: 'https://main-incubator.com',
    },
    {
      company: 'Neosfer GmbH',
      position: 'Intern',
      from: 'June 2022',
      to: 'July 2022',
      companyLink: 'https://neosfer.de',
    },
    {
      company: 'Stiftung Polytechnische Gesellschaft',
      position: 'Volunteer Mentor',
      from: 'September 2021',
      to: 'July 2023',
      companyLink: 'https://digitechnikum.de',
    },
    {
      company: 'BMW Bank GmbH',
      position: 'Co-OP Computer Science / Business Administration',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://bmwbank.de',
    },
  ],
  certifications: [
    {
      name: 'Apple Inc., WWDC 2020 Scholarship',
      body: 'Winner of the 2020 WWDC Scholarship',
      year: 'May 2020',
      link: 'https://developer.apple.com/wwdc20/swift-student-challenge/'
    },
    {
      name: 'Stiftung Polytechnische Gesellschaft, Digitechnikum',
      body: 'Scholar of the Digitechnikum Scholarship by Stiftung Polytechnische Gesellschaft',
      year: 'September 2020',
      link: 'https://digitechnikum.de'
    },
    {
      name: 'Apple Inc., Swift Student Challenge 2021',
      body: 'Winner of the 2021 Swift Student Challenge',
      year: 'May 2021',
      link: 'https://developer.apple.com/wwdc21/swift-student-challenge/'
    },
  ],
  education: [
    {
      institution: 'Heinrich-von-Gagern-Gymnasium',
      degree: 'Allgemeine Hochschulreife (A levels)',
      from: '2015',
      to: '2023',
    },
    {
      institution: 'Duale Hochschule Badem-Württemberg',
      degree: 'Bachelor of Science',
      from: '2023',
      to: '2025',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    /*{
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },*/
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'jbheuschen', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'bumblebee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
