<p align="center">
  <a href="https://opencode.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="OpenCode logo">
    </picture>
  </a>
</p>
<p align="center">OtwartoÅºrÃ³dÅ‚owy agent kodujÄ…cy AI.</p>
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

### Instalacja

```bash
# YOLO
curl -fsSL https://opencode.ai/install | bash

# MenedÅ¼ery pakietÃ³w
npm i -g opencode-ai@latest        # albo bun/pnpm/yarn
scoop install opencode             # Windows
choco install opencode             # Windows
brew install anomalyco/tap/opencode # macOS i Linux (polecane, zawsze aktualne)
brew install opencode              # macOS i Linux (oficjalna formuÅ‚a brew, rzadziej aktualizowana)
sudo pacman -S opencode            # Arch Linux (Stable)
paru -S opencode-bin               # Arch Linux (Latest from AUR)
mise use -g opencode               # dowolny system
nix run nixpkgs#opencode           # lub github:antonioan23/atuscode dla najnowszej gaÅ‚Ä™zi dev
```

> [!TIP]
> Przed instalacjÄ… usuÅ„ wersje starsze niÅ¼ 0.1.x.

### Aplikacja desktopowa (BETA)

OpenCode jest takÅ¼e dostÄ™pny jako aplikacja desktopowa. Pobierz jÄ… bezpoÅ›rednio ze strony [releases](https://github.com/antonioan23/atuscode/releases) lub z [opencode.ai/download](https://opencode.ai/download).

| Platforma             | Pobieranie                         |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `opencode-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `opencode-desktop-mac-x64.dmg`     |
| Windows               | `opencode-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm` lub AppImage        |

```bash
# macOS (Homebrew)
brew install --cask opencode-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/opencode-desktop
```

#### Katalog instalacji

Skrypt instalacyjny stosuje nastÄ™pujÄ…cy priorytet wyboru Å›cieÅ¼ki instalacji:

1. `$OPENCODE_INSTALL_DIR` - WÅ‚asny katalog instalacji
2. `$XDG_BIN_DIR` - ÅšcieÅ¼ka zgodna ze specyfikacjÄ… XDG Base Directory
3. `$HOME/bin` - Standardowy katalog binarny uÅ¼ytkownika (jeÅ›li istnieje lub moÅ¼na go utworzyÄ‡)
4. `$HOME/.opencode/bin` - DomyÅ›lny fallback

```bash
# PrzykÅ‚ady
OPENCODE_INSTALL_DIR=/usr/local/bin curl -fsSL https://opencode.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://opencode.ai/install | bash
```

### Agents

OpenCode zawiera dwÃ³ch wbudowanych agentÃ³w, miÄ™dzy ktÃ³rymi moÅ¼esz przeÅ‚Ä…czaÄ‡ siÄ™ klawiszem `Tab`.

- **build** - DomyÅ›lny agent z peÅ‚nym dostÄ™pem do pracy developerskiej
- **plan** - Agent tylko do odczytu do analizy i eksploracji kodu
  - DomyÅ›lnie odmawia edycji plikÃ³w
  - Pyta o zgodÄ™ przed uruchomieniem komend bash
  - Idealny do poznawania nieznanych baz kodu lub planowania zmian

Dodatkowo jest subagent **general** do zÅ‚oÅ¼onych wyszukiwaÅ„ i wieloetapowych zadaÅ„.
Jest uÅ¼ywany wewnÄ™trznie i moÅ¼na go wywoÅ‚aÄ‡ w wiadomoÅ›ciach przez `@general`.

Dowiedz siÄ™ wiÄ™cej o [agents](https://opencode.ai/docs/agents).

### Dokumentacja

WiÄ™cej informacji o konfiguracji OpenCode znajdziesz w [**dokumentacji**](https://opencode.ai/docs).

### WspÃ³Å‚tworzenie

JeÅ›li chcesz wspÃ³Å‚tworzyÄ‡ OpenCode, przeczytaj [contributing docs](./CONTRIBUTING.md) przed wysÅ‚aniem pull requesta.

### Budowanie na OpenCode

JeÅ›li pracujesz nad projektem zwiÄ…zanym z OpenCode i uÅ¼ywasz "opencode" jako czÄ™Å›ci nazwy (na przykÅ‚ad "opencode-dashboard" lub "opencode-mobile"), dodaj proszÄ™ notatkÄ™ do swojego README, aby wyjaÅ›niÄ‡, Å¼e projekt nie jest tworzony przez zespÃ³Å‚ OpenCode i nie jest z nami w Å¼aden sposÃ³b powiÄ…zany.

---

**DoÅ‚Ä…cz do naszej spoÅ‚ecznoÅ›ci** [Discord](https://discord.gg/opencode) | [X.com](https://x.com/opencode)
