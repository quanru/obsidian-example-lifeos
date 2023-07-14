> 安排周度任务

%%分别从要事维度和角色维度安排任务%%

# 任务
## 要事维度
%%本周经历的项目列表，从本周的日记中提取，并自动统计项目耗时占比%%
```PeriodicPARA
ProjectListByTime
```

## 角色维度
### 职员
- OKR
<%* let weekNum = Number(tp.file.title.match(/-W(\d\d)/)[1]); if (weekNum%2 !== 0) { -%>
- #工作/one-one 
	- [ ] 与 xxx #工作/one-one
<%* } -%>

### 丈夫
### 父亲
### 儿子
### 自己
- [ ] 规划下一周

# 复盘
## 本周收集
%%本周收集的任务列表，从本周的日记中提取%%
```PeriodicPARA
TaskRecordListByTime
```

## 本周完成
%%本周完成的任务列表，从所有的笔记中提取%%
```PeriodicPARA
TaskDoneListByTime
```
