#!/usr/bin/env bun
import { $ } from "bun"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.resolve(__dirname, "..")
process.chdir(dir)

const VERSION = "1.16.6"
const TAG = "latest"

console.log(`Publishing @hostclube/atuscode and platform packages at v${VERSION}`)

async function published(name: string, version: string) {
  const r = await $`npm view ${name}@${version} version`.nothrow()
  return r.exitCode === 0
}

async function packAndPublish(pkgDir: string, name: string, version: string) {
  if (await published(name, version)) {
    console.log(`  skip (exists) ${name}@${version}`)
    return
  }
  console.log(`  packing ${name}@${version} from ${pkgDir}`)
  // Update version in the dist package.json to match
  const pkgPath = path.join(pkgDir, "package.json")
  const pkg = await Bun.file(pkgPath).json()
  pkg.version = version
  pkg.name = name
  await Bun.file(pkgPath).write(JSON.stringify(pkg, null, 2))
  // Clean any old tgz files
  await $`rm -f *.tgz 2>nul || true`.cwd(pkgDir)
  await $`bun pm pack`.cwd(pkgDir)
  // bun pm pack names file as: <basename>-<version>.tgz where basename strips @ and /
  const basename = name.replace(/^@/, "").replace("/", "-")
  const tgz = `${basename}-${version}.tgz`
  await $`npm publish ${tgz} --access public --tag ${TAG}`.cwd(pkgDir)
  await $`rm -f ${tgz} 2>nul || true`.cwd(pkgDir)
  console.log(`  published ${name}@${version}`)
}

// Publish the platform binary
const platforms = [
  "atuscode-linux-arm64",
  "atuscode-linux-x64",
  "atuscode-linux-x64-baseline",
  "atuscode-linux-arm64-musl",
  "atuscode-linux-x64-musl",
  "atuscode-linux-x64-baseline-musl",
  "atuscode-darwin-arm64",
  "atuscode-darwin-x64",
  "atuscode-darwin-x64-baseline",
  "atuscode-windows-arm64",
  "atuscode-windows-x64",
  "atuscode-windows-x64-baseline",
]
for (const p of platforms) {
  const pkgDir = path.join(dir, "dist", p)
  if (!(await Bun.file(path.join(pkgDir, "package.json")).exists())) {
    console.log(`  skip (not built) ${p}`)
    continue
  }
  await packAndPublish(pkgDir, `@hostclube/${p}`, VERSION)
}

// Build the JS-only wrapper package
const wrapperDir = path.join(dir, "dist", "@hostclube", "atuscode")
await $`mkdir -p ${wrapperDir}/bin`.quiet()
const postinstallSrc = await Bun.file(path.join(dir, "script", "postinstall.mjs")).text()
const postinstallDst = postinstallSrc.replaceAll(
  /`atuscode-\$\{platform\}-\$\{arch\}`/g,
  "`@hostclube/atuscode-${platform}-${arch}`",
)
await Bun.file(path.join(wrapperDir, "postinstall.mjs")).write(postinstallDst)
await Bun.file(path.join(wrapperDir, "LICENSE")).write(
  await Bun.file(path.join(dir, "..", "..", "LICENSE")).text()
)
await Bun.file(path.join(wrapperDir, "bin", "atuscode.exe")).write(
  [
    `echo "Error: atuscode's postinstall script was not run." >&2`,
    'echo "" >&2',
    'echo "This occurs when using --ignore-scripts during installation, or when using a" >&2',
    'echo "package manager like pnpm that does not run postinstall scripts by default." >&2',
    'echo "" >&2',
    'echo "To fix this, run the postinstall script manually:" >&2',
    `echo "  cd node_modules/@hostclube/atuscode && node postinstall.mjs" >&2`,
    'echo "" >&2',
    "exit 1",
    "",
  ].join("\n")
)

const wrapperPkg = {
  name: "@hostclube/atuscode",
  version: VERSION,
  description: "atus code - AI coding agent by hostclube",
  license: "MIT",
  bin: { atuscode: "./bin/atuscode.exe" },
  scripts: { postinstall: "node ./postinstall.mjs" },
  os: ["darwin", "linux", "win32"],
  cpu: ["arm64", "x64"],
  optionalDependencies: Object.fromEntries(
    platforms.map((p) => [`@hostclube/${p}`, VERSION])
  ),
  repository: { type: "git", url: "https://github.com/antonioan23/atuscode" },
  homepage: "https://github.com/antonioan23/atuscode",
  bugs: { url: "https://github.com/antonioan23/atuscode/issues" },
}
await Bun.file(path.join(wrapperDir, "package.json")).write(
  JSON.stringify(wrapperPkg, null, 2)
)

await packAndPublish(wrapperDir, "@hostclube/atuscode", VERSION)

console.log("Done.")
