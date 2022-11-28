oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @myworkspace/cli
$ myworkspace-cli COMMAND
running command...
$ myworkspace-cli (--version)
@myworkspace/cli/0.0.0 linux-x64 node-v16.17.0
$ myworkspace-cli --help [COMMAND]
USAGE
  $ myworkspace-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`myworkspace-cli help [COMMAND]`](#myworkspace-cli-help-command)
* [`myworkspace-cli plugins`](#myworkspace-cli-plugins)
* [`myworkspace-cli plugins:install PLUGIN...`](#myworkspace-cli-pluginsinstall-plugin)
* [`myworkspace-cli plugins:inspect PLUGIN...`](#myworkspace-cli-pluginsinspect-plugin)
* [`myworkspace-cli plugins:install PLUGIN...`](#myworkspace-cli-pluginsinstall-plugin-1)
* [`myworkspace-cli plugins:link PLUGIN`](#myworkspace-cli-pluginslink-plugin)
* [`myworkspace-cli plugins:uninstall PLUGIN...`](#myworkspace-cli-pluginsuninstall-plugin)
* [`myworkspace-cli plugins:uninstall PLUGIN...`](#myworkspace-cli-pluginsuninstall-plugin-1)
* [`myworkspace-cli plugins:uninstall PLUGIN...`](#myworkspace-cli-pluginsuninstall-plugin-2)
* [`myworkspace-cli plugins update`](#myworkspace-cli-plugins-update)

## `myworkspace-cli help [COMMAND]`

Display help for myworkspace-cli.

```
USAGE
  $ myworkspace-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for myworkspace-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `myworkspace-cli plugins`

List installed plugins.

```
USAGE
  $ myworkspace-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ myworkspace-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `myworkspace-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ myworkspace-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ myworkspace-cli plugins add

EXAMPLES
  $ myworkspace-cli plugins:install myplugin 

  $ myworkspace-cli plugins:install https://github.com/someuser/someplugin

  $ myworkspace-cli plugins:install someuser/someplugin
```

## `myworkspace-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ myworkspace-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ myworkspace-cli plugins:inspect myplugin
```

## `myworkspace-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ myworkspace-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ myworkspace-cli plugins add

EXAMPLES
  $ myworkspace-cli plugins:install myplugin 

  $ myworkspace-cli plugins:install https://github.com/someuser/someplugin

  $ myworkspace-cli plugins:install someuser/someplugin
```

## `myworkspace-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ myworkspace-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ myworkspace-cli plugins:link myplugin
```

## `myworkspace-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ myworkspace-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ myworkspace-cli plugins unlink
  $ myworkspace-cli plugins remove
```

## `myworkspace-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ myworkspace-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ myworkspace-cli plugins unlink
  $ myworkspace-cli plugins remove
```

## `myworkspace-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ myworkspace-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ myworkspace-cli plugins unlink
  $ myworkspace-cli plugins remove
```

## `myworkspace-cli plugins update`

Update installed plugins.

```
USAGE
  $ myworkspace-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
