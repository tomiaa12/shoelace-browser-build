import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const builderRoot = process.cwd();
const shoelaceRoot = process.env.SHOELACE_DIR
  ? path.resolve(builderRoot, process.env.SHOELACE_DIR)
  : path.resolve(builderRoot, 'vendor', 'shoelace');

if (!fs.existsSync(shoelaceRoot)) {
  throw new Error(`找不到 Shoelace 源码目录：${shoelaceRoot}`);
}

const outDir = path.resolve(builderRoot, 'dist');
fs.mkdirSync(outDir, { recursive: true });

function run(command, args, options) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, options);

    child.on('close', code => {
      if (code === 0) resolve();
      else reject(new Error(`${command} ${args.join(' ')} 失败，退出码 ${code}`));
    });
  });
}

// make-themes.js 依赖上游的 devDependencies（chalk 等），需要先在 submodule 里装依赖
const shoelaceNodeModules = path.join(shoelaceRoot, 'node_modules');
const hasShoelaceDeps = fs.existsSync(path.join(shoelaceNodeModules, 'chalk'));
if (!hasShoelaceDeps) {
  await run('npm', ['ci'], {
    cwd: shoelaceRoot,
    stdio: 'inherit',
    shell: true // Windows 兼容
  });
}

// 复用上游主题生成脚本，只把 themes 输出到本仓库 dist/
await run('node', ['scripts/make-themes.js', '--outdir', outDir], {
  cwd: shoelaceRoot,
  stdio: 'inherit',
  shell: true // Windows 兼容
});

