// 本地存储token
export const setLocalStorage = (name, value) => {
  if (!name) return
  // 转为json字符串
  value = typeof value === 'string' ? value : JSON.stringify(value)
  return window.localStorage.setItem(name, value)
}

// 获取token
export const getLocalStorage = (name) => {
  if (!name) return
  return window.localStorage.getItem(name)
}

// 删除 token
export const removeLocalStorage = (name) => {
  if (!name) return
  return window.localStorage.removeItem(name)
}

