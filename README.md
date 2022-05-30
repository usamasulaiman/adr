ADR - Architecture Decision Records（轻量级架构决策记录工具）
===

> ADR - Architecture Decision Records（轻量级架构决策记录工具）

[![Build Status](https://travis-ci.org/phodal/adr.svg?branch=master)](https://travis-ci.org/phodal/adr) [![codecov.io](https://codecov.io/github/phodal/adr/coverage.svg?branch=master)](https://codecov.io/github/phodal/adr?branch=master)  [![Maintainability](https://api.codeclimate.com/v1/badges/5cd05f9857e0a2031ba1/maintainability)](https://codeclimate.com/github/phodal/adr/maintainability) 

[![Markdown Improve](https://img.shields.io/badge/markdown--improve-Phodal-blue.svg)](https://github.com/phodal/markdown-improve) [![node](https://img.shields.io/node/v/adr.svg)](https://www.npmjs.com/package/adr) [![npm](https://img.shields.io/npm/v/adr.svg)](https://www.npmjs.com/adr)

Inspired by [https://github.com/npryce/adr-tools](https://github.com/npryce/adr-tools), but supported Windows.

ADR Blogpost: [Documenting Architecture Decisions](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

A good material about [Architecture decision record](https://github.com/joelparkerhenderson/architecture_decision_record)

中文翻译：[架构决策记录](https://www.phodal.com/blog/documenting-architecture-decisions/)

**功能特性**

 - 支持 Windows, GNU/Linux, Mac OS
 - Markdown 目录生成
 - 为项目经理、业务人员等非开发人员，生成报表：HTML，CSV, JSON
 - 兼容 adr-tools
 - 国际化支持：English、中文、Brazilian Portuguese (pt-br), Standard Italian (it-IT)
 - 状态历史
 - 状态查询
 - 更好的列表展示
 - 兼容 adr-tools

[查看本项目的架构决策记录](/docs/adr)

**Features**

 - Supported Windows, GNU/Linux, Mac OS
 - **report for PM, BA**: html, csv, json
 - generate markdown toc（see in [docs/adr](/docs/adr) ）
 - **i18n**: English (en), 中文(zh-cn), Brazilian Portuguese (pt-br), Standard Italian (it-IT), Farsi (fa), French (fr)
 - status logs
 - status query
 - better list view
 - compatible adr-tools
 - custom templates: add a `template.md` file in the save path

Screenshots
---

### ADR List

![List Examples](docs/list-example.png)

### ADR Reporter 

![Reporter Examples](docs/reporter-example.png)

Install
---

1. install

```
npm install -g adr
```

2. init

```
adr init <language>
```

e.x: ``adr init en``

### new

```bash
adr new <decision>
```

e.x: ``adr new "create project"``. It will open the new file with your config [editor](#config)

### list

```bash
adr list
```

result:

```
╔══════════════════════════════════════╤══════════════╤═══════════════════╗
║ Decision                             │ Last Modified│ Last Status       ║
╟──────────────────────────────────────┼──────────────┼───────────────────╢
║ 1.编写完整的单元测试                    │ 2017-11-26   │ 2017-11-26 已完成  ║
╟──────────────────────────────────────┼──────────────┼───────────────────╢
║ 2.添加目录生成                         │ 2017-11-26   │ 2017-11-25 已完成  ║
╟──────────────────────────────────────┼──────────────┼───────────────────╢
║ 3.图形生成功能                         │ 2017-11-26   │ 2017-11-24 已完成  ║
╟──────────────────────────────────────┼──────────────┼───────────────────╢
║ 4.生成在线图形                         │ 2017-11-26   │ 2017-11-22 提议    ║
╚══════════════════════════════════════╧══════════════╧═══════════════════╝
```

### generate toc

```bash
adr generate toc
```

results:

```markdown
# Architecture Decision Records

* [1. 编写完整的单元测试](001-编写完整的单元测试.md)
* [2. 添加目录生成](002-添加目录生成.md)
* [3. 图形生成](003-图形生成.md)
```

### generate graph

```
adr generate graph
```

results:

```
digraph {
  node [shape=plaintext];
  _1 [label="1.编写完整的单元测试"; URL="001-编写完整的单元测试.md"]
  _2 [label="2.添加目录生成"; URL="002-添加目录生成.md"]
  _1 -> _2 [style="dotted"];
  _3 [label="3.图形生成"; URL="003-图形生成.md"]
  _2 -> _3 [style="dotted"];
}
```

### update filename by title

```
adr update
```

### decisions change logs

```
adr logs <index>
```

e.x. ``adr logs 9``

```
╔════════════╤══════╗
║  -         │  -   ║
╟────────────┼──────╢
║ 2017-11-23 │ 提议 ║
╟────────────┼──────╢
║ 2017-11-24 │ 通过 ║
╚════════════╧══════╝
```

### export adr

support: json, csv, html, markdown

```
adr export <type>
```

e.x. ``adr export csv``

```
Index, 决策, 上次修改时间, 最后状态
1, 编写完整的单元测试, 2017-11-26, 2017-11-26 已完成
2, 添加目录生成, 2017-11-26, 2017-11-25 已完成
3, 图形生成功能, 2017-11-26, 2017-11-24 已完成
```

### search adr

```
adr search <keyword>
```

e.x. ``adr search 测试``

```
╔══════════════════════╤══════════════════╗
║ 决策                 │ 最后状态         ║
╟──────────────────────┼──────────────────╢
║ 19.添加-e2e-测试     │ 2017-11-28 提议  ║
╟──────────────────────┼──────────────────╢
║ 1.编写完整的单元测试 │ 2017-11-26 完成  ║
╚══════════════════════╧══════════════════╝
```

Config
---

current:
 
  - **language**, language
  - **path**, save path
  - **digits**, the index length, e.x. digits:3 001-index.md
  - **prefix**, the prefix of files, e.x. adr-0001
  - **editor**, the editor to open file, e.x. code, [more information](https://github.com/lahmatiy/open-in-editor#editor), and you can also use the editor by setting the program path, such as `/System/Applications/TextEdit.app/Contents/MacOS/TextEdit`

example config: 

```
{
  "path":"doc/adr/",
  "language":"zh-cn",
  "prefix": "",
  "digits": 4,
  "editor": "code"
}
```

License
---

[![Phodal's Idea](http://brand.phodal.com/shields/idea-small.svg)](http://ideas.phodal.com/)

@ 2017~2021 A [Phodal Huang](https://www.phodal.com)'s [Idea](http://github.com/phodal/ideas).  This code is distributed under the MIT license. See `LICENSE` in this directory.
