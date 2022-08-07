const visibleHeight = 500 //可视区高度
const itemHeight = 20 //每条数据高度

const handleScroll = () => {
  //避免白屏
  window.requestAnimationFrame(() => {
    // 获取当前渲染元素坐标信息
    const scrollTop = outer.scrollTop //卷去距离
    const startIndex = ~~(scrollTop / itemHeight) //开始索引
    const endIndex = startIndex + Math.ceil(visibleHeight / itemHeight) //结束索引
    const fragment = document.createDocumentFragment()
    // 渲染数据
    const visibleItems = data.slice(startIndex, endIndex + 1)
    inner.innerHTML = '' //清空上一帧的数据
    for (let i = 0; i < visibleItems.length; i++) {
      const item = document.createElement('div')
      const itemData = visibleItems[i]
      item.innerHTML = itemData
      item.setAttribute(
        'style',
        `height: ${itemHeight}px; border:1px solid black;text-align:center;`
      )
      fragment.appendChild(item)
    }
    inner.appendChild(fragment)
    // 撑开全部高度
    const paddingTop = startIndex * itemHeight
    const paddingBottom = (data.length - endIndex) * itemHeight
    inner.setAttribute(
      'style',
      `padding-top: ${paddingTop}px; padding-bottom: ${paddingBottom}px`
    )
  })
}

// 页面初始化
handleScroll()

// 监听滚动事件
outer.addEventListener('scroll', handleScroll)
