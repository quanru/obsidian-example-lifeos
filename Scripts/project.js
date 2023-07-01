class Project {
  list() {
    const folder = app.vault.getAbstractFileByPath('1. Projects');
    const projects = folder.children
      .sort()
      .filter((project) => project.extension !== 'md')
      .map((project, index) => {
        return `${index + 1}. [[${project.path}/README|${project.name}]]`;
      });

    return projects.join('\n');
  }

  timeAdd(timeString1, timeString2) {
    if (!timeString1) {
      return timeString2;
    }

    if (!timeString2) {
      return timeString1;
    }

    const reg = /(\d+)hr(\d+)?/;
    const [, hr1 = 0, min1 = 0] = timeString1.match(reg) || [];
    const [, hr2 = 0, min2 = 0] = timeString2.match(reg) || [];
    let carry = 0;
    let hr = Number(hr1) + Number(hr2);
    let min = Number(min1) + Number(min2);

    if (min >= 60) {
      carry = Number((min / 60).toFixed(0));
      min = min % 60;
    }

    return `${hr + carry}hr${min}`;
  }

  timePercent(timeString1, timeString2) {
    if (!timeString1) {
      return '';
    }

    if (!timeString2) {
      return '';
    }

    const reg = /(\d+)hr(\d+)?/;
    const [, hr1 = 0, min1 = 0] = timeString1.match(reg) || [];
    const [, hr2 = 0, min2 = 0] = timeString2.match(reg) || [];
    const time1 = Number(hr1) * 60 + Number(min1);
    const time2 = Number(hr2) * 60 + Number(min2);

    return ((time1 / time2) * 100).toFixed(2) + '%';
  }

  async filter(condition, scope) {
    const { from, to } = condition;
    const timeReg = /\d+hr(\d+)?/;
    let day = from;
    let projectList = [];
    const projectTimeConsume = {};
    let totalTime = '';
    const tasks = [];

    while (true) {
      const momentDay = moment(day);
      const file = app.vault.getAbstractFileByPath(
        `PeriodicNotes/${momentDay.year()}/Daily/${String(
          momentDay.month() + 1
        ).padStart(2, 0)}/${momentDay.format('YYYY-MM-DD')}.md`
      );

      if (file) {
        let todayTotalTime = 0;
        tasks.push(async () => {
          const fileContent = await app.vault.read(file);
          const projectContent = fileContent
            .match(new RegExp(`${scope[0]}\(\[\\s\\S\]\*\)${scope[1]}`))[1]
            ?.split('\n');

          projectContent.map((project) => {
            if (!project) {
              return;
            }

            if (project.match(timeReg)) {
              // 特殊处理总耗时
              todayTotalTime = project;
            }

            let realProject = (project.match(/\[\[(.*)\|?(.*)\]\]/) ||
              [])[1]?.replace(/\|.*/, '');

            if (!realProject) {
              return;
            }

            let [projectTime = ''] = project.match(timeReg) || [];

            todayTotalTime = todayTotalTime;

            projectTimeConsume[realProject] = this.timeAdd(
              projectTimeConsume[realProject],
              projectTime
            );

            if (!projectList.includes(realProject)) {
              projectList.push(realProject);
            }
          });

          totalTime = this.timeAdd(totalTime, todayTotalTime);
        });
      }

      if (day === to) {
        break;
      }

      day = momentDay.add(1, 'day').format('YYYY-MM-DD');
    }

    await Promise.all(tasks.map((task) => task()));
    Object.keys(projectTimeConsume).map((project) => {
      projectTimeConsume[project] = projectTimeConsume[project]
        ? `${projectTimeConsume[project]}/${totalTime}=${this.timePercent(
            projectTimeConsume[project],
            totalTime
          )}`
        : '';
    });

    return {
      projectList,
      projectTimeConsume,
      totalTime,
    };
  }
}
