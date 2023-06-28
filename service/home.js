import request from './network'

export const getEssayData = () => {
  return request({
    url: '/home/essay'
  })
}
export const getEssayContent = () => {
  return request({
    url: '/content'
  })
}
