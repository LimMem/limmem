# limmem
=========

模板生成器

<!-- toc -->
* [limmem](#limmem)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g limmem
$ limmem COMMAND
running command...
$ limmem (-v|--version|version)
limmem/0.0.1 darwin-x64 node-v12.18.3
$ limmem --help [COMMAND]
USAGE
  $ limmem COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`limmem charts [NAME] [SUBNAME]`](#limmem-charts-name-subname)
* [`limmem help [COMMAND]`](#limmem-help-command)
* [`limmem plus [NAME] [SUBNAME]`](#limmem-plus-name-subname)

## `limmem charts [NAME] [SUBNAME]`

describe the command here

```
USAGE
  $ limmem charts [NAME] [SUBNAME]

ARGUMENTS
  NAME     组件名称
  SUBNAME  子组件名称

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
```

_See code: [src/commands/charts.ts](https://github.com/LimMem/limmem.git/limmem/blob/v0.0.1/src/commands/charts.ts)_

## `limmem help [COMMAND]`

display help for limmem

```
USAGE
  $ limmem help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `limmem plus [NAME] [SUBNAME]`

describe the command here

```
USAGE
  $ limmem plus [NAME] [SUBNAME]

ARGUMENTS
  NAME     组件名称
  SUBNAME  子组件名称

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ limmem plus [NAME] [SUBNAME]
```

_See code: [src/commands/plus.ts](https://github.com/LimMem/limmem.git/limmem/blob/v0.0.1/src/commands/plus.ts)_
<!-- commandsstop -->
