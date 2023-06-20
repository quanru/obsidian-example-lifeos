
# README
## 知识管理的目标
- 手段：建立 PARA + ZK 体系，储备知识以打造第二个大脑
- 目的：聚焦项目和领域，完成年度目标

## 任务
```tasks
tags includes #知识管理
```

## 列表
```dataview
TABLE WITHOUT ID rows.L.text AS "Text", rows.file.link AS "File"
FROM #知识管理
FLATTEN file.lists AS L
WHERE contains(L.tags, "#知识管理") AND !L.task
GROUP BY file.link
SORT rows.file.link DESC
```
