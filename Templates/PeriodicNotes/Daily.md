# <% tp.file.title %>

## 项目列表
<% PeriodicPARA.File.list('1. Projects') %>

## 日常记录

## 习惯打卡
- 不积跬步，无以至千里！
	- [ ] 起床一杯水
	- [ ] 早餐
	-  喝水
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
```periodic-para
ProjectListByTime
```

## 今日完成
```periodic-para
TaskDoneListByTime
```
