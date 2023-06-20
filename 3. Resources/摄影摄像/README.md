# README

## 任务
```tasks
tags includes #摄影摄像 
```

## 列表
```dataview
TABLE WITHOUT ID rows.L.text AS "Text", rows.file.link AS "File"
FROM #摄影摄像
FLATTEN file.lists AS L
WHERE contains(L.tags, "#摄影摄像") AND !L.task
GROUP BY file.link
SORT rows.file.link DESC
```