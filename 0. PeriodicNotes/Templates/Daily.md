## Project List
%%A snapshot of the project today%%
<% PeriodicPARA.Project.snapshot() %>

## Daily Record
- %%Your Record%%

## Habit
%%Habit will not be counted as a task%%
- [ ] Drink a glass of water after wake up
- [ ] Breakfast
- Drink water
	- [ ] +1
	- [ ] +1
	- [ ] +1
	- [ ] +1
	- [ ] +1
	- [ ] +1
- [ ] English learning course
- [ ] Project time statistics
<%* let weekDay = moment(tp.file.title).weekday(); console.log(weekDay); if (weekDay + 1 <= 5) { -%>
- Take a break
	- [ ] +1
	- [ ] +1
	- [ ] +1
- Stand up
	- [ ] +1
	- [ ] +1
	- [ ] +1
	- [ ] +1
	<%* } else { -%>
- [ ] Household accounting
<%* } -%>

## Energy allocation
%%Today's project list, according to the time consumed, automatic statistics project time consumed percentage%%
```PeriodicPARA
ProjectListByTime
```

## Completed today
%%List of tasks completed today, extracted from all notes%%
```PeriodicPARA
TaskDoneListByTime
```
