import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: 'tool/index.ts', // 工具库入口
      name: 'izeper-tool', // 工具库名称
      fileName: (format:any) => `izeper-tool.${format}.js`, // 工具库名称
    },
  },
})
