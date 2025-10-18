// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "projects-unity-tutorials",
          title: 'Unity Tutorials',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kodeco/";
            },},{id: "projects-firefly",
          title: 'FireFly',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/firefly/";
            },},{id: "projects-mr-haptics-interface",
          title: 'MR Haptics Interface',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mrfluid/";
            },},{id: "talks-augmented-reality-for-mobile",
          title: 'Augmented Reality for Mobile',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/fossasia/";
            },},{id: "talks-augmented-reality-using-python",
          title: 'Augmented Reality using Python',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/augpy/";
            },},{id: "teaching-cs420-computer-graphics",
          title: 'CS420: Computer Graphics',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/usc_csci420/";
            },},{id: "teaching-csci526-advanced-mobile-devices-amp-games",
          title: 'CSCI526: Advanced Mobile Devices &amp;amp; Games',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/usc_csci526/";
            },},{id: "teaching-cs4971-capstone-practicum",
          title: 'CS4971: Capstone Practicum',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/uva_cs4971/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/itssmutnuri", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/SrikarMutnuri", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xSR52NUAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://biocomplexity.virginia.edu/our-team/srikar-mutnuri", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/itsmutnuri", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
