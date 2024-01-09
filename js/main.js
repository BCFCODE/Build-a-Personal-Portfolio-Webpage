const d = new Date()
const [year, month] = [d.getFullYear(), d.getMonth() + 1]

$(document).ready(() => {
  $("#yearCopyright").html(year)
})