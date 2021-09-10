export const experiences = {
  2021: [
    {
      name: "Full Stack Software Engineer",
      companyIconPath: "/opal.png",
      companyName: "Opal",
      term: "SUMMER",
      location: "Remote",
      points: [
        "Contributed full stack features to application in React (TypeScript), Golang GraphQL API (using Gin), and PostgreSQL",
        "Created a tool for admins to securely impersonate their users to monitor and amend resource access",
        "Incorporated infinite scrolling to user interface tables for seamless data display and decreased API latency",
        "Implemented PDF and CSV file generation for clients to review user access and streamline data extraction"
      ]
    }
  ],
  2020: [
    {
      name: "Software Engineer",
      companyIconPath: "/epoch-logo.png",
      companyName: "EPOCH",
      term: "FALL",
      location: "Remote",
      points: [
        "Led engineering team at startup for web application in React, Flask GraphQL API, and PostgreSQL",
        "Created Zoom integration for users to generate meeting rooms when creating virtual events",
        "Implemented employee management system for admins to maintain employee list and integrate with their HRIS",
        "Joined customer meetings to provide technical insight and discuss prospective features and integrations"
      ]
    },
    {
      name: "Software Engineer",
      companyIconPath: "/data-world-logo.png",
      companyName: "data.world",
      term: "WINTER",
      location: "Austin, TX",
      points: [
        "Created a React component to display interactive SQL queries and results on dataset overview pages",
        "Implemented solution for hidden datasets bug where deleted datasets were failing to unlink from projects",
        "Remodelled sidebar component to improve design and add CRUD functionality to data items",
      ]
    }
  ],
  2019: [
    {
      name: "Software Engineer",
      companyIconPath: "ibm-logo.png",
      companyName: "IBM",
      term: "SUMMER",
      location: "Toronto, ON",
      points: [
        "Developed full stack features on client success team in React (TypeScript), Redux, C# REST API, and MySQL",
        "Built a feature allowing foreign clients to localize workspaces and remove reliance on browser translations",
        "Implemented a workspace user permission system and enforced this through the API",
        "Optimized database queries through the ORM to reduce latency of data retrieval at multiple endpoints by up to 15%"
      ]
    }
  ],
  2018: [
    {
      name: "Software Engineer",
      companyIconPath: "sony-logo.png",
      companyName: "Sony",
      term: "FALL",
      location: "Waterloo, ON",
      points: [
        "Developed plug in for Visual Exchange application in C++ to allow operation by an external control surface",
        "Added Ci Media Cloud integration and created internal python library for utilizing the video review functionality",
        "Implemented inactivity detector for Discussion Capture to shut down hardware to preserve battery life",
      ]
    },
    {
      name: "Software Engineer",
      companyName: "ESI",
      term: "WINTER",
      location: "Markham, ON",
      points: [
        "Added C++ algorithm to calibrate joystick input values to stabilize robot mobility and mitigate error",
        "Interpolated IR sensor readings with MATLAB to create a location prediction algorithm for the robot",
        "Developed idle detection, sleep, and wake up functionality to prolong battery life of controller",
      ]
    }
  ],
}

export const projects = [
  {
    projectName: "speakeezy",
    projectPoints: [
      "Next.js and Supabase application for enhancing vocabulary through word repitition and usage",
      "Currently adding new games/challenges and more word difficulties to accommodate new english speakers",
    ],
    applicationUrl: "https://vercel.speakeezy.app/",
    githubUrl: "https://github.com/andrewmouch/speakeezy"
  },
  {
    projectName: "grape",
    projectPoints: [
      "Early contributor to MERN stack application for creating interactive and structured programming tutorials and documentation",
    ],
    applicationUrl: "https://www.grape.codes/"

  },
  {
    projectName: "next-tailwind-typescript",
    projectPoints: [
      "Simple project allowing developers to boot up a Next.js client equipped with tailwind and typescript (100+ npm downloads)",
    ],
    applicationUrl: "https://www.npmjs.com/package/next-tailwind-typescript/"
  }
]