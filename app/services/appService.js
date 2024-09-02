const ITEMS = [
    { "id": 1, "imageName": "dot-net_200x200.svg", "alt": "dot net", "pos": 1 },
    { "id": 2, "imageName": "csharp_200x200.svg", "alt": "csharp", "pos": 2 },
    { "id": 3, "imageName": "javascript_200x200.svg", "alt": "javascript", "pos": 3 },
    { "id": 4, "imageName": "sql-server_200x200.svg", "alt": "sql server", "pos": 4 },
    { "id": 5, "imageName": "react_200x200.svg", "alt": "react", "pos": 5 },
    { "id": 6, "imageName": "angularjs_200x200.svg", "alt": "angularjs", "pos": 6 },
    { "id": 7, "imageName": "css_200x200.svg", "alt": "css", "pos": 7 },
    { "id": 8, "imageName": "ux-ui_200x200.svg", "alt": "ux ui", "pos": 8 },
    { "id": 9, "imageName": "azure-devops_200x200.svg", "alt": "azure devops", "pos": 9 }
];

const MODAL_CONTENT = [
    { "id": 1, "itemId": 1, "title": ".NET", "body": [
        "Experienced .NET developer with a broad range of expertise across the .NET ecosystem.",
        "Proficient in building web applications with ASP.NET and .NET Core (3.1 and 5), with a proven track record of successfully migrating existing applications to newer frameworks.",
        "Additionally, I have experience with desktop application development using WPF and WinForms, and a strong foundation in the .NET Framework.",
        "Well-equipped to tackle a wide range of projects and technologies, from legacy applications to modern .NET Core solutions."
    ]},
    { "id": 2, "itemId": 2, "title": "C#", "body": [
        "Proficient C# developer with a strong grasp of the language fundamentals and a proven ability to write clean, efficient and well-structured code.",
        "Skilled in leveraging C# to build robust and scalable applications with a focus on readability and maintainability."
    ]},
    { "id": 3, "itemId": 3, "title": "Javascript", "body": [
        "Skilled in JavaScript with a solid understanding of the language and its ecosystem.",
        "Proficient in using JavaScript to build dynamic and interactive web applications, with experience in front-end development.",
        "Familiar with popular frameworks and libraries, and able to leverage JavaScript to create efficient, scalable, and maintainable solutions.",
        "Skilled in writing efficient, maintainable, and cross-browser compatible code."
    ]},
    { "id": 4, "itemId": 4, "title": "Sql Server", "body": [
        "Highly experienced SQL Server professional with over 10 years of hands-on experience in database development, administration, and optimization.",
        "Skilled in troubleshooting and resolving performance issues with complex queries, with a strong understanding of indexing, query optimization, and database tuning.",
        "Completed advanced training in SQL Performance Tuning and Optimizing SQL Databases, and possess a solid foundation in database administration principles.",
        "Proven ability to analyze and optimize database performance, ensuring efficient and scalable database solutions."
    ]},
    { "id": 5, "itemId": 5, "title": "React", "body": [
        "Experienced React developer with a proven track record of building scalable and interactive web applications.",
        "Successfully developed a React app with a C# backend, utilizing SignalR for real-time communication and state management with Redux and Thunk.",
        "Demonstrated ability to design and implement efficient reducers and state management systems. After a brief hiatus, successfully re-engaged with React and adapted to new developments in the ecosystem, showcasing ability to learn and adapt to evolving technologies."
    ]},
    { "id": 6, "itemId": 6, "title": "AngularJS", "body": [
        "Experienced AngularJS developer with hands-on experience integrating AngularJS modules and factories into existing .NET web applications.",
        "Skilled in creating custom modules and factories to extend application functionality, with a focus on seamless integration with .NET backend systems.",
        "Proficient in leveraging AngularJS to enhance web application performance, usability, and maintainability."
    ]},
    { "id": 7, "itemId": 7, "title": "CSS", "body": [
        "Highly proficient in CSS, with over 10 years of experience in styling and layout design for web applications.",
        "Skilled in writing efficient, maintainable, and cross-browser compatible CSS.",
        "Proven ability to troubleshoot and resolve complex CSS issues, ensuring seamless and consistent user experiences across various devices and browsers."
    ] },
    { "id": 8, "itemId": 8, "title": "UX UI", "body": [
        "User-centered developer with a passion for crafting intuitive and user-friendly applications.",
        "With a keen focus on delivering seamless user experiences, I prioritize designing and building interfaces that are both aesthetically clean and functionally intuitive.",
        "I strive to create applications that meet users' expectations, making it easy for them to navigate and achieve their goals.",
        "By combining technical expertise with a user-centric approach, I aim to deliver high-quality applications that delight and engage users."
    ] },
    { "id": 9, "itemId": 9, "title": "Azure DevOps", "body": [
        "Experienced Azure DevOps professional with a strong background in creating and managing build and release pipelines to streamline application delivery.",
        "Skilled in automating deployment processes and ensuring seamless integration with Azure services.",
        "Demonstrated ability to extend pipeline functionality, having developed a custom extension for transforming appsettings in a TFS 2017 environment.",
        "Additionally, experienced in administering Azure App Services and leveraging Application Insights to monitor application performance and troubleshoot issues, with a proven ability to drill into logs and identify root causes of bugs."
    ] }
];

export const fetchItemById = (id) => ITEMS.find(item => item.id === id);

export const fetchModelContentByItemId = (itemId) => MODAL_CONTENT.find(m => m.itemId === itemId);
