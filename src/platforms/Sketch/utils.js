export const interceptClickEvent = (event) => {
  const target = event.target.closest('a')
  if (target && target.getAttribute('target') === '_blank') {
    event.preventDefault()
    window.postMessage('externalLinkClicked', target.href)
  }
}
