/**
 *
 * @param {Number} size 生成数据量
 * @returns 生成的数据
 */
const mock = size => {
  const data = []
  for (let i = 0; i < size; i++) {
    data.push(`item - ${i}`)
  }
  return data
}
