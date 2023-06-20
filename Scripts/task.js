class Task {
  filter(task, condition) {
    const DATE_TYPE = {
      DONE: 'DONE',
      RECORD: 'RECORD',
    };

    const { date = DATE_TYPE.DONE, from, to } = condition;

    if (!task) return false;

    if (!from && !to) return false;

    if (task?.header?.subpath?.includes('习惯打卡')) return false;

    let dateText = '';

    if (date === DATE_TYPE.DONE) {
      // filter by done date
      const ret = task?.text.match(/✅ (\d\d\d\d-\d\d-\d\d)/);

      if (!ret) return false;
      dateText = ret[1];
    } else if (date === DATE_TYPE.RECORD) {
      // filter by record date
      const ret = task?.path.match(/\d\d\d\d-\d\d-\d\d/);

      if (!ret) return false;

      dateText = ret[0];
    }

    const targetDate = moment(dateText);

    if (!targetDate) return false;

    const isFromFullfil = from ? targetDate.isSameOrAfter(moment(from)) : true;
    const isToFullfil = to ? targetDate.isSameOrBefore(moment(to)) : true;

    const isFullfil =
      task.subtasks
        .map((subtask) => this.filter(subtask, condition))
        .includes(true) ||
      (task.text.length > 1 &&
        ((date === DATE_TYPE.DONE && task.completed) ||
          date === DATE_TYPE.RECORD) &&
        isFromFullfil &&
        isToFullfil);

    return isFullfil;
  }
}
