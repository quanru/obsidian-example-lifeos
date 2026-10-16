# 示例库 1.21.0 发布验收

2026-10-16，从开源插件标签 1.29.2（5151e148323338b703f13864400861c346e18716）的固定源码导出 starter.json。没有读取或复制 Pro 模板；Aino 主题来自其公开 1.0.8 MIT 发行资源，来源说明随源码保留。

重新生成并校验十语言、每种四类库，共 942 项文件。十个 ZIP 校验通过：目录安全、无重复成员、无插件二进制、无 Pro 或 Remosidian 配置、空白库不含演示日记、安装说明要求 LifeOS 1.29.2。中英文完整案例包含学习和个人网站项目、任务、记录、资料与习惯排除示例。

相同案例的真实 Obsidian 汇总、任务写回与来源跳转已在插件 1.29.2 的冻结附件验证中通过；示例包的新手模板也与该标签保持一致。本轮没有运行远端 CI。

本地调试用根目录 `.obsidian/community-plugins.json` 的 Remosidian 条目不属于示例发行内容，保留在本机；公开示例只启用 periodic-para 与 Dataview。归档来源不读取根目录历史笔记或插件目录。

发布附件指纹和下载校验状态见同名 JSON。Aino 主题要求 Obsidian 1.10.6 或更新版本；插件本身仍沿用独立 manifest 的最低版本声明。

## 正式发布结果

1.21.0 已公开发布，标签绑定 `4611ee261917684e3c60ad3971b3fb834e7642c5`。十项 ZIP 公开下载均与本地 SHA-256 一致，发行附件 digest 相符，GitHub latest 指向本版。

[查看正式发行版](https://github.com/quanru/obsidian-example-lifeos/releases/tag/1.21.0)。
