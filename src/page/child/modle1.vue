<!--  -->
<template>
    <div>
      <canvas id="canvasTop" width="375px" height="300px"></canvas>
    </div>
</template>

<script>
class DropCanvas {
  constructor (el) {
    this.el = el
    this.canvas = document.getElementById(this.el)
    this.cxt = this.canvas.getContext('2d')
    this.stage_info = this.canvas.getBoundingClientRect()
    this.path = {
      beginX: 0,
      beginY: 0,
      endX: 0,
      endY: 0
    }
  }
  init () {
  //  初始化canvas
  }
  dropRect (type, x, y, w, h) {
    //  矩形
    switch (type) {
      case 'file' :
        this.cxt.fillRect(x, y, w, h)
        break
      case 'stroke' :
        this.cxt.strokeRect(x, y, w, h)
        break
      case 'clear' :
        this.cxt.clearRect(x, y, w, h)
        break
    }
  }
  dropPath (type, x, y, radius, startAngle, endAngle, anticlockwise) {
    switch (type) {
      case 'begin' :
        this.cxt.beginPath()
        break
      case 'close' :
        this.cxt.closePath()
        break
      case 'stroke' :
        this.cxt.stroke()
        break
      case 'fill' :
        this.cxt.fill()
        break
      case 'moveTo' :
        this.cxt.moveTo(x, y)
        break
      case 'lineTo' :
        this.cxt.lineTo(x, y)
        break
      case 'arc' :
        this.cxt.arc(x, y, radius, startAngle, endAngle, anticlockwise)
    }
  }
}
export default {
  name: 'modle1',
  mounted () {
    this.canvasDragPic()
    let canva = new DropCanvas('canvasTop')
    canva.dropRect('file', 0, 0, 100, 200)
    canva.dropRect('strke', 50, 50, 100, 200)
  },
  methods: {
    canvasDragPic: function () {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
