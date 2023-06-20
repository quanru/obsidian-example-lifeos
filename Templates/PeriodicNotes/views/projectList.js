const { Project, Date } = customJS;
const condition = Date.days(Date.parse(dv.current().file.name));
const scope = ['## 项目列表', '## 日常记录'];

Project.filter(condition, scope).then(
  ({ projectList, projectTimeConsume, totalTime }) => {
    projectList.map((project, index) => {
      dv.paragraph(
        `${index + 1}. [[${project}|${project.match(/\/(.*)\//)[1]}]] ${
          projectTimeConsume[project]
        }`
      );
    });
    dv.paragraph(`
${totalTime}
`);
  }
);
