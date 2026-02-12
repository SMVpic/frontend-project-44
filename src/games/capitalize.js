const capitalize = (text) => {
  if (text === '') {
    return ''
  }
  const firstChat = text[0].toUpperCase()
  return `${firstChat}${text.slice(1)}`
}

export default capitalize