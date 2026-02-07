## shoelace-build

把 Shoelace 打成 **浏览器可直接引用** 的 ESM 单文件，并通过 GitHub Actions 发布到 `cdn` 分支，最终用 **jsDelivr** 以固定版本方式引入。

## 用 jsDelivr 引入（推荐）

前提：

- 你的仓库在 GitHub 且为 **public**
- 已存在 workflow：`/.github/workflows/cdn-dist.yml`

当你发布一个版本（例如 `v2.20.1`）后，workflow 会：

- 构建产物
- 推送到 `cdn` 分支（根目录仅保留：`shoelace.esm.js`、`shoelace.esm.js.map`、`themes/`）
- 打标签：`cdn-v2.20.1`（用于 jsDelivr 固定版本引用）

### 引入脚本（ESM）

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/tomiaa12/shoelace-browser-build@cdn-v2.20.1/shoelace.esm.js"
></script>
```

### 引入主题（可选）

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/tomiaa12/shoelace-browser-build@cdn-v2.20.1/themes/light.css"
/>
<!-- 或 -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/tomiaa12/shoelace-browser-build@cdn-v2.20.1/themes/dark.css"
/>
```

## 怎么触发发布（生成 `cdn-v*`）

### 方式 A：推 tag 自动发布

```bash
git tag v2.20.1
git push origin v2.20.1
```

### 方式 B：手动 Run workflow

GitHub → Actions → 选择 `Build dist and publish to jsDelivr (cdn branch)` → `Run workflow`  
`source_tag` 填 `v2.20.1`（会生成 `cdn-v2.20.1`）

## 常见问题

### workflow 报 “Remote tag already exists: cdn-v2.20.1”

说明远端已存在同名 `cdn-*` 标签（为了保证“固定版本”不被覆盖，workflow 会直接失败）。如果你确定要重发同名版本，先删除远端标签再重跑：

```bash
git push --delete origin cdn-v2.20.1
```
