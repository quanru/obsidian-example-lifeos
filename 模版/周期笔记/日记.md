# <% tp.file.title %>

## 项目列表
%%项目的今日快照%%
<% PeriodicPARA.Project.snapshot() %>

## 日常记录
- %%你的记录%%

## 习惯打卡
%%打卡不会被统计为任务%%
- [ ] 起床一杯水
- [ ] 早餐
- 喝水
	- [ ] +1
	- [ ] +1
	- [ ] +1
	- [ ] +1
	- [ ] +1
	- [ ] +1
- [ ] 原味英语
- [ ] 项目耗时统计
<%* let weekDay = moment(tp.file.title).weekday(); console.log(weekDay); if (weekDay + 1 <= 5) { -%>
- 休息一下
	- [ ] +1
	- [ ] +1
	- [ ] +1
- 站立式办公
	- [ ] +1
	- [ ] +1
	- [ ] +1
	- [ ] +1
	<%* } else { -%>
- [ ] 记账 
<%* } -%>

## 精力分配
%%今日的项目列表，根据耗时情况，自动统计项目耗时占比%%
```PeriodicPARA
ProjectListByTime
```

## 今日完成
%%今日完成的任务列表，从所有的笔记中提取%%
```PeriodicPARA
TaskDoneListByTime
```
