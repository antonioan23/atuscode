<p align="center">
  <a href="https://opencode.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="OpenCode logo">
    </picture>
  </a>
</p>
<p align="center">Trá»£ lÃ½ láº­p trÃ¬nh AI mÃ£ nguá»“n má»Ÿ.</p>
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

### CÃ i Ä‘áº·t

```bash
# YOLO
curl -fsSL https://opencode.ai/install | bash

# CÃ¡c trÃ¬nh quáº£n lÃ½ gÃ³i (Package managers)
npm i -g opencode-ai@latest        # hoáº·c bun/pnpm/yarn
scoop install opencode             # Windows
choco install opencode             # Windows
brew install anomalyco/tap/opencode # macOS vÃ  Linux (khuyÃªn dÃ¹ng, luÃ´n cáº­p nháº­t)
brew install opencode              # macOS vÃ  Linux (cÃ´ng thá»©c brew chÃ­nh thá»©c, Ã­t cáº­p nháº­t hÆ¡n)
sudo pacman -S opencode            # Arch Linux (Báº£n á»•n Ä‘á»‹nh)
paru -S opencode-bin               # Arch Linux (Báº£n má»›i nháº¥t tá»« AUR)
mise use -g opencode               # Má»i há»‡ Ä‘iá»u hÃ nh
nix run nixpkgs#opencode           # hoáº·c github:antonioan23/atuscode cho nhÃ¡nh dev má»›i nháº¥t
```

> [!TIP]
> HÃ£y xÃ³a cÃ¡c phiÃªn báº£n cÅ© hÆ¡n 0.1.x trÆ°á»›c khi cÃ i Ä‘áº·t.

### á»¨ng dá»¥ng Desktop (BETA)

OpenCode cÅ©ng cÃ³ sáºµn dÆ°á»›i dáº¡ng á»©ng dá»¥ng desktop. Táº£i trá»±c tiáº¿p tá»« [trang releases](https://github.com/antonioan23/atuscode/releases) hoáº·c [opencode.ai/download](https://opencode.ai/download).

| Ná»n táº£ng              | Táº£i xuá»‘ng                          |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `opencode-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `opencode-desktop-mac-x64.dmg`     |
| Windows               | `opencode-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm`, hoáº·c AppImage      |

```bash
# macOS (Homebrew)
brew install --cask opencode-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/opencode-desktop
```

#### ThÆ° má»¥c cÃ i Ä‘áº·t

Táº­p lá»‡nh cÃ i Ä‘áº·t tuÃ¢n theo thá»© tá»± Æ°u tiÃªn sau cho Ä‘Æ°á»ng dáº«n cÃ i Ä‘áº·t:

1. `$OPENCODE_INSTALL_DIR` - ThÆ° má»¥c cÃ i Ä‘áº·t tÃ¹y chá»‰nh
2. `$XDG_BIN_DIR` - ÄÆ°á»ng dáº«n tuÃ¢n thá»§ XDG Base Directory Specification
3. `$HOME/bin` - ThÆ° má»¥c nhá»‹ phÃ¢n tiÃªu chuáº©n cá»§a ngÆ°á»i dÃ¹ng (náº¿u tá»“n táº¡i hoáº·c cÃ³ thá»ƒ táº¡o)
4. `$HOME/.opencode/bin` - Máº·c Ä‘á»‹nh dá»± phÃ²ng

```bash
# VÃ­ dá»¥
OPENCODE_INSTALL_DIR=/usr/local/bin curl -fsSL https://opencode.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://opencode.ai/install | bash
```

### Agents (Äáº¡i diá»‡n)

OpenCode bao gá»“m hai agent Ä‘Æ°á»£c tÃ­ch há»£p sáºµn mÃ  báº¡n cÃ³ thá»ƒ chuyá»ƒn Ä‘á»•i báº±ng phÃ­m `Tab`.

- **build** - Agent máº·c Ä‘á»‹nh, cÃ³ toÃ n quyá»n truy cáº­p cho cÃ´ng viá»‡c láº­p trÃ¬nh
- **plan** - Agent chá»‰ Ä‘á»c dÃ¹ng Ä‘á»ƒ phÃ¢n tÃ­ch vÃ  khÃ¡m phÃ¡ mÃ£ nguá»“n
  - Máº·c Ä‘á»‹nh tá»« chá»‘i viá»‡c chá»‰nh sá»­a tá»‡p
  - Há»i quyá»n trÆ°á»›c khi cháº¡y cÃ¡c lá»‡nh bash
  - LÃ½ tÆ°á»Ÿng Ä‘á»ƒ khÃ¡m phÃ¡ cÃ¡c codebase láº¡ hoáº·c lÃªn káº¿ hoáº¡ch thay Ä‘á»•i

NgoÃ i ra cÃ²n cÃ³ má»™t subagent **general** dÃ¹ng cho cÃ¡c tÃ¬m kiáº¿m phá»©c táº¡p vÃ  tÃ¡c vá»¥ nhiá»u bÆ°á»›c.
Agent nÃ y Ä‘Æ°á»£c sá»­ dá»¥ng ná»™i bá»™ vÃ  cÃ³ thá»ƒ gá»i báº±ng cÃ¡ch dÃ¹ng `@general` trong tin nháº¯n.

TÃ¬m hiá»ƒu thÃªm vá» [agents](https://opencode.ai/docs/agents).

### TÃ i liá»‡u

Äá»ƒ biáº¿t thÃªm thÃ´ng tin vá» cÃ¡ch cáº¥u hÃ¬nh OpenCode, [**hÃ£y truy cáº­p tÃ i liá»‡u cá»§a chÃºng tÃ´i**](https://opencode.ai/docs).

### ÄÃ³ng gÃ³p

Náº¿u báº¡n muá»‘n Ä‘Ã³ng gÃ³p cho OpenCode, vui lÃ²ng Ä‘á»c [tÃ i liá»‡u hÆ°á»›ng dáº«n Ä‘Ã³ng gÃ³p](./CONTRIBUTING.md) trÆ°á»›c khi gá»­i pull request.

### XÃ¢y dá»±ng trÃªn ná»n táº£ng OpenCode

Náº¿u báº¡n Ä‘ang lÃ m viá»‡c trÃªn má»™t dá»± Ã¡n liÃªn quan Ä‘áº¿n OpenCode vÃ  sá»­ dá»¥ng "opencode" nhÆ° má»™t pháº§n cá»§a tÃªn dá»± Ã¡n, vÃ­ dá»¥ "opencode-dashboard" hoáº·c "opencode-mobile", vui lÃ²ng thÃªm má»™t ghi chÃº vÃ o README cá»§a báº¡n Ä‘á»ƒ lÃ m rÃµ ráº±ng dá»± Ã¡n Ä‘Ã³ khÃ´ng Ä‘Æ°á»£c xÃ¢y dá»±ng bá»Ÿi Ä‘á»™i ngÅ© OpenCode vÃ  khÃ´ng liÃªn káº¿t vá»›i chÃºng tÃ´i dÆ°á»›i báº¥t ká»³ hÃ¬nh thá»©c nÃ o.

---

**Tham gia cá»™ng Ä‘á»“ng cá»§a chÃºng tÃ´i** [Discord](https://discord.gg/opencode) | [X.com](https://x.com/opencode)
