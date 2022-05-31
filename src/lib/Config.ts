let fs = require('fs')
let LRU = require('lru-cache')
let cache = new LRU({
  max: 500
})
let path = require('path')

import Utils from './utils'

let DEFAULT_CONFIG = {
  template: 'basic',
  path: Utils.getWorkDir() + '/docs/adr/',
  prefix: '',
  digits: 4,
  editor: 'code'
}

function getAllConfig (defaultValue: string) {
  if (!fs.existsSync(Utils.getWorkDir() + '/.adr.json')) {
    return defaultValue
  }
  let config = fs.readFileSync(Utils.getWorkDir() + '/.adr.json', 'utf8')
  try {
    let parsedConfig = JSON.parse(config)
    cache.set('config', parsedConfig)

    return parsedConfig
  } catch (e) {
    console.error(e)
    return defaultValue
  }
}

function getConfig (key: string) {
  let defaultValue = DEFAULT_CONFIG[key]
  let config
  if (cache.get('config')) {
    config = cache.get('config')
  } else {
    config = getAllConfig(defaultValue)
  }
  if (config && config[key]) {
    return config[key]
  }

  return defaultValue
}

function getTemplate () {
  return getConfig('template')
}

function getPrefix () {
  return getConfig('prefix')
}

function getDigits () {
  return getConfig('digits')
}

function getSavePath (): string {
  return getConfig('path')
}

function getCachePath (): string {
  return path.resolve(getConfig('path'), './.cache')
}

function getAssetsPath (): string {
  return path.resolve(getConfig('path'), './assets')
}

function getEditor (): string {
  return getConfig('editor')
}

let Config = {
  getAllConfig: getAllConfig,
  getSavePath: getSavePath,
  getTemplate: getTemplate,
  getPrefix: getPrefix,
  getDigits: getDigits,
  getEditor: getEditor,
  getConfig: getConfig,
  getAssetsPath: getAssetsPath,
  getCachePath: getCachePath
}

export default Config
