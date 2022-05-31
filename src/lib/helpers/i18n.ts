export function getI18n () {
  let I18N = {
    en: {
      decision: 'Decision',
      Status: 'Status',
      statusStr: 'proposed/accepted/done/deprecated/superseded',
      modifiedDate: 'Last Modified Date',
      lastStatus: 'Last Status',
      logSavePath: 'Save Path:',
      tocHeader: 'Architecture Decision Records',
      status: {
        proposed: 'Proposed',
        accepted: 'Accepted',
        done: 'Done',
        deprecated: 'Deprecated',
        superseded: 'Superseded'
      }
    },
  }
  return I18N.en
}
