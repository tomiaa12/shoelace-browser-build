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

- 引入组件（单文件 ESM）

```html
<script type="module" src="./dist/shoelace.esm.js"></script>
```

- 引入主题（可选）

```html
<link rel="stylesheet" href="./dist/themes/light.css" />
<!-- 或 -->
<link rel="stylesheet" href="./dist/themes/dark.css" />
```

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
