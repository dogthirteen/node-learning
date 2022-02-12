time()

function time() {
  const date = new Date()
  let y, m, d, h, min, s

  y = formatDate(date.getFullYear())
  m = formatDate(date.getMonth() + 1)
  d = formatDate(date.getDate())
  h = formatDate(date.getHours())
  min = formatDate(date.getMinutes())
  s = formatDate(date.getSeconds() + 1)

  console.log(`${y}-${m}-${d} ${h}:${min}:${s}`)
  setTimeout(() => {
    time()
  }, 1000)
}

function formatDate(num) {
  return num > 9 ? num : `0${num}`
}
