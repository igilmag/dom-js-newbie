export function classListEdit (isAdd) {
  const olEL = document.getElementById('add-remove-class')
  if (!olEL) return

  if (isAdd) {
    olEL.classList.add('fa', 'fa-blind', 'fa-3x')
  } else {
    olEL.classList.remove('fa', 'fa-blind', 'fa-3x')
  }
}
