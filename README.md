<p align="center">
  <a href="https://github.com/hostclube/atuscode">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="atus code logo">
    </picture>
  </a>
</p>
<p align="center">atus code - AI-powered development tool (fork of opencode).</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@hostclube/atuscode"><img alt="npm" src="https://img.shields.io/npm/v/@hostclube/atuscode?style=flat-square" /></a>
  <a href="https://github.com/hostclube/atuscode/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/hostclube/atuscode/publish.yml?style=flat-square&branch=dev" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zht.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.gr.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a>
</p>

[![atus code Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://github.com/hostclube/atuscode)

---

### About this fork

This is a fork of [opencode](https://github.com/hostclube/atuscode) maintained by hostclube under the **atus code** brand. Code, structure, and most features are inherited from upstream; only the package namespace, CLI binary, and outbound branding have been changed.

### Installation

```bash
# npm / bun / pnpm / yarn
npm i -g @hostclube/atuscode@latest
# or
bun add -g @hostclube/atuscode
```

> [!TIP]
> Once published, additional install channels (Homebrew tap, Scoop, Chocolatey, AUR) will be added at `hostclube/atuscode-tap` and friends.

#### Installation Directory

The CLI respects the following priority order for the installation path:

1. `$ATUSCODE_INSTALL_DIR` - Custom installation directory
2. `$XDG_BIN_DIR` - XDG Base Directory Specification compliant path
3. `$HOME/bin` - Standard user binary directory (if it exists or can be created)
4. `$HOME/.atuscode/bin` - Default fallback

### Agents

atus code includes two built-in agents you can switch between with the `Tab` key.

- **build** - Default, full-access agent for development work
- **plan** - Read-only agent for analysis and code exploration
  - Denies file edits by default
  - Asks permission before running bash commands
  - Ideal for exploring unfamiliar codebases or planning changes

Also included is a **general** subagent for complex searches and multistep tasks.
This is used internally and can be invoked using `@general` in messages.

### Configuration

atus code reads its config from `atuscode.json` / `atuscode.jsonc` in your project root, plus `~/.config/atuscode/`. Backwards compatibility with `opencode.json` files is preserved for migration only - new projects should use the `atuscode.json` name.

### Documentation

For more info on how to configure atus code, see the upstream docs at [opencode.ai/docs](https://opencode.ai/docs).

### Contributing

If you're interested in contributing to atus code, please read our [contributing docs](./CONTRIBUTING.md) before submitting a pull request. PRs are welcome against `dev`.

### Building on atus code

If you are working on a project that's related to atus code and is using "atuscode" as part of its name, for example "atuscode-dashboard" or "atuscode-mobile", please add a note to your README to clarify that it is not built by the atus code team and is not affiliated with us in any way.

---

**Maintained by** [hostclube](https://github.com/hostclube) | Original by [hostclube/atuscode](https://github.com/hostclube/atuscode)
