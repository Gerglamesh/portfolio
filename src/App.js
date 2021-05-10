import "./App.css";
import Components from "./components/index";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Components.Home />
          <Components.Work />
          <Components.About />
          <Components.Timeline />
          <Components.Skills skillGroups={skills} />
        </div>
      </div>
    </div>
  );
}

export default App;

const skills = [
  {
    groupHeader: "Languages",
    skills: [
      { name: "C#", value: 90, color: 1 },
      { name: "JavaScript", value: 75, color: 1 },
      { name: "VBA", value: 75, color: 1 },
      { name: "T-SQL", value: 70, color: 1 },
      { name: "HTML", value: 75, color: 1 },
      { name: "CSS", value: 70, color: 1 },
    ],
  },
  {
    groupHeader: "Frameworks and libraries",
    skills: [
      { name: ".Net", value: 90, color: 2 },
      { name: "React", value: 70, color: 2 },
      { name: "Redux", value: 65, color: 2 },
      { name: "Entity Framework", value: 75, color: 2 },
      { name: "GraphQL", value: 70, color: 2 },
      { name: "Blazor / Razor", value: 60, color: 2 },
      { name: "Mongoose", value: 70, color: 2 },
      { name: "Node.js", value: 60, color: 2 },
    ],
  },
  {
    groupHeader: "Database",
    skills: [
      { name: "SQL", value: 80, color: 3 },
      { name: "MongoDB", value: 75, color: 3 },
    ],
  },
  {
    groupHeader: "Cloud and microservices",
    skills: [
      { name: "Azure Cloud Services", value: 70, color: 4 },
      { name: "Azure DevOps", value: 70, color: 4 },
      { name: "Microservices", value: 70, color: 4 },
      { name: "Docker", value: 75, color: 4 },
    ],
  },
  {
    groupHeader: "Tools",
    skills: [
      { name: "Postman", value: 70, color: 5 },
      { name: "Jira", value: 80, color: 5 },
      { name: "Confluence", value: 75, color: 5 },
      { name: "GitHub", value: 90, color: 5 },
      { name: "Git Bash/Git Desktop", value: 90, color: 5 },
      { name: "Umbraco (CMS)", value: 40, color: 5 },
    ],
  },
  {
    groupHeader: "Software development strategies",
    skills: [
      { name: "CI/CD", value: 70, color: 6 },
      { name: "TDD", value: 65, color: 6 },
      { name: "Mob-Programming", value: 90, color: 6 },
      { name: "Agile", value: 90, color: 6 },
      { name: "Scrum", value: 80, color: 6 },
    ],
  },
];
