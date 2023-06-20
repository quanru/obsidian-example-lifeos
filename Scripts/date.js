// app.workspace.getActiveFile().basename not working in referenced block
class Date {
  parse(fileName = app.workspace.getActiveFile().basename) {
    const [[, year], [, quarter], [, month], [, week], [, day]] = [
      fileName.match(/(^\d{4})/) || [], // year
      fileName.match(/^\d{4}-Q(\d{1})/) || [], // quarter
      fileName.match(/^\d{4}-(\d{2})/) || [], // month
      fileName.match(/^\d{4}-W(\d{2})/) || [], // week
      fileName.match(/^\d{4}-\d{2}-(\d{2})/) || [], // day
    ];

    return {
      year: Number.isNaN(Number(year)) ? null : Number(year),
      month: Number.isNaN(Number(month)) ? null : Number(month),
      quarter: Number.isNaN(Number(quarter)) ? null : Number(quarter),
      week: Number.isNaN(Number(week)) ? null : Number(week),
      day: Number.isNaN(Number(day)) ? null : Number(day),
    };
  }

  lastDay(parsed) {
    const { year, quarter, month, week } = parsed;

    return {
      year: year ? moment().year(year).endOf('year').format('YYYY-MM-DD') : '',
      quarter: quarter
        ? moment()
            .year(year)
            .quarter(quarter)
            .endOf('quarter')
            .format('YYYY-MM-DD')
        : '',
      month: month
        ? moment()
            .year(year)
            .month(month - 1)
            .endOf('month')
            .format('YYYY-MM-DD')
        : '',
      week: week
        ? moment().year(year).week(week).endOf('week').format('YYYY-MM-DD')
        : '',
    };
  }

  days(parsed) {
    // parse 之后，从 day 开始，依次判断周、月、季、年，给出 from 和 to
    const { year, quarter, month, week, day } = parsed;

    if (day) {
      const today = `${year}-${String(month).padStart(2, 0)}-${String(
        day
      ).padStart(2, 0)}`;

      return {
        from: today,
        to: today,
      };
    }

    if (week) {
      const from = moment()
        .year(year)
        .week(week)
        .startOf('week')
        .format('YYYY-MM-DD');
      const to = moment()
        .year(year)
        .week(week)
        .endOf('week')
        .format('YYYY-MM-DD');

      return {
        from,
        to,
      };
    }

    if (month) {
      const from = moment()
        .year(year)
        .month(month - 1)
        .startOf('month')
        .format('YYYY-MM-DD');
      const to = moment()
        .year(year)
        .month(month - 1)
        .endOf('month')
        .format('YYYY-MM-DD');

      return {
        from,
        to,
      };
    }

    if (quarter) {
      const from = moment()
        .year(year)
        .quarter(quarter)
        .startOf('quarter')
        .format('YYYY-MM-DD');
      const to = moment()
        .year(year)
        .quarter(quarter)
        .endOf('quarter')
        .format('YYYY-MM-DD');

      return {
        from,
        to,
      };
    }

    if (year) {
      const from = moment().year(year).startOf('year').format('YYYY-MM-DD');
      const to = moment().year(year).endOf('year').format('YYYY-MM-DD');

      return {
        from,
        to,
      };
    }
  }

  files(parsed) {
    // 获取指定日期范围内的 weeks，quarters 和 months，并去重
    const { from, to } = this.days(parsed);
    const weeks = new Set();
    const months = new Set();
    const quarters = new Set();

    let currentDate = moment(from).clone();
    while (currentDate.isBefore(moment(to))) {
      weeks.add(
        `PeriodicNotes/${currentDate.weekYear()}/Weekly/${currentDate.weekYear()}-W${String(
          currentDate.isoWeek()
        ).padStart(2, 0)}.md`
      );
      months.add(
        `PeriodicNotes/${currentDate.year()}/Monthly/${currentDate.year()}-${String(
          currentDate.month() + 1
        ).padStart(2, 0)}.md`
      );
      quarters.add(
        `PeriodicNotes/${currentDate.year()}/Quarterly/${currentDate.year()}-Q${Math.ceil(
          (currentDate.month() + 1) / 3
        )}.md`
      );

      currentDate.add(1, 'day');
    }

    // TODO: 是否加上当前文件？
    return {
      weeks: parsed.month ? Array.from(weeks) : [],
      months: parsed.quarter ? Array.from(months) : [],
      quarters:
        parsed.year && !parsed.month && !parsed.quarter && !parsed.week
          ? Array.from(quarters)
          : [],
    };
  }
}
