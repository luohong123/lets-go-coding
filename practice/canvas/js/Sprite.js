/*
 * @Author: lh
 * @Date: 2020-06-27 13:19:40
 * @LastEditors: lh
 * @LastEditTime: 2020-06-27 16:19:29
 * @Description: 面向对象-精灵图的封装
 * @email: 3300536651@qq.com
 */
function Sprite(option) {
    this._init(option);
}
Sprite.prototype = {
    _init: function (option) {
        // x y 坐标点
        this.x = option.x === 0 ? 0 : (option.x || 10);
        this.y = option.y === 0 ? 0 : (option.y || 10);
        this.w = option.w || 67; // 绘制到canvas上的宽高
        this.h = option.h || 109;
        this.fps = option.fps || 10; // 每秒多少帧 frame per second
        this._imgSrc = option.imgSrc || '';
        this._dirIndex = 0; // 方向索引
        this.originW = option.originW || 67; // 截取的精灵图中的精灵的宽高
        this.originH = option.originH || 109;
    },
    render: function (ctx) { // 把自己画到画布上去
        // 第一步：把图片加载到画布上
        var img = new Image();
        img.src = this._imgSrc;
        var self = this;
        img.onload = function () {
            // this === img
            frameIndex = 0;
            setInterval(function () {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                console.log(frameIndex, frameIndex);
                ctx.drawImage(img, // 绘制的原始图片
                    frameIndex * self.originW, // 剪切原始图标的
                    self._dirIndex * self.originH,
                    self.originW,
                    self.originH,
                    self.x,
                    self.y,
                    self.w * 4,
                    self.h * 4);
                frameIndex++;
                frameIndex %= 4;
            }, 1000 / self.fps);
        }
        // 第二步：加载图片后，启动一个时钟，不停的渲染动画
    },
    changeDir: function (direction) {
        switch (direction) {
            case 'left':
                this._dirIndex = 1;
                break;
            case 'right':
                this._dirIndex = 2;
                break;
            case 'top':
                this._dirIndex = 3;
                break;
            case 'bottom':
                this._dirIndex = 0;
                break;
            default:
                break;
        }
    }
}