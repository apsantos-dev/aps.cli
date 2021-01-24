# CLI Web Development

## Introduction

The main objective of this project is to create a CLI capable of identifying tools and configurations necessary for the development of web and mobile applications.

> [YouTube: Vídeo em Português - PT_BR](youtube.com)

<!-- Badges section here. -->
[![License][license-img]][license-ln]
[![CONTRIBUTING][contributing-img]][contributing-ln]
[![GitHub stars][github-stars-img]][github-stars-ln]
[![GitHub forks][github-forks-img]][github-forks-ln]
[![Twitter Follow][twitter-follow-img]][twitter-follow-ln]

> Some tools used:

| | | | | | | | |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| ![Fedora](/assets/images/md/fedora.png "Fedora") | ![gimp](/assets/images/md/gimp.png "Gimp") | ![git](/assets/images/md/git.png "Git") | ![node](/assets/images/md/node.png "Node.Js") | ![npm](/assets/images/md/npm.png "NPM") | ![postman](/assets/images/md/postman.png "Postman") | ![python](/assets/images/md/python.png "Python") | ![vscode](/assets/images/md/vscode.png "Visual Studio Code") |
| ![yarn](/assets/images/md/yarn.png "Yarn") | |  |  |  |  |  |  |  |

---

### Before You Begin

The development of this project was done in environment [Linux][linux-ln], using the Operating System [Fedora 33][fedora-ln]. I used [Terminal][terminal-ln] to run the [commands][commands-ln] described in this tutorial.

```sh
lsb_release -a  # to check system details
```

When it is necessary to execute a command as [root][root-ln], I'll describe the content as follows. Example:

```sh
sudo dnf install xyz  # command example
```

I recommend that you use the Operating System of your choice, adapting the project according to system standards.

> Additional | Editor:
>
> [VSCode][vscode-ln]: Visual Studio Code is a lightweight but powerful source code editor. \o/
>
> Version: 1.52.1

### Necessary tools

- [ ] Node.Js
- [ ] Yarn

---

## Getting Started

### Installation

1 - To execute this project, I recommend that you have some tools installed on your machine. Are they:

- [VSCode][vscode-ln]: Visual Studio Code on Linux - RHEL, Fedora and CentOS based distributions

  _For details on how to install Visual Studio Code, visit the following website: [VSCode Install][vscode-in]_

---

- [Git][git-ln]: Git is a free and open source distributed version control system.

  ```sh
  git --version  # to print Git version
  ```

  If you need to install Git, use the command:

  ```sh
  sudo dnf install git -y   # to install Git on your operating system
  ```

2 - Clone the project:

```sh
cd ~  # open folder for project creation

git clone git@github.com:apsantos-dev/aps.cli.git       # SSH
git clone https://github.com/apsantos-dev/aps.cli.git   # HTTPS

```

_There are several ways to do this, however,
we will limit ourselves to this =]_

3 - Continue ...

---

### Change Log

All notable changes to this project will be documented in the file [CHANGELOG.md][changelog-ln].

_Stable release version:_

[![Release][release-img]][release-ln]

---

### Contributing

Você pode contribuir abrindo uma issue ou criando um pull request.

_See details on contributing to this project at:_

[![CONTRIBUTING][contributing-img]][contributing-ln]

---

### License

This project is licensed under "[The MIT License (MIT)][mit-ln]".

_See license details at:_

[![License][license-img]][license-ln]

<!-- links -->
[changelog-ln]: CHANGELOG.md "Click here to open the file"
[commands-ln]: https://en.wikipedia.org/wiki/Command_(computing) "Press Ctrl and click this link to open the page in a new tab"
[contributing-img]: https://img.shields.io/badge/aps.cli-CONTRIBUTE-orange.svg?style=flat-square
[contributing-ln]: CONTRIBUTING.md "Contribute to make this boilerplate even better"
[extensions-ln]: src/assets/doc/extensions.md "Click here to open the file"
[fedora-ln]: https://getfedora.org/en/ "Press Ctrl and click this link to open the page in a new tab"
[git-ln]: https://git-scm.com/ "Press Ctrl and click this link to open the page in a new tab"
[github-stars-img]: https://img.shields.io/github/stars/apsantos-dev/aps.cli.svg?style=social&label=Star
[github-stars-ln]: https://github.com/apsantos-dev/aps.cli/stargazers "See who likes this design = ]"
[github-forks-img]: https://img.shields.io/github/forks/apsantos-dev/aps.cli.svg?style=social&label=Fork
[github-forks-ln]: https://github.com/apsantos-dev/aps.cli/fork "Click to view Star details of this project"
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-ln]: LICENSE "Copyright (c) 2019 APSantos Desenvolvimento de Sistemas"
[linux-ln]: https://en.wikipedia.org/wiki/Linux "Press Ctrl and click this link to open the page in a new tab"
[mit-ln]: https://opensource.org/licenses/MIT "Click and see the project"
[release-img]: https://img.shields.io/github/release/apsantos-dev/aps.cli.svg?style=flat-square
[release-ln]: https://github.com/apsantos-dev/aps.cli/releases "See all versions of this project"
[root-ln]: https://en.wikipedia.org/wiki/Sudo "Press Ctrl and click this link to open the page in a new tab"
[structure-ln]: structure.md "Click and see the project!"
[ssh-file]: src/assets/doc/ssh.md "Click here to open the file"
[ssh-ln]: https://pt.wikipedia.org/wiki/Secure_Shell "Press Ctrl and click this link to open the page in a new tab"
[terminal-ln]: https://en.wikipedia.org/wiki/Linux_console "Press Ctrl and click this link to open the page in a new tab"
[twitter-follow-img]: https://img.shields.io/twitter/follow/apsantos_dev.svg?label=Follow&style=social
[twitter-follow-ln]: https://twitter.com/intent/follow?screen_name=apsantos_dev "View my profile on Twitter"
[vscode-ln]: https://code.visualstudio.com/ "Press Ctrl and click this link to open the page in a new tab"
[vscode-in]: https://code.visualstudio.com/docs/setup/linux#_rhel-fedora-and-centos-based-distributions "Press Ctrl and click this link to open the page in a new tab"
