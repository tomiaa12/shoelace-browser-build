# my-shoelace-build

在你自己的仓库里“引入上游 Shoelace 源码”，然后产出一个**现代浏览器可直接用**的单文件 `shoelace.esm.js`（可选生成 light/dark 主题 CSS）。

## 使用（从下载安装到编译）

> 假设你已经把这个仓库 push 到 GitHub/Gitee 等（下文用 `<YOUR_REPO_URL>` 代替）。

1. 下载仓库

```bash
git clone <YOUR_REPO_URL>
cd my-shoelace-build
```

2. 拉取上游源码（如果你用的是 submodule）

```bash
git submodule update --init --recursive
```

3. 安装依赖

```bash
npm i
```

4. 编译产物

- 生成单文件 ESM：

```bash
npm run build
```

- 生成主题（light/dark）：

```bash
npm run build:themes
```

5. 产物位置

- `dist/shoelace.esm.js`
- `dist/shoelace.esm.js.map`
- `dist/themes/light.css`
- `dist/themes/dark.css`

## 浏览器引用示例

- 方式 A：本地文件（你自己打包后的 dist）

```html
<script type="module" src="./dist/shoelace.esm.js"></script>
```

- 主题（可选）

```html
<link rel="stylesheet" href="./dist/themes/light.css" />
<!-- 或 -->
<link rel="stylesheet" href="./dist/themes/dark.css" />
```

- 方式 B：jsDelivr（推荐，直接用 CDN 引用）

  > 前提：仓库在 GitHub 且为 public。push 一个版本 tag（例如 `v2.20.1`）后，GitHub Action 会把 `dist` 发布到 `cdn` 分支，并打 `cdn-v2.20.1` 这样的标签用于固定版本。
  - 引入组件（单文件 ESM）

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/<OWNER>/<REPO>@cdn-v2.20.1/shoelace.esm.js"
></script>
```

- 主题（可选）

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/<OWNER>/<REPO>@cdn-v2.20.1/themes/light.css"
/>
<!-- 或 -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/<OWNER>/<REPO>@cdn-v2.20.1/themes/dark.css"
/>
```

## 发布到 jsDelivr（GitHub Actions）

本仓库带了一个 workflow：`/.github/workflows/cdn-dist.yml`，用于把构建后的 `dist` 发布成可被 jsDelivr 引用的内容（发布到 `cdn` 分支根目录，并打 `cdn-<tag>` 标签）。

### 一次性准备

1. 把仓库推到 GitHub（建议 **public**，否则 jsDelivr 无法拉取）
2. 允许 Actions 写入仓库内容（用于推送 `cdn` 分支和 tag）：
   - `Settings -> Actions -> General -> Workflow permissions`
   - 选择 **Read and write permissions**

### 触发发布

- 方式 A：推 tag 自动发布（推荐）

```bash
git tag v2.20.1
git push origin v2.20.1
```

会触发 workflow：

- 运行 `npm ci`
- 执行 `npm run build` + `npm run build:themes`
- 把产物发布到 `cdn` 分支根目录
- 打标签 `cdn-v2.20.1`（用于 jsDelivr 固定版本引用）

- 方式 B：手动触发（临时构建）
  - GitHub -> Actions -> 选择该 workflow -> `Run workflow`
  - 可选填 `source_tag`，用于命名发布标签（例如填 `v2.20.1`，就会生成 `cdn-v2.20.1`）

### 发布后文件结构（很重要）

发布到 `cdn` 分支后，仓库根目录会直接是 `dist` 的内容，所以路径会变成：

- `shoelace.esm.js`
- `themes/light.css`
- `themes/dark.css`

## 可选：用 GitHub Pages 托管（不是自动开启的）

这个 workflow **不会自动帮你开启 Pages**；但你可以把 Pages 的来源指向 `cdn` 分支，这样每次 workflow 更新 `cdn` 分支后，Pages 会自动更新内容。

在 GitHub 仓库里设置：

- `Settings -> Pages`
- `Build and deployment -> Source`: **Deploy from a branch**
- `Branch`: 选择 **`cdn`**
- `Folder`: 选择 **`/ (root)`**

设置完成后，Pages 通常会是：

- `https://<OWNER>.github.io/<REPO>/shoelace.esm.js`
- `https://<OWNER>.github.io/<REPO>/themes/light.css`

## 引入上游 Shoelace

在本仓库根目录（`my-shoelace-build/`）执行：

### 方式 A：git submodule（推荐）

```bash
git submodule add https://github.com/shoelace-style/shoelace vendor/shoelace
```

之后克隆你这个仓库的人，需要：

```bash
git submodule update --init --recursive
```

### 方式 B：直接 clone（不使用 submodule）

```bash
git clone https://github.com/shoelace-style/shoelace vendor/shoelace
```

## 安装依赖

```bash
npm i
```

> 说明：本仓库会在自己的 `node_modules` 里安装 Shoelace 打包所需的依赖（例如 `lit`、`@ctrl/tinycolor` 等），
> 这样你不需要在 `vendor/shoelace` 里再跑一次 `npm i` 才能打包。

## 构建

### 构建单文件 ESM

```bash
npm run build
```

输出：`dist/shoelace.esm.js`、`dist/shoelace.esm.js.map`

### 生成主题（light/dark）到 dist

```bash
npm run build:themes
```

输出：`dist/themes/light.css`、`dist/themes/dark.css`

> 说明：主题生成会自动在 `vendor/shoelace` 内执行 `npm ci`（上游脚本依赖其 devDependencies）。

## 可选：用环境变量指向别的 Shoelace 目录

例如 PowerShell：

```bash
$env:SHOELACE_DIR="D:\path\to\shoelace" ; npm run build
```

你也可以把 submodule 作为备选，直接指向本机已有的 shoelace 源码目录：

```bash
$env:SHOELACE_DIR="D:\path\to\shoelace" ; npm run build:themes
```
