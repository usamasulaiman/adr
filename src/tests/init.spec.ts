let sinon = require('sinon')
let fs = require('fs')

import test from 'ava'
import ADR from '../index'

test('ADR: init en', t => {
  let cwdSpy = sinon.stub(process, 'cwd').returns('/test')
  let fsWriteSpy = sinon.stub(fs, 'writeFileSync')

  ADR.init('en')
  t.deepEqual(fsWriteSpy.calledOnce, true)
  t.deepEqual(fsWriteSpy.calledWith('/test/.adr.json', '{"template":"basic","path":"docs/adr/","prefix":"","digits":4}'), true)
  cwdSpy.restore()
  fsWriteSpy.restore()
})
