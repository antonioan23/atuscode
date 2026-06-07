<p align="center">
  <a href="https://opencode.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="OpenCode logo">
    </picture>
  </a>
</p>
<p align="center">OpenCode je open source AI agent za programiranje.</p>
<p align="center">
  <a href="https://opencode.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/opencode-ai"><img alt="npm" src="https://img.shields.io/npm/v/opencode-ai?style=flat-square" /></a>
  <a href="https://github.com/antonioan23/atuscode/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/antonioan23/atuscode/publish.yml?style=flat-square&branch=dev" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">ç®€ä½“ä¸­æ–‡</a> |
  <a href="README.zht.md">ç¹é«”ä¸­æ–‡</a> |
  <a href="README.ko.md">í•œêµ­ì–´</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">EspaÃ±ol</a> |
  <a href="README.fr.md">FranÃ§ais</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">æ—¥æœ¬èªž</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Ð ÑƒÑÑÐºÐ¸Ð¹</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">PortuguÃªs (Brasil)</a> |
  <a href="README.th.md">à¹„à¸—à¸¢</a> |
  <a href="README.tr.md">TÃ¼rkÃ§e</a> |
  <a href="README.uk.md">Ð£ÐºÑ€Ð°Ñ—Ð½ÑÑŒÐºÐ°</a> |
  <a href="README.bn.md">à¦¬à¦¾à¦‚à¦²à¦¾</a> |
  <a href="README.gr.md">Î•Î»Î»Î·Î½Î¹ÎºÎ¬</a> |
  <a href="README.vi.md">Tiáº¿ng Viá»‡t</a>
</p>

[![OpenCode Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://opencode.ai)

---

### Instalacija

```bash
# YOLO
curl -fsSL https://opencode.ai/install | bash

# Package manageri
npm i -g opencode-ai@latest        # ili bun/pnpm/yarn
scoop install opencode             # Windows
choco install opencode             # Windows
brew install anomalyco/tap/opencode # macOS i Linux (preporuÄeno, uvijek aÅ¾urno)
brew install opencode              # macOS i Linux (zvaniÄna brew formula, rjeÄ‘e se aÅ¾urira)
sudo pacman -S opencode            # Arch Linux (Stable)
paru -S opencode-bin               # Arch Linux (Latest from AUR)
mise use -g opencode               # Bilo koji OS
nix run nixpkgs#opencode           # ili github:antonioan23/atuscode za najnoviji dev branch
```

> [!TIP]
> Ukloni verzije starije od 0.1.x prije instalacije.

### Desktop aplikacija (BETA)

OpenCode je dostupan i kao desktop aplikacija. Preuzmi je direktno sa [stranice izdanja](https://github.com/antonioan23/atuscode/releases) ili sa [opencode.ai/download](https://opencode.ai/download).

| Platforma             | Preuzimanje                        |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `opencode-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `opencode-desktop-mac-x64.dmg`     |
| Windows               | `opencode-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm`, ili AppImage       |

```bash
# macOS (Homebrew)
brew install --cask opencode-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/opencode-desktop
```

#### Instalacijski direktorij

Instalacijska skripta koristi sljedeÄ‡i redoslijed prioriteta za putanju instalacije:

1. `$OPENCODE_INSTALL_DIR` - PrilagoÄ‘eni instalacijski direktorij
2. `$XDG_BIN_DIR` - Putanja usklaÄ‘ena sa XDG Base Directory specifikacijom
3. `$HOME/bin` - Standardni korisniÄki bin direktorij (ako postoji ili se moÅ¾e kreirati)
4. `$HOME/.opencode/bin` - Podrazumijevana rezervna lokacija

```bash
# Primjeri
OPENCODE_INSTALL_DIR=/usr/local/bin curl -fsSL https://opencode.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://opencode.ai/install | bash
```

### Agenti

OpenCode ukljuÄuje dva ugraÄ‘ena agenta izmeÄ‘u kojih moÅ¾eÅ¡ prebacivati tasterom `Tab`.

- **build** - Podrazumijevani agent sa punim pristupom za razvoj
- **plan** - Agent samo za Äitanje za analizu i istraÅ¾ivanje koda
  - Podrazumijevano zabranjuje izmjene datoteka
  - TraÅ¾i dozvolu prije pokretanja bash komandi
  - Idealan za istraÅ¾ivanje nepoznatih codebase-ova ili planiranje izmjena

UkljuÄen je i **general** pod-agent za sloÅ¾ene pretrage i viÅ¡ekoraÄne zadatke.
Koristi se interno i moÅ¾e se pozvati pomoÄ‡u `@general` u porukama.

Saznaj viÅ¡e o [agentima](https://opencode.ai/docs/agents).

### Dokumentacija

Za viÅ¡e informacija o konfiguraciji OpenCode-a, [**pogledaj dokumentaciju**](https://opencode.ai/docs).

### Doprinosi

Ako Å¾eliÅ¡ doprinositi OpenCode-u, proÄitaj [upute za doprinoÅ¡enje](./CONTRIBUTING.md) prije slanja pull requesta.

### Gradnja na OpenCode-u

Ako radiÅ¡ na projektu koji je povezan s OpenCode-om i koristi "opencode" kao dio naziva, npr. "opencode-dashboard" ili "opencode-mobile", dodaj napomenu u svoj README da projekat nije napravio OpenCode tim i da nije povezan s nama.

---

**PridruÅ¾i se naÅ¡oj zajednici** [Discord](https://discord.gg/opencode) | [X.com](https://x.com/opencode)
