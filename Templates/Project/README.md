# README

- `#` 截止日期 📅 2023-xx-xx
- `#` 结果描述

## 任务
```tasks
tags includes #项目标签
```

## 列表
```dataview
TABLE WITHOUT ID rows.L.text AS "Text", rows.file.link AS "File"
FROM #项目标签
FLATTEN file.lists AS L
WHERE contains(L.tags, "#项目标签") AND !L.task
GROUP BY file.link
SORT rows.file.link DESC
```