const { Task, Date } = customJS;
const parsed = Date.parse(dv.current().file.name);
const condition = Date.days(parsed);

// 收集日期范围内的日记文件
dv.taskList(
  dv.pages('')?.file?.tasks.where((task) =>
    Task.filter(task, {
      date: 'RECORD',
      ...condition,
    })
  ),
  false
);

// 收集日期范围内的非日记文件
const files = Date.files(parsed);
const pages = Object.values(files).flat();

if (pages.length) {
  dv.taskList(
    dv.pages(`"${pages.join('" or "')}"`)?.file?.tasks.where((task) => task),
    false
  );
}
