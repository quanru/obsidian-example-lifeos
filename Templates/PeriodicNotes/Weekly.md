> 安排周度任务

# 任务
## 要事维度
```dataviewjs
await dv.view("Templates/PeriodicNotes/views/projectList")
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
- 规划下一周

# 复盘
## 本周收集

```dataviewjs
await dv.view("Templates/PeriodicNotes/views/taskRecordList")
```

## 本周完成

```dataviewjs
await dv.view("Templates/PeriodicNotes/views/taskDoneList")
```