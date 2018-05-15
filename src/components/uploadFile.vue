<template>
  <uploader :options="options" class="uploader-example">
    <uploader-unsupport></uploader-unsupport>
    <uploader-drop>
      <uploader-btn :attrs="attrs">上传图片</uploader-btn>
    </uploader-drop>
    <uploader-list></uploader-list>
  </uploader>
</template>

<script>
export default {
  name: 'uploadFile',
  data () {
    return {
      options: {
        target: '//localhost:3000/upload',
        testChunks: false
      },
      attrs: {
        accept: 'image/*'
      }
    }
  }
}
</script>

<style scoped>
  .uploader-drop{
    display: inline-block;
  }
</style>
<!--
target 目标上传 URL，可以是字符串也可以是函数，如果是函数的话，则会传入 Uploader.File 实例、当前块 Uploader.Chunk 以及是否是测试模式，默认值为 '/'。
singleFile 单文件上传。覆盖式，如果选择了多个会把之前的取消掉。默认 false。
chunkSize 分块时按照该值来分。最后一个上传块的大小是可能是大于等于1倍的这个值但是小于两倍的这个值大小，可见这个 Issue #51，默认 1*1024*1024。
forceChunkSize 是否强制所有的块都是小于等于 chunkSize 的值。默认是 false。
simultaneousUploads 并发上传数，默认 3。
fileParameterName 上传文件时文件的参数名，默认 file。
query 其他额外的参数，这个可以是一个对象或者是一个函数，如果是函数的话，则会传入 Uploader.File 实例、当前块 Uploader.Chunk 以及是否是测试模式，默认为 {}。
headers 额外的一些请求头，如果是函数的话，则会传入 Uploader.File 实例、当前块 Uploader.Chunk 以及是否是测试模式，默认 {}。
withCredentials 标准的 CORS 请求是不会带上 cookie 的，如果想要带的话需要设置 withCredentials 为 true，默认 false。
method 当上传的时候所使用的是方式，可选 multipart、octet，默认 multipart，参考 multipart vs octet。
testMethod 测试的时候使用的 HTTP 方法，可以是字符串或者函数，如果是函数的话，则会传入 Uploader.File 实例、当前块 Uploader.Chunk，默认 GET。
uploadMethod 真正上传的时候使用的 HTTP 方法，可以是字符串或者函数，如果是函数的话，则会传入 Uploader.File 实例、当前块 Uploader.Chunk，默认 POST。
allowDuplicateUploads 如果说一个文件以及上传过了是否还允许再次上传。默认的话如果已经上传了，除非你移除了否则是不会再次重新上传的，所以也就是默认值为 false。
prioritizeFirstAndLastChunk 对于文件而言是否高优先级发送第一个和最后一个块。一般用来发送到服务端，然后判断是否是合法文件；例如图片或者视频的 meta 数据一般放在文件第一部分，这样可以根据第一个块就能知道是否支持；默认 false。
testChunks 是否测试每个块是否在服务端已经上传了，主要用来实现秒传、跨浏览器上传等，默认 true。
preprocess 可选的函数，每个块在测试以及上传前会被调用，参数就是当前上传块实例 Uploader.Chunk，注意在这个函数中你需要调用当前上传块实例的 preprocessFinished 方法，默认 null。
initFileFn 可选函数用于初始化文件对象，传入的参数就是 Uploader.File 实例。
readFileFn 可选的函数用于原始文件的读取操作，传入的参数就是 Uploader.File 实例、文件类型、开始字节位置 startByte，结束字节位置 endByte、以及当前块 Uploader.Chunk 实例。
checkChunkUploadedByResponse 可选的函数用于根据 XHR 响应内容检测每个块是否上传成功了，传入的参数是：Uploader.Chunk 实例以及请求响应信息。这样就没必要上传（测试）所有的块了，具体细节原因参考 Issue #1，使用示例.
generateUniqueIdentifier 可覆盖默认的生成文件唯一标示的函数，默认 null。
maxChunkRetries 最大自动失败重试上传次数，值可以是任意正整数，如果是 undefined 则代表无限次，默认 0。
chunkRetryInterval 重试间隔，值可以是任意正整数，如果是 null 则代表立即重试，默认 null。
progressCallbacksInterval 进度回调间隔，默认是 500。
speedSmoothingFactor 主要用于计算平均速度，值就是从 0 到 1，如果是 1 那么上传的平均速度就等于当前上传速度，如果说长时间上传的话，建议设置为 0.02，这样剩余时间预估会更精确，这个参数是需要和 progressCallbacksInterval 一起调整的，默认是 0.1。
successStatuses 认为响应式成功的响应码，默认 [200, 201, 202]。
permanentErrors 认为是出错的响应码，默认 [404, 415, 500, 501]
-->
