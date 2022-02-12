function dateFormat(dtStr) {

  const dt = new Date(dtStr)

  const y = pagZero(dt.getFullYear())

  const m = pagZero(dt.getMonth() + 1)

  const d = pagZero(dt.getDate())

  const hh = pagZero(dt.getHours())

  const mm = pagZero(dt.getMinutes())

  const ss = pagZero(dt.getSeconds())

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`

}

function pagZero(num) {
  return num > 10 ? num : `0${num}`
}


module.exports.dateFormat = dateFormat