module.exports = (options, pkg) => {
  return [
    {
      name: 'appkey',
      type: 'input',
      message: '请输入 appkey (项目唯一标识)',
      when () {
        return options.appkey === undefined
      },
      default: 'project-appkey'
    }
  ]
}