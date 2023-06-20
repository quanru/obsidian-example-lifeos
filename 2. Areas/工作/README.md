# README

## 任务
```tasks
(tags includes #工作) OR (tags includes #同事)
```

## 列表
```dataview
TABLE WITHOUT ID rows.L.text AS "Text", rows.file.link AS "File"
FROM #工作 OR #同事
FLATTEN file.lists AS L
WHERE (contains(L.tags, "#工作")) OR (contains(L.tags, "#同事")) AND !L.task
GROUP BY file.link
SORT rows.file.link DESC
```
