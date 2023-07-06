> 安排月度任务

# 任务

## 要事维度
```periodic-para
ProjectList
```

## 角色维度
### 职员
<%* let monthNum = Number(tp.file.title.match(/-(\d\d)/)[1]); if (monthNum%2 === 0) { -%>
- #工作/one-one 
	- [ ] 双月刊填写 #工作/琐事 📅 <% customJS.Date.lastDay(customJS.Date.parse()).month %>
<%* } -%>
- OKR
### 丈夫
### 父亲
- 购买小礼物 #家人/宝宝 
### 儿子
- 与 #家人/爸爸 通话一次
- 与 #家人/妈妈 通话一次
### 自己
- 规划下一个月

# 复盘
## 本月收集

```periodic-para
TaskRecordList
```

## 本月完成

```periodic-para
TaskDoneList
```