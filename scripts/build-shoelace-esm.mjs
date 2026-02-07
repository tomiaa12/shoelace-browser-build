import esbuild from 'esbuild';
import { replace } from 'esbuild-plugin-replace';
import fs from 'fs';
import path from 'path';

/**
 * 默认从 ./vendor/shoelace 读取上游源码；
 * 也可以通过环境变量 SHOELACE_DIR 指向任意 Shoelace 仓库根目录。
 */
const builderRoot = process.cwd();
const shoelaceRoot = process.env.SHOELACE_DIR
  ? path.resolve(builderRoot, process.env.SHOELACE_DIR)
  : path.resolve(builderRoot, 'vendor', 'shoelace');

if (!fs.existsSync(shoelaceRoot)) {
  throw new Error(
    [
      `找不到 Shoelace 源码目录：${shoelaceRoot}`,
      `请先在 my-shoelace-build/vendor/shoelace 放入上游仓库（建议 git submodule / git clone），`,
      `或设置环境变量 SHOELACE_DIR 指向 shoelace 仓库根目录。`
    ].join('\n')
  );
}

const packageJsonPath = path.join(shoelaceRoot, 'package.json');
const packageData = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
const shoelaceVersion = JSON.stringify(packageData.version?.toString() ?? '0.0.0');

const outDir = path.resolve(builderRoot, 'dist');
fs.mkdirSync(outDir, { recursive: true });

await esbuild.build({
  entryPoints: [path.join(shoelaceRoot, 'src', 'shoelace.ts')],
  outfile: path.join(outDir, 'shoelace.esm.js'),
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2022',
  minify: true,
  sourcemap: true,
  sourcesContent: false,
  define: {
    // Floating UI requires this to be set
    'process.env.NODE_ENV': '"production"'
  },
  plugins: [
    replace({
      __SHOELACE_VERSION__: shoelaceVersion
    })
  ],
  logLevel: 'info'
});

