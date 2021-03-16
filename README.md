cli-alita
=========

模板生成器

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli-alita.svg)](https://npmjs.org/package/cli-alita)
[![Downloads/week](https://img.shields.io/npm/dw/cli-alita.svg)](https://npmjs.org/package/cli-alita)
[![License](https://img.shields.io/npm/l/cli-alita.svg)](https://github.com/https://github.com/LimMem/limmem.git/limmem/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli-alita
$ limmem COMMAND
running command...
$ limmem (-v|--version|version)
cli-alita/0.0.1 darwin-x64 node-v12.18.3
$ limmem --help [COMMAND]
USAGE
  $ limmem COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`limmem hello [FILE]`](#limmem-hello-file)
* [`limmem help [COMMAND]`](#limmem-help-command)

## `limmem hello [FILE]`

describe the command here

```
USAGE
  $ limmem hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ limmem hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/LimMem/limmem.git/limmem/blob/v0.0.1/src/commands/hello.ts)_

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
<!-- commandsstop -->
