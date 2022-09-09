const chalk = require('chalk')

module.exports = (api, options, allPluginOptions) => {

  // 扩展 package.json
  api.extendPackage({
    dependencies: {
      'axios': '^0.18.0'       
    },
    devDependencies: {
      '@mtfe/nami-cli': '^0.31.2'
    },
    scripts: {
      'test': 'vitest run'
    }
  })

  // api.render(files => {
  //   files['aaa.js'] = 'aaa'
  // })

  // api.addPostFilesMiddleware(files => {
  //   files['bbb.js'] = 'bbb'
  // })

  // 生成项目文件
  api.render('./template', {
    ...allPluginOptions
  })

  api.onCreateComplete(() => {
    console.log(chalk.green.bold('---onCreateComplete---:'))
  })
}