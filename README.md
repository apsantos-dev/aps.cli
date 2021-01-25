# CLI Web Development

## Introduction

The main objective of this project is to create a CLI capable of identifying tools and configurations necessary for the development of web and mobile applications.

<!-- Badges section here. -->
[![License][license-img]][license-ln]
[![CONTRIBUTING][contributing-img]][contributing-ln]
[![GitHub stars][github-stars-img]][github-stars-ln]
[![GitHub forks][github-forks-img]][github-forks-ln]
[![Twitter Follow][twitter-follow-img]][twitter-follow-ln]

> YouTube: Vídeo em Português - PT_BR

- [Preparando o backend e frontend](https://youtu.be/q-3ysrY-kHM)
- [Conhecendo o layout da aplicação](https://youtu.be/nedoAP7o4fo)
- [Gravando registros no banco de dados](https://youtu.be/gn2SH-lxZYc)
- [Análise da CLI via terminal](https://youtu.be/jt2uCCr4J1U)

> Some tools used:

| | | | | | | | | | |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| <img src="./app/web/public/assets/images/capacitor.png" alt="capacitor" width="36" /> | <img src="./app/web/public/assets/images/cordova.png" alt="cordova" width="36" /> | <img src="./app/web/public/assets/images/fedora.png" alt="fedora" width="36" /> | <img src="./app/web/public/assets/images/flutter.png" alt="flutter" width="36" /> | <img src="./app/web/public/assets/images/gimp.png" alt="gimp" width="36" /> | <img src="./app/web/public/assets/images/git.png" alt="git" width="36" /> | <img src="./app/web/public/assets/images/ionic.png" alt="ionic" width="36" /> | <img src="./app/web/public/assets/images/node.png" alt="node" width="36" /> | <img src="./app/web/public/assets/images/npm.png" alt="npm" width="36" /> | <img src="./app/web/public/assets/images/postman.png" alt="postman" width="36" /> |
| <img src="./app/web/public/assets/images/python.png" alt="python" width="36" /> | <img src="./app/web/public/assets/images/vscode.png" alt="vscode" width="36" /> | <img src="./app/web/public/assets/images/yarn.png" alt="yarn" width="36" /> | | | | | | | |

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