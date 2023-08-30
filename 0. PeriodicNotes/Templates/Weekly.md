> Arrange weekly tasks

%%Arrange tasks from the "First Things Dimension" and the "Role Dimension" respectively%%

# Task
## First Things Dimension
%%A list of projects experienced during this week, extracted from this week's diary, with automatic statistics on the percentage of time spent on projects%%
```PeriodicPARA
ProjectListByTime
```

## Role Dimension
### Employee
- OKR
<%* let weekNum = Number(tp.file.title.match(/-W(\d\d)/)[1]); if (weekNum%2 !== 0) { -%>
- #work/one-one 
	- [ ] #work/one-one with xxx
<%* } -%>

### Husband
### Father
### Son
### Myself
- [ ] Planning for the next week

# Review
## Collected this week
%%List of tasks collected this week from this week's diary%%
```PeriodicPARA
TaskRecordListByTime
```

## Completed this week
%%List of tasks completed this week, extracted from all notes%%
```PeriodicPARA
TaskDoneListByTime
```
