let fs = require('fs')

import Utils from './utils'

export function init (template): void {
  let workDir = Utils.getWorkDir()
  let defaultConfig = {
    template,
    path: 'docs/adr/',
    prefix: '',
    digits: 4
  }
  if (template === 'nygard' || template === 'common') {
    defaultConfig.template = 'common'
  }
  fs.writeFileSync(workDir + '/.adr.json', JSON.stringify(defaultConfig))
}
