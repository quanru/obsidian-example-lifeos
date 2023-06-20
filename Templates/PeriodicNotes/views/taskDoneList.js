const { Task, Date } = customJS;
const condition = Date.days(Date.parse(dv.current().file.name));

dv.taskList(
  dv
    .pages('')
    ?.file?.tasks.where((task) =>
      Task.filter(task, {
        date: 'DONE',
        ...condition,
      })
    )
    .sort((t) => t.completion, 'asc'),
  false
);
