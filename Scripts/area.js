class Area {
  list() {
    const folder = app.vault.getAbstractFileByPath('2. Areas');
    const areas = folder.children
      .sort()
      .filter((area) => area.extension !== 'md')
      .map((area, index) => {
        return `${index + 1}. [[${area.path}/README|${area.name}]]`;
      });

    return areas.join('\n');
  }

  async filter(condition, scope) {
    const { year } = condition;
    const quarterList = ['Q1', 'Q2', 'Q3', 'Q4'];
    let areaList = [];
    const tasks = [];

    for (let index = 0; index < quarterList.length; index++) {
      const quarter = quarterList[index];
      const file = app.vault.getAbstractFileByPath(
        `PeriodicNotes/${year}/${year}-${quarter}.md`
      );

      if (file) {
        tasks.push(async () => {
          const fileContent = await app.vault.read(file);
          const areaContent = fileContent
            .match(new RegExp(`${scope[0]}\(\[\\s\\S\]\*\)${scope[1]}`))[1]
            ?.split('\n');
          areaContent.map((area) => {
            if (!area) {
              return;
            }

            let realArea = (area.match(/\[\[(.*)\|?(.*)\]\]/) ||
              [])[1]?.replace(/\|.*/, '');
            if (realArea && !areaList.includes(realArea)) {
              areaList.push(realArea);
            }
          });
        });
      }
    }

    await Promise.all(tasks.map((task) => task()));

    return areaList;
  }
}
