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
    { "id": 1, "itemId": 1, "title": ".NET", "body": "dot net" },
    { "id": 2, "itemId": 2, "title": "C#", "body": "csharp" },
    { "id": 3, "itemId": 3, "title": "Javascript", "body": "javascript" },
    { "id": 4, "itemId": 4, "title": "Sql Server", "body": "sql server" },
    { "id": 5, "itemId": 5, "title": "React", "body": "react" },
    { "id": 6, "itemId": 6, "title": "AngularJS", "body": "angularjs" },
    { "id": 7, "itemId": 7, "title": "CSS", "body": "css" },
    { "id": 8, "itemId": 8, "title": "UX UI", "body": "ux ui" },
    { "id": 9, "itemId": 9, "title": "Azure DevOps", "body": "azure devops" }
];

export const fetchItemById = (id) => ITEMS.find(item => item.id === id);

export const fetchModelContentByItemId = (itemId) => MODAL_CONTENT.find(m => m.itemId === itemId);
