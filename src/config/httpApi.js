import request from './request'
import Qs from 'qs'
export function getHttp (apiRoute) {
  return request({
    url: apiRoute,
    method: 'get'
  })
}
export function postHttp (route) {
  return request({
    url: route.url,
    method: 'post',
    data: Qs.stringify(route.data)
  })
}
