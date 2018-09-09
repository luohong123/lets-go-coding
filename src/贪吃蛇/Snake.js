 /**
     * 自调用函数-小蛇的
     *
     */
    (function () {
        var elements = []; //存放小蛇的每个身体部分
        //内部函数
        function Snake(width, height, direction) {
            //小蛇每部分的宽
            this.width = width || 20;
            this.height = height || 20;
            //小蛇的身体
            this.body = [{
                    x: 3,
                    y: 2,
                    color: "red"
                }, //蛇头
                {
                    x: 2,
                    y: 2,
                    color: "yellow"
                }, //蛇身
                {
                    x: 1,
                    y: 2,
                    color: "green"
                }
            ];
            //方向
            this.direction = direction || "right";
        }
        //为原型添加方法---小蛇初始化的方法,会多次初始化,需要prototype共用,方便调用
        Snake.prototype.init = function (map) {
            //先删除之前的小蛇
            remove();
            //循环遍历创建div
            for (var i = 0; i < this.body.length; i++) {
                //数组中的每个数组原属都是一个对象
                var obj = this.body[i];
                //创建div
                var div = document.createElement("div");
                //把div添加到map地图中
                map.appendChild(div);
                //设置div的样式
                //使div脱离文档流
                div.style.position = "absolute";
                //div的宽高
                div.style.width = this.width + "px";
                div.style.height = this.height + "px";
                //横纵坐标
                div.style.left = obj.x * this.width + "px";
                div.style.top = obj.y * this.height + "px";
                //背景颜色
                div.style.backgroundColor = obj.color;
                //方向

                //把div加到elements数组中,目的是为了删除
                elements.push(div);
            }

        }
        //为原型添加方法---小蛇移动起来
        Snake.prototype.move = function (food, map) {
            //改变小蛇的身体的坐标位置,倒循环
            var i = this.body.length - 1; //2
            for (; i > 0; i--) {
                this.body[i].x = this.body[i - 1].x; //第三块的横坐标变成第二块的横坐标
                this.body[i].y = this.body[i - 1].y; //第三块的纵坐标变成第第二块的纵坐标
            }
            //判断方法---改变小蛇的头的坐标位置
            switch (this.direction) {
                case "right": //往右
                    this.body[0].x += 1;
                    break;
                case "left": //往左
                    this.body[0].x -= 1;
                    break;
                case "top": //往上
                    this.body[0].y -= 1;
                    break;
                case "bottom": //往下
                    this.body[0].y += 1;
                    break;
            }
            //判断有没有吃到食物
            //小蛇的头的坐标和食物的坐标一样 
            var headX = this.body[0].x * this.width;
            var headY = this.body[0].y * this.height;
            //判断小蛇的头和食物的坐标是否相同
            if (headX === food.x && headY === food.y) {
                console.log("吃到蛇啦");
                //获取小蛇最后的尾巴
                var last = this.body[this.body.length - 1];
                // 把最后的蛇尾复制一个,重写的加入到
                this.body.push({
                    x: last.x,
                    y: last.y,
                    color: last.color
                })
                //吃了食物后需要再画一个食物,并且蛇本身身体加长
                food.init(this.map);
            }
        }

        //创建小蛇私有的函数
        function remove() {
            //获取数组
            var i = elements.length - 1;
            for (; i >= 0; i--) {
                //先从当前的子原属是中找到该子元素的父元素,父元素再删除这个子元素
                var ele = elements[i];
                ele.parentNode.removeChild(ele);
                elements.splice(i, 1);
            }
        }
        //把内部函数暴露给window,外部可访问
        window.Snake = Snake;
    }());
