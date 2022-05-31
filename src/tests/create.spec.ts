let sinon = require('sinon')
let path = require('path')
let fs = require('fs')
let mkdirp = require('mkdirp')
let walkSync = require('walk-sync')
let OpenInEditor = require('open-in-editor')

import test from 'ava'

import ADR from '../index'
let Config = ADR.Config

let adrTemplate = `# {NUMBER}. {TITLE}

日期: {DATE}

## 状态

列表：提议/通过/完成/已弃用/已取代

{DATE} 提议`
let adrOptions = JSON.stringify({
  path: './',
  template: 'basic'
})

test('ADR: create', t => {
  const filename = '0002-create.md'
  let consoleSpy = sinon.stub(console, 'log')
  let mkdirpSync = sinon.stub(mkdirp, 'sync')
  let generateSpy = sinon.stub(ADR, 'generate')
  let fsWriteSyncSpy = sinon.stub(fs, 'writeFileSync')
  let openInEditorSpy = sinon.stub(OpenInEditor, 'configure').returns({open: async (filePath: string) => {
    t.is(path.basename(filePath), filename)
  }})
  let entriesSpy = sinon.stub(walkSync, 'entries').returns([
    {
      relativePath: '001-编写完整的单元测试.md',
      basePath: './',
      mode: 33188,
      size: 246,
      mtime: 1511435254653
    }
  ])
  let fsExistSpy = sinon.stub(fs, 'existsSync').returns(true)
  let fsReadSpy = sinon.stub(fs, 'readFileSync')
    .onCall(0).returns(JSON.stringify(adrOptions))
    .onCall(1).returns(JSON.stringify(adrOptions))
    .onCall(2).returns(JSON.stringify(adrOptions))
    .onCall(3).returns(JSON.stringify(adrOptions))
    .onCall(4).returns(JSON.stringify(adrOptions))
    .onCall(5).returns(adrTemplate)
  let ADRGetSavePathSpy = sinon.stub(Config, 'getSavePath').returns('./')

  ADR.create('create')
  // create
  t.deepEqual(fsWriteSyncSpy.calledWith(`./${filename}`), true)
  // TOC
  t.deepEqual(fsWriteSyncSpy.calledWith('./README.md'), true)
  t.deepEqual(mkdirpSync.callCount, 1)

  openInEditorSpy.restore()
  fsWriteSyncSpy.restore()
  ADRGetSavePathSpy.restore()
  fsExistSpy.restore()
  fsReadSpy.restore()
  entriesSpy.restore()
  consoleSpy.restore()
  generateSpy.restore()
  mkdirpSync.restore()
})
