/**
 * 获取guid
 */
export function getGuid() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

/**
 * 获取当前时间
 */
export function getTime(format) {
  
}