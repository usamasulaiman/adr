ADR - Architecture Decision Records
===


Forked from [https://github.com/phodal/adr](https://github.com/phodal/adr), but with multi-template support instead of multi-language

Inspired by [https://github.com/npryce/adr-tools](https://github.com/npryce/adr-tools), but supported Windows.
ADR Blogpost: [Documenting Architecture Decisions](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

A good material about [Architecture decision record](https://github.com/joelparkerhenderson/architecture_decision_record)

**Features**

 - Supported Windows, GNU/Linux, Mac OS
 - **report for PM, BA**: html, csv, json
- multi-template support
 - generate markdown toc（see in [docs/adr](/docs/adr) ）
 - status logs
 - status query
 - better list view
 - compatible adr-tools
 - custom templates: add a `template.md` file in the save path

Install
---

1. install

```
npm install -g adr
```

2. init

```
adr init <template>
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
║ 1. Using ADR in project              │ 2017-11-26   │ 2017-11-26        ║
╟──────────────────────────────────────┼──────────────┼───────────────────╢
║ 2. Adding template support           │ 2017-11-26   │ 2017-11-25        ║
╟──────────────────────────────────────┼──────────────┼───────────────────╢
║ 3. Extending reporting               │ 2017-11-26   │ 2017-11-24        ║
╚══════════════════════════════════════╧══════════════╧═══════════════════╝
```

### generate toc

```bash
adr generate toc
```

results:

```markdown
# Architecture Decision Records

* [1. Using ADR in project](001-using_adr_in_project.md)
* [2. Adding template support](002-adding_template_support.md)
* [3. Extending reporting](003-extending_reporting.md)
```

### generate graph

```
adr generate graph
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
╔════════════╤══════════╗
║  -         │    -     ║
╟────────────┼──────────╢
║ 2017-11-23 │ proposed ║
╟────────────┼──────────╢
║ 2017-11-24 │ accepted ║
╚════════════╧══════════╝
```

### export adr

support: json, csv, html, markdown

```
adr export <type>
```

e.x. ``adr export csv``

```
Index, Decision, Last modified, Last status
1, Using ADR in project, 2017-11-26, 2017-11-26 completed
2, Adding template support, 2017-11-26, 2017-11-25 completed
3, Extending reporting, 2017-11-26, 2017-11-24 completed
```

### search adr

```
adr search <keyword>
```

e.x. ``adr search test``

```
╔══════════════════════╤══════════════════════╗
║ Decision             │ Last updated, state  ║
╟──────────────────────┼──────────────────────╢
║ 19.added e2e test    │ 2017-11-28 proposed  ║
╟──────────────────────┼──────────────────────╢
║ 10. write unit tests │ 2017-11-26 completed ║
╚══════════════════════╧══════════════════════╝
```

Config
---

current:
 
  - **template**, template
  - **path**, save path
  - **digits**, the index length, e.x. digits:3 001-index.md
  - **prefix**, the prefix of files, e.x. adr-0001
  - **editor**, the editor to open file, e.x. code, [more information](https://github.com/lahmatiy/open-in-editor#editor), and you can also use the editor by setting the program path, such as `/System/Applications/TextEdit.app/Contents/MacOS/TextEdit`

example config: 

```
{
  "path":"doc/adr/",
  "template":"madr",
  "prefix": "",
  "digits": 4,
  "editor": "code"
}
```

License
---
  This code is distributed under the MIT license. See `LICENSE` in this directory.
