---
title: Building my second brain 🧠 with Obsidian
toc: true
date: 2023-07-08 09:38:13
categories: PKM
tags:
  - LifeOS
  - PKM
  - Periodic-Note
  - Task-Management
  - Goal-Management
  - Time-Management
---

This article will take [Obsidian](https://obsidian.md/) 以此為例，分享我使用 Obsidian 建立第二大腦的實踐心得！

更多資訊請參考官方網站 [LifeOS](https://lifeos.vip)!

## Preface

### What is Obsidian?

以下是官方網站上的自我介紹：

- [Obsidian](https://obsidian.md/) 是一款私密且靈活的筆記應用程式，能夠適應你的思考方式。
- [Obsidian](https://obsidian.md/) 是一款私密且靈活的筆記應用程式，能夠配合你的思維方式。

我特別欣賞的是它豐富的插件生態系統。如果你喜歡 VSCode，那你很可能也會喜歡 Obsidian。唯一的差別在於：VSCode 是用來寫程式碼的，而 Obsidian 是用來做筆記的。

### First Brain VS Second Brain

第一大腦是我們真實的大腦。只要我們活著，它就不會停止運作，負責知識管理、任務管理和目標管理等工作。大多數時候，我們無法同時處理多件事，因此第一大腦更像一顆 CPU，各種任務相互競爭運算資源。當任務過多時，大腦就會不堪負荷——它必須在處理當前任務的同時，保留其他任務的上下文以便切換，導致我們無法專注於執行眼前的任務。這時就需要一個外部系統來輔助第一大腦，這便是第二大腦。

第二大腦是一個外部系統。如果把第一大腦比作 CPU，那第二大腦更像一個儲存系統，充當第一大腦與現實世界之間的緩衝，減輕第一大腦的負擔，使其能夠專注於當下的事務。可以把它比作記憶體和硬碟——記憶體與 CPU（第一大腦）的溝通更為頻繁，讀取速度也更快。這個儲存系統存放著第一大腦不需要時刻關注的內容。當然，哪些內容需要儲存，由第一大腦決定。內容可以是筆記、待辦事項、流程等，媒介可以是文字、圖片、影片。

例如，當我們用第二大腦進行任務管理時，重要且緊急的事項存放在記憶體中，不重要且不緊急的事項則存放在硬碟上；本週的任務放在記憶體，本月的任務則可能存放在硬碟。因此，善用第二大腦，我們便能無壓力地專注於當下，並在必要時切換情境。

本文將以 Obsidian 為例，分享我建立第二大腦的實踐心得！你可以稱它為第二大腦，但從不同角度來看，我也可以稱它為「LifeOS」，因為我將生活與工作中的一切都記錄於其中。此外，它也可以被稱為「可程式化的個人生產力系統」——我在上面寫了大量程式碼來進行查詢和自動化，同時它也是我用來管理任務與目標的生產力系統。甚至可以把它比作一個「Monorepo 專案」：每個資料夾代表一個專案，而專案內的 README.md 就像 Package.json，描述著當前專案的元資料。

📢 注意：這套系統並非由上而下、事先建立好流程再執行的。它是我在使用 Obsidian 的過程中逐漸形成的，至今仍在持續演進。暫且將目前的版本稱為 1.0。現在分享的目的，是希望能拋磚引玉，幫助大家完善自己的系統！我已經寫了一個 [Obsidian Periodic PARA](https://github.com/quanru/obsidian-periodic-para) 插件來支援這套系統！有了這個插件，你無需任何程式設計背景，只需簡單的視覺化點擊，就能輕鬆建立週期性筆記和 PARA 筆記！

## My Practice

我採用兩套系統：一套用於知識管理，另一套用於週期性筆記。前者以專案／領域／資源等維度管理知識，後者則以時間為維度管理任務／目標／時間。

### Core Systems

- Knowledge management: Using the [PARA](https://fortelabs.com/blog/para/) system
  - Projects -> 專案是一系列與某個有截止日期的目標相關的任務。
  - Areas -> 領域是需要長期維持一定標準的活動範疇。
  - Resources -> 資源是持續感興趣的主題或科目。
  - Archives -> 檔案庫是上述三個類別中已停用的項目。
- Periodic notes
  - 長期：由上而下，聚焦於長期目標。
    - Three-year Review
    - Annual Review
    - Quarterly Review
  - 短期：由下而上，聚焦於短期任務。
    - Monthly Review
    - Weekly Review
  - 日記：記錄想法與洞察，達成自我認知；統計時間消耗，專注於專案。
    - Daily Log

PARA 組成越接近 Projects，可執行性越強；週期性筆記的時間跨度越長，可預測性越低；

這兩套系統有效地建立了兩種情境，讓我保持專注：

- 一種以時間為基礎（週期性筆記），即當我到達某個時間節點時，便根據對應的週期性筆記展開工作，筆記中已有足夠的情境；
- 另一種以主題為基礎（PARA），即當我想研究某個主題時，便根據對應主題的索引（README.md）展開工作，筆記中已積累了大量情境；

### Aspect-oriented Subsystem

> [Aspect-oriented programming - Wikiwand](https://www.wikiwand.com/zh-hans/%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%9A%84%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)

在上述兩套系統之下，還有一個隱含的子系統，主要透過「週期性筆記」來管理任務／目標／時間：

- Task management
  - Collecting via daily/weekly logs.
  - Organizing via weekly/monthly reviews.
- Goal management
  - 透過年度回顧規劃年度目標。
  - 透過季度回顧拆解年度目標。
  - 透過月度回顧分解待辦事項。
    - 由上而下排序（透過目標分解）。
    - 由下而上排序（透過收集分解 -> 日誌／週誌）。
- Time management
  - 在日誌中手動記錄各專案的時間花費及其比例，並據此調整時間投入。
  - 在日、週、月、季、年度回顧中，使用腳本自動統計各專案的時間花費及比例，以便回顧時間投入情況。

你可能會好奇，上述子系統似乎只使用了「週期性筆記」。事實上，這兩套主要系統是透過兩種方法相互連結的。

### Connection

> How systems are associated

#### Tag Connection

將 PARA 下的第一層資料夾視為特殊標籤（不必與資料夾名稱完全相同），並在「週期性筆記」中使用它們，這樣就能以相同方式在每個 PARA 資料夾中統一建立索引。這確保了每個 PARA 資料夾中的 README.md 索引都包含當前主題的完整情境：

#### Project Connection

在「知識管理」中建立專案後，為了加強對專案的專注，每類「週期性筆記」中都有一個「主要事件清單」或「專案清單」，例如：

- 日誌中的「專案清單」是當前專案清單的快照，用於計算當天各專案的時間花費及比例，確保在專案上投入足夠的時間。
- 週度和月度回顧中的「主要事件維度」，會自動從當週或當月的日誌中合併並去重，用於安排專案維度的任務及後續回顧。
- 季度回顧中的「主要事件維度」是當前領域清單的快照，用於安排主要事件維度的目標及後續回顧。
- 年度回顧中的「主要事件維度」，從各季度的主要事件維度自動合併去重，用於設定領域維度的目標及後續回顧。

### Search

- Tags
  - For example, the [holiday](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Daily/06/2023-06-01.md#L3), [vacation](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Daily/06/2023-06-11.md#L4) tags in the daily log.
- Index files
  - For example, the [README.md](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/1.%20Projects/%E5%88%86%E4%BA%AB-2023%20WOT%20%E5%88%86%E4%BA%AB%E4%BC%9A/README.md) 各專案任務、日誌與情境的索引。
- Folders
  - 例如，為每個 PARA 類別使用一致的目錄結構。

### 回顧

- 回顧聚焦於當前週期的專案，同時規劃下一週期的任務。
- 週度回顧反思本週的日誌，月度回顧反思每週的回顧，季度回顧反思每月的回顧。

## Quick Start

### 下載

1. [Click here to download](https://github.com/quanru/obsidian-example-LifeOS/blob/chinese-version/README.md)
2. Open with obsidian and enjoy

### Creating Notes

- 透過左上角的筆記建立模組，快速建立日、週、月、季、年度筆記。
- 透過左上角的筆記建立模組，快速建立 PARA 筆記，即專案、領域、資源、檔案庫。

### "Daily Log" and "Project README"

- 用於日常管理，包含專案清單、每日紀錄、習慣追蹤、精力分配、今日成果等。
- 日誌中的「專案清單」是當前專案的快照（即 Projects 目錄下的內容）。

### "Weekly Review" and "Monthly Review"

- 用於安排每週與每月的任務，包含任務與回顧模組。
- 在週回顧與月回顧中，「主要事件維度」是該時段每日日誌中專案清單快照的集合（自動生成）。
- 週記與月記中的「回顧」主要聚焦於該時段的專案。

### "Quarterly Review" and "Annual Review"

- 用於設定季度與年度目標，包含目標與回顧模組。
- 在季度回顧中，「主要事件維度」是當前領域的快照（即 Areas 目錄下的內容）。
- 在年度回顧中，「主要事件維度」是該時段各季度回顧主要事件維度快照的集合（自動生成）。
- 季記與年記中的「回顧」主要聚焦於該時段的領域。

### "PARA Index" and "Task Index"

### "Capture" and "Express"

首先，介紹一個概念——CODE 模型，其中：

- C 代表 Capture（捕捉）：收集引發共鳴的資訊。
- O 代表 Organize（整理）：對收集的資訊進行分類，即 PARA。
- D 代表 Distill（萃取）：提煉內容精華，篩選出最有價值的資訊。
- E 代表 Express（表達）：與他人分享，將知識付諸實踐。

熟悉 PARA 的人會發現，這個模型其實是 Tiago Forte 在《打造第二大腦》中提出的，它是包含 PARA 組織方法的更高層次模型，其中 O 代表 PARA 組織方法。

我的做法是將一些已標記的文章暫存於「Capture」目錄，同時用「-1. Capture/README.md」檔案索引散落在日誌中、標有 `#PARA/Capture` 標籤的筆記。這樣便於我在特定時間節點（如週末、月底、季末）進行回顧與整理——先將標記的文章歸入各 PARA 主題目錄，再將日誌中一些有啟發性的筆記轉化為明確的待辦事項；

接下來談談「Express（表達）」。我將部落格放在 Express 區塊，同時在日誌中記錄一些片段式筆記，並標上 `PARA/Express`標籤。這些都是內化後的輸出成果。如果這些輸出需要進一步發布到知乎或小紅書等特定社群平台，我會順手將其記錄為一項任務。當我回顧「5. Express/README.md」中索引的任務，發現有待完成的，逐一處理即可。

## Small Tips in Practice

### Buffer Zone Mechanism

將不太重要且不緊急的事項迅速建立任務，放入緩衝區（Inbox），讓主要精力集中在「Projects」上。

### Task Lists

記錄任務不應成為心理負擔——寫下來並不代表一定要完成。把它們記下來，就能讓大腦不必持續惦記或擔心遺忘。我記錄了許多任務，其中不少在重新評估後確實沒有完成。

重要的是要有機制能讓你定期回顧已記錄的任務，例如：

- Using a tasks plugin to create [query views](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/TASK.md) for task lists
- Each periodic note contains a [collected tasks list](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Weekly/2023-W22.md#%E6%9C%AC%E5%91%A8%E6%94%B6%E9%9B%86) for the current period
- Project index files contain a [tasks list](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/1.%20Projects/%E5%88%86%E4%BA%AB-2023%20WOT%20%E5%88%86%E4%BA%AB%E4%BC%9A/README.md#%E4%BB%BB%E5%8A%A1)

### Task Reminders

我認為任務提醒有三種類型：

- 強提醒：例如搶購茅台或演唱會門票，需要在時間到來時以鬧鐘提醒
- 軟提醒：需要在某天完成的事項，如信用卡還款或貸款還款，可透過 GTD 軟體設定提醒
- 清單式：用於記錄之後再安排的任務；視需要可轉換為強提醒或軟提醒，類似 GTD 系統中的收件匣

### Micro-Habits

- 我在日誌中列出微習慣，要記住，它們不是任務。完成與否都無妨，主要是作為一種提示：「今天你有想練習這些微習慣嗎？」這些提示會在我有「能力」且有「動力」時發揮作用。例如：
  - Micro-Habits
    - 鬧鐘一響立刻起床喝水
    - 下車後立刻戴上耳機收聽小宇宙 Podcast
    - 一上地鐵立刻打開微信閱讀
    - 到工位後立刻寫下三件待辦事項
    - 上午 10:30 一到立刻進入專注工作狀態

### Easy to Refactor

在每個週期筆記中，相同功能模組使用相同的語句，例如「本期收集的任務」，均透過以下查詢語句插入。「本期」變數由當前檔案名稱提供，這使得批次重構所有週期檔案非常方便，只需執行一次批次替換即可：

````markdown
```LifeOS
    TaskRecordListByTime
```
````

### Efficient Use of Shortcuts

設定一致的全域快捷鍵，讓你無論在哪個軟體中，都能用相同的快捷鍵呼叫相同的功能。以下是我的部分設定：

- Cursor movement
  - 模式：Control + 方向首字母／VIM 方向鍵
  - Examples:
    - A: Head of line
    - E: End of line
    - F/L: Forward
    - B/H: Backward
    - N/J: Next line
    - P/K: Previous line
    - W: Delete a word (Backward)
    - D: Delete a character (Forward)
- Window management
  - Pattern: Command + Option + initial
  - Examples:
    - L: Left half of the screen
    - R: Right half of the screen
    - C: Center
    - M: Maximize
    - `[`: Show/Hide left sidebar
    - `]`: Show/Hide right sidebar
    - ': Show/Hide bottom bar
    - T：新增分頁（針對更具體的視窗，頂層使用 Command + T）
    - W：關閉分頁（針對更具體的視窗，頂層使用 Command + W）
    - J: Next Tab
    - K: Previous Tab
- Document editing
  - 模式一：Command + Option + 數字／符號
  - Examples:
    - 1: Markdown level-one heading
    - 2: Markdown level-two heading
    - 3: Markdown level-three heading
    - 4: Markdown level-four heading
    - 5: Markdown level-five heading
    - 6: Markdown level-six heading
    - Bulleted list: ~
    - Strikethrough: -
- Function category
  - Pattern: Control + initial
  - Examples:
    - C：複製連結（Obsidian 區塊連結、Arc 瀏覽器連結、VSCode Git 連結）
    - D: Download
    - I: Add to inbox
    - K: Quick Search

