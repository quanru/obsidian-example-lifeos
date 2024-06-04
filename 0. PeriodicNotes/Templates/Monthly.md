> Arrange monthly tasks

%%Arrange tasks from the "Priority First Dimension" and the "Role Dimension" respectively%%

# Task

## Priority First Dimension
%%A list of projects experienced during this month, extracted from this month's diary, with automatic statistics on the percentage of time spent on projects%%
```LifeOS
ProjectListByTime
```

## Role Dimension
### Employee
%% As an employee, how do you disassemble this month's tasks for this quarter's goals? %%
<%* let current = LifeOS.Date.parse(app.workspace.getActiveFile().path); if (current.month%2 === 0) { -%>
- [ ] Fill in bimonthly #work/trivia 📅 <% LifeOS.Date.lastDay(current).month %>
<%* } -%>
- OKR
### Husband
### Father
- [ ] Buy a small gift #family/baby 
### Son
- [ ] One phone call with #family/dad
- [ ] One phone call with #family/mom
### Myself
- Planning for the next month

# Review
## Collected this month
%%List of tasks collected this month from this month's diary%%
```LifeOS
TaskRecordListByTime
```

## Completed this month
%%List of tasks completed this month, extracted from all notes%%
```LifeOS
TaskDoneListByTime
```
