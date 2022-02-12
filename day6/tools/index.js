
// 格式化时间
function dateFormat(dtStr) {

  const dt = new Date(dtStr)

  const y = padZero(dt.getFullYear())

  const m = padZero(dt.getMonth() + 1)

  const d = padZero(dt.getDate())

  const hh = padZero(dt.getHours())

  const mm = padZero(dt.getMinutes())

  const ss = padZero(dt.getSeconds())

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`

}

// 自动补零
function padZero(num) {
  return num > 0 ? num : `0${num}`
}
function htmlEnEscape(str) {
  console.log(str);
  return str.replace(/<|>|"|&/g, (match) => {
    switch (match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case '&':
        return '&amsp;'
      default:
        return
    }
  })

}

function htmlDeEscape(str) {
  return str.replace(/&lt;|&gt;|&quot;|&amsp;/g, (match) => {
    switch (match) {
      case '&lt;':
        return '<'
      case '&gt;':
        return '>'
      case '&quot;':
        return '"'
      case '&amsp;':
        return '&'
      default:
        return
    }
  })
}



module.exports = {
  dateFormat,
  htmlEnEscape,
  htmlDeEscape
}