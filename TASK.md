# TASK

## Focus
> Important || In progress || Due in 7 days || High priority
```tasks
folder includes PeriodicNotes
not done
(status.name includes Important) OR (status.name includes In Progress) OR (priority is high) OR (due before in 7 days)
group by due
```

## PARA
```tasks
(folder includes 1. Projects) OR (folder includes 2. Areas) OR (folder includes 3. Resources)
not done
group by folder
```

## PeriodicNotes
```tasks
folder includes PeriodicNotes
not done
no due date
no start date
sort by filename reverse
```

## Cancelled
```tasks
(folder includes PeriodicNotes) OR (folder includes 1. Projects)
status.name includes Cancelled
group by folder
```

