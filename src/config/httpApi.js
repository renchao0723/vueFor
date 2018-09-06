import request from './request'
import Qs from 'qs'
import CryptoJS from 'crypto-js'
export function getHttp (apiRoute) {
  return request({
    url: apiRoute,
    method: 'get'
  })
}
export function postHttp (route) {
  console.log(route.data)
  let datas = encryptByDES((JSON.stringify({
    channel_id: route.data.channel_id,
    page: route.data.page,
    tag_id: route.data.tag_id
  })), 0.38466596883098503)
  return request({
    url: route.url,
    method: 'post',
    data: Qs.stringify({datas: datas})
  })
}
// DES加密 Pkcs7填充方式
function encryptByDES (message, key) {
  const keyHex = CryptoJS.enc.Utf8.parse(key)
  const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.ciphertext.toString()
}
