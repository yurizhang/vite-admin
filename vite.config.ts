import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
import fs from 'fs'
import lessToJS from 'less-vars-to-js'

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/assets/css/variables.less'), 'utf8')
)
// const { getThemeVariables } = require('antd/dist/theme');
console.log('process:::env', process.argv);
// const env = process.argv[process.argv.length - 1];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: "antd",
          libDirectory: 'es',
          style: name => `antd/es/${name}/style`          
         // style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    })    
  ],
  resolve: {
    // alias: {
    //     "@": path.resolve(__dirname, 'src'),
    // },
    alias: [
      {find: '@', replacement: path.resolve(__dirname, 'src')},
     // {find: /^~/, replacement: '' }  
     // if set @, need to tsconifg.json below:
    //  "baseUrl": "./",
    //  "paths": {
    //    "@/*":["src/*"]
    //  }
  ]    
  },

  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: themeVariables 
        // getThemeVariables({
        //            dark: true, // 开启暗黑模式
        //            compact: true, // 开启紧凑模式
        // }) 
      },
    }
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        info: path.resolve(__dirname, 'info.html')
      }
    },
    cssCodeSplit:true
  },  
  server: {
      proxy: {
          '/users/': {
            target: 'http://localhost:9999',        
            changeOrigin: true,
            headers: {
              "uic-token":'0Ud3AIQdpo0F3dhN'
            }
          }
      }
  }
})
