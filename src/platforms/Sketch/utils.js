export const interceptClickEvent = (event) => {
  console.log('event', event)
  const target = event.target.closest('a')
  if (target && target.getAttribute('target') === '_blank') {
    console.log('if')
    event.preventDefault()
    window.postMessage('externalLinkClicked', target.href)
  }
}
