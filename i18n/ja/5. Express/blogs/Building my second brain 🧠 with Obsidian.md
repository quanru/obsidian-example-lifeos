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

This article will take [Obsidian](https://obsidian.md/) Obsidian を使ってセカンドブレインを構築する私の実践例をご紹介します！

詳細については、公式サイトをご参照ください [LifeOS](https://lifeos.vip)!

## Preface

### What is Obsidian?

公式サイトでの自己紹介はこちらです：

- [Obsidian](https://obsidian.md/) あなたの思考スタイルに合わせて柔軟に使えるプライベートなノートアプリです。
- [Obsidian](https://obsidian.md/) あなたの思考方法に適応する、プライベートで柔軟なノートアプリです。

特に気に入っているのは、豊富なプラグインのエコシステムです。VSCode が好きな方なら、Obsidian もきっと気に入るはずです。違いといえば、VSCode がコードを書くためのツールであるのに対し、Obsidian はノートを取るためのツールである点だけです。

### First Brain VS Second Brain

ファーストブレインとは、私たちの実際の脳のことです。生きている限り、脳は常に働き続けています。知識管理・タスク管理・目標管理といった処理を担っていますが、多くの場合、複数のことを同時にこなすことはできません。そのため、ファーストブレインはCPUのように機能し、さまざまなタスクがCPUサイクルを奪い合う状態になります。処理すべきタスクが多すぎると、脳はパンクしてしまいます。現在のタスクをこなしながら他のタスクのコンテキストも保持しなければならず、目の前のことに集中できなくなります。そこで、ファーストブレインを補助する外部システム、すなわちセカンドブレインが必要になります。

セカンドブレインとは外部システムのことです。ファーストブレインをCPUに例えるなら、セカンドブレインはストレージシステムに相当します。ファーストブレインと現実世界の間のバッファとして機能し、ファーストブレインの負荷を軽減して目の前のことに集中できるようにします。メモリとハードディスクに例えることもできますが、メモリはCPU（ファーストブレイン）とのやり取りが頻繁で読み取り速度も速いという違いがあります。このストレージシステムには、常に意識しなくてよい情報を保存します。もちろん、何を保存するかはファーストブレインが判断します。内容はノート・ToDo・プロセスなどで、媒体はテキスト・画像・動画などが考えられます。

たとえば、セカンドブレインをタスク管理に活用する場合、重要かつ緊急なものはメモリに、重要でも緊急でもないものはハードディスクに保存します。今週のタスクはメモリに、今月のタスクはハードディスクに置くイメージです。このようにセカンドブレインを活用することで、プレッシャーなく今この瞬間に集中し、必要に応じてコンテキストを切り替えられるようになります。

この記事では、Obsidian を例にセカンドブレイン構築の実践をご紹介します！セカンドブレインとも呼べますが、見方を変えれば「LifeOS」とも言えます。生活と仕事に関するすべてをここに記録しているからです。また、「プログラマブルな個人生産性システム」とも言えるでしょう。クエリや自動化のためのコードをかなり書いており、タスクと目標を管理する生産性システムとしても活用しています。さらに「Monorepo プロジェクト」にも例えられます。各フォルダがプロジェクトを表し、その中の README.md は Package.json のように、現在のプロジェクトのメタデータを記述しています。

📢 注意：このシステムは、あらかじめ決まったプロセスをトップダウンで実装するものではありません。Obsidian を使いながら少しずつ形成されてきたものであり、現在も進化し続けています。現時点のバージョンを仮に 1.0 と呼ぶことにします。今共有する目的は、皆さんが自分のシステムを改善するヒントにしてもらうためです！すでに [Obsidian Periodic PARA](https://github.com/quanru/obsidian-periodic-para) このシステムをサポートするプラグインも開発済みです！このプラグインを使えば、プログラミングの知識は一切不要。シンプルな視覚的操作で、定期ノートや PARA ノートを簡単に作成できます！

## My Practice

私は2つのシステムを採用しています。1つは知識管理、もう1つは定期ノートのためのものです。前者はプロジェクト・エリア・リソースという軸で知識を管理し、後者は時間を軸にタスク・目標・時間を管理します。

### Core Systems

- Knowledge management: Using the [PARA](https://fortelabs.com/blog/para/) system
  - プロジェクト（Projects）-> プロジェクトとは、期限のある目標に関連する一連のタスクのことです。
  - エリア（Areas）-> エリアとは、一定の基準を継続的に維持する必要がある活動領域のことです。
  - リソース（Resources）-> リソースとは、継続的に関心を持っているトピックや分野のことです。
  - アーカイブ（Archives）-> アーカイブとは、上記3つのカテゴリで非アクティブになった項目のことです。
- Periodic notes
  - 長期：トップダウン方式で、長期的な目標に焦点を当てます。
    - Three-year Review
    - Annual Review
    - Quarterly Review
  - 短期：ボトムアップ方式で、短期的なタスクに焦点を当てます。
    - Monthly Review
    - Weekly Review
  - デイリー：思考やひらめきを記録し、自己認識を高める。時間消費の統計を取り、プロジェクトへの集中を促す。
    - Daily Log

PARA のコンポーネントがプロジェクトに近いほど実行可能性が高く、定期ノートが長期であるほど予測しにくくなります。

この2つのシステムは、集中力を維持するための2つのコンテキストを効果的に生み出しています：

- 1つは時間ベース（定期ノート）のもので、特定の時間ノードに達したとき、対応する定期ノートをもとに作業します。ノートには十分なコンテキストが含まれています。
- もう1つはトピックベース（PARA）のもので、あるトピックを調査したいときに、対応するトピックのインデックス（README.md）をもとに作業します。ノートにはすでに多くのコンテキストが蓄積されています。

### Aspect-oriented Subsystem

> [Aspect-oriented programming - Wikiwand](https://www.wikiwand.com/zh-hans/%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%9A%84%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)

上記2つのシステムの下には、「定期ノート」を中心にタスク・目標・時間を管理するサブシステムが隠れています：

- Task management
  - Collecting via daily/weekly logs.
  - Organizing via weekly/monthly reviews.
- Goal management
  - 年次レビューで年間目標を計画する。
  - 四半期レビューで年間目標を分割する。
  - 月次レビューで積み残し項目を細分化する。
    - トップダウンの並べ替え（目標分解を通じて）。
    - ボトムアップの並べ替え（収集の分解 -> デイリー・ウィークリーログを通じて）。
- Time management
  - デイリーログで各プロジェクトに費やした時間とその割合を手動で記録し、時間の投資を調整する。
  - デイリー・ウィークリー・マンスリー・クォータリー・アニュアルレビューでスクリプトを使用し、各プロジェクトの時間と割合を自動集計して時間投資を振り返る。

上記のサブシステムは「定期ノート」しか使っていないように見えるかもしれませんが、実際には2つのメインシステムが2つの方法でつながっています。

### Connection

> How systems are associated

#### Tag Connection

PARA の第一階層フォルダを特殊タグとして扱い（フォルダ名と完全に一致させる必要はありません）、「定期ノート」で使用します。そうすることで、各 PARA フォルダで同じ方法により一括インデックスを作成できます。これにより、各 PARA フォルダ内の README.md インデックスが、現在のトピックに関するすべてのコンテキストを持つことができます：

#### Project Connection

「知識管理」でプロジェクトを生成し、プロジェクトへの集中を高めるため、すべての「定期ノート」のクラスに「主要イベントリスト」または「プロジェクトリスト」を設けています。例えば：

- デイリーログの「プロジェクトリスト」は現在のプロジェクトリストのスナップショットであり、その日に各プロジェクトに費やした時間と割合を計算し、プロジェクトに十分な時間が割かれているかを確認するために使用します。
- ウィークリーおよびマンスリーレビューの「主要イベントの次元」は、その週または月のデイリーレビューから自動的にマージ・重複排除されたものであり、プロジェクト次元のタスクの整理と事後レビューに使用します。
- クォータリーレビューの「主要イベントの次元」は現在のドメインリストのスナップショットであり、主要イベント次元の目標設定と事後レビューに使用します。
- アニュアルレビューの「主要イベントの次元」は、各四半期の主要イベント次元から自動的にマージ・重複排除されたものであり、ドメイン次元の目標設定と事後レビューに使用します。

### Search

- Tags
  - For example, the [holiday](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Daily/06/2023-06-01.md#L3), [vacation](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Daily/06/2023-06-11.md#L4) tags in the daily log.
- Index files
  - For example, the [README.md](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/1.%20Projects/%E5%88%86%E4%BA%AB-2023%20WOT%20%E5%88%86%E4%BA%AB%E4%BC%9A/README.md) 各プロジェクトのタスク・ログ・コンテキストのインデックス。
- Folders
  - たとえば、各 PARA カテゴリに一貫したディレクトリ構造を使用する。

### 振り返り

- レビューでは現在の期間のプロジェクトを振り返りながら、次の期間のタスクを計画します。
- ウィークリーレビューはその週のデイリーログを振り返り、マンスリーレビューは各週のレビューを、クォータリーレビューは各月のレビューを振り返ります。

## Quick Start

### ダウンロード

1. [Click here to download](https://github.com/quanru/obsidian-example-LifeOS/blob/chinese-version/README.md)
2. Open with obsidian and enjoy

### Creating Notes

- 左上のノート作成モジュールから、デイリー・ウィークリー・マンスリー・クォータリー・アニュアルノートをすばやく作成できます。
- 左上角のノート作成モジュールから、プロジェクト・エリア・リソース・アーカイブなどのPARAノートをすばやく作成できます。

### "Daily Log" and "Project README"

- デイリー管理に使用します。プロジェクトリスト、日々の記録、習慣トラッキング、エネルギー配分、今日の成果などが含まれます。
- デイリーログの「プロジェクトリスト」は、現在のプロジェクト（Projectsディレクトリ配下）のスナップショットです。

### "Weekly Review" and "Monthly Review"

- 週次・月次のタスク整理に使用します。タスクモジュールとレビューモジュールが含まれます。
- 週次・月次レビューの「主要イベント軸」は、対象期間のデイリーノートに記録されたプロジェクトリストのスナップショットを集めたものです（自動生成）。
- 週次・月次ノートの「レビュー」は、主にその期間のプロジェクトに焦点を当てます。

### "Quarterly Review" and "Annual Review"

- 四半期・年間の目標設定に使用します。目標モジュールとレビューモジュールが含まれます。
- 四半期レビューの「主要イベント軸」は、現在のドメイン（Areasディレクトリ配下）のスナップショットです。
- 年次レビューの「主要イベント軸」は、対象期間の四半期レビューにおける主要イベント軸のスナップショットを集めたものです（自動生成）。
- 四半期・年次ノートの「レビュー」は、主にその期間のドメインに焦点を当てます。

### "PARA Index" and "Task Index"

### "Capture" and "Express"

まず、CODEモデルという概念を紹介します。

- CはCapture（収集）：共鳴する情報を集めることです。
- OはOrganize（整理）：収集した情報を整理すること、すなわちPARAです。
- DはDistill（抽出）：コンテンツの本質を抽出し、最も有用な情報を選び取ることです。
- EはExpress（発信）：他者と共有し、知識を実践に活かすことです。

PARAをご存知の方なら、このモデルがTiago Forteの「Building a Second Brain」で提唱されたものだとわかるでしょう。PARAという整理手法を包含するより上位のモデルであり、OがPARAの整理手法を指しています。

私の実践では、マークした記事を一時的に「Capture」ディレクトリに保存しつつ、「-1. Capture/README.md」ファイルを使って、タグ付きのノートをインデックス化しています。 `#PARA/Capture` デイリーログに散らばったメモを整理するため、週末・月末・四半期末などの特定のタイミングでレビューと整理を行います。まずマークした記事を各PARAトピックのディレクトリに振り分け、次にデイリーノートの閃きメモを具体的なタスクに転換します。

次に「Express」について話します。私はブログをExpressセクションに置き、またデイリーログにタグ付きの断片的なメモを記録しています。 `PARA/Express`これらは内面化を経たアウトプットです。知乎や小紅書などのSNSへの投稿が必要な場合は、タスクとして記録します。「5. Express/README.md」でインデックス化されたタスクをレビューし、未完了のものを一つずつ片付けていきます。

## Small Tips in Practice

### Buffer Zone Mechanism

重要度・緊急度の低いものは、タスクを作成してすばやくバッファゾーン（Inbox）に入れ、「Projects」に集中できるようにします。

### Task Lists

タスクの記録は精神的な負担にすべきではありません。書き留めたからといって必ずやらなければならないわけではなく、書くことで頭の中から解放され、忘れる心配がなくなります。私も多くのタスクを記録していますが、後から見直すと完了していないものも多くあります。

記録したタスクをレビューできる仕組みを持つことが重要です。例えば：

- Using a tasks plugin to create [query views](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/TASK.md) for task lists
- Each periodic note contains a [collected tasks list](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/PeriodicNotes/2023/Weekly/2023-W22.md#%E6%9C%AC%E5%91%A8%E6%94%B6%E9%9B%86) for the current period
- Project index files contain a [tasks list](https://github.com/quanru/obsidian-example-LifeOS/blob/1.0.1/1.%20Projects/%E5%88%86%E4%BA%AB-2023%20WOT%20%E5%88%86%E4%BA%AB%E4%BC%9A/README.md#%E4%BB%BB%E5%8A%A1)

### Task Reminders

タスクのリマインダーには3種類あると考えています：

- 強いリマインダー：茅台酒やコンサートチケットの先着購入など、時間になったらアラームで知らせる必要があるもの
- ソフトなリマインダー：クレジットカードの支払いやローン返済など、特定の日にやるべきことで、GTDソフトウェアでリマインダーを設定できるもの
- リスト形式：後で整理するためにタスクを記録するもの。必要に応じて強いリマインダーやソフトなリマインダーに変換できます。GTDシステムのインボックスに相当します。

### Micro-Habits

- 私はジャーナルにマイクロ習慣をリストアップしていますが、これらはタスクではありません。できてもできなくてもかまいません。主な目的は「今日これらのマイクロ習慣を実践してみますか？」というリマインダーです。「能力」と「意欲」があるときのプロンプトとして機能します。例えば：
  - Micro-Habits
    - アラームが鳴ったらすぐに起きて水を飲む
    - 乗り物を降りたらすぐにイヤホンをつけて「小宇宙」ポッドキャストを聴く
    - 地下鉄に乗ったらすぐにWeChat Readを開く
    - デスクに着いたらすぐにToDo 3つを書き下ろす
    - 午前10時30分になったら本格的な作業を開始する

### Easy to Refactor

各定期ノートの同じ機能モジュールは同じ記述を使用します。例えば「この期間に収集したタスク」はすべて以下のクエリ文で挿入されます。「この期間」という変数は現在のファイル名から提供されるため、全定期ファイルを一括リファクタリングする際は置換を一度行うだけで非常に便利です：

````markdown
```LifeOS
    TaskRecordListByTime
```
````

### Efficient Use of Shortcuts

グローバルショートカットを統一することで、どのソフトウェアでも同じショートカットで同じ機能を呼び出せます。私の設定例を以下に示します：

- Cursor movement
  - パターン：Control + 方向キーの頭文字／VIM方向キー
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
    - T：新しいタブ（より具体的なウィンドウの場合、上位レベルはCommand + T）
    - W：タブを閉じる（より具体的なウィンドウの場合、上位レベルはCommand + W）
    - J: Next Tab
    - K: Previous Tab
- Document editing
  - パターン1：Command + Option + 数字／記号
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
    - C：リンクをコピー（Obsidianブロックリンク、Arcブラウザリンク、VSCode gitリンク）
    - D: Download
    - I: Add to inbox
    - K: Quick Search

