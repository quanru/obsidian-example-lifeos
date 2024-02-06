> Arrange monthly tasks

%%Arrange tasks from the "First Things Dimension" and the "Role Dimension" respectively%%

# Task

## First Things Dimension
%%A list of projects experienced during this month, extracted from this month's diary, with automatic statistics on the percentage of time spent on projects%%
```PeriodicPARA
ProjectListByTime
```

## Role Dimension
### Employee
<%* let current = PeriodicPARA.Date.parse(app.workspace.getActiveFile().path); if (current.month%2 === 0) { -%>
- #work/one-one 
	- [ ] Fill in bimonthly #work/trivia 📅  <% PeriodicPARA.Date.lastDay(current).month %>
<%* } -%>
- OKR
### Husband
### Father
- [ ] Buy a small gift #family/baby 
### Son
- [ ] One phone call with #family/dad
- [ ] One phone call with #family/mom
### Myself
- [ ] Planning for the next month

# Review
## Collected this month
%%List of tasks collected this month from this month's diary%%
```PeriodicPARA
TaskRecordListByTime
```

## Completed this month
%%List of tasks completed this month, extracted from all notes%%
```PeriodicPARA
TaskDoneListByTime
```
