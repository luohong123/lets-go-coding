    /**
     *自调用函数---食物的
     *
     */
    (function () {
        var elements = []; //用来保存每个小方块的食物
        //食物是一个对象,有宽、高、颜色、有横纵坐标。首先，定义构造函数被蛇吃掉后删除食物这个对象
        function Food(x, y, width, height, color) {
            //横纵坐标
            this.x = x || 0;
            this.y = y || 0;
            //宽和高
            this.width = width || 20;
            this.height = height || 20;
            //颜色
            this.color = color || "blue";
        }

        //为原型添加初始化的方法,在地图上显示这个食物
        Food.prototype.init = function (map) {
            //先删除食物,外部无法访问的函数
            remove();
            //创建食物的元素
            var div = document.createElement("div");
            //把div添加到map中去
            map.appendChild(div);
            //设置div的样式
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.backgroundColor = this.color;
            //先脱离文档流
            div.style.position = "absolute";
            //横纵坐标,设置随机坐标,地图的宽度除以食物的宽度
            //random() 方法可返回介于 0 ~ 1 之间的一个随机数。
            this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
            this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
            div.style.left = this.x + "px";
            div.style.top = this.y + "px";
            //把div加入到数组elements中
            elements.push(div);
        }

        //把自调用函数暴露Window,外部可以使用
        window.Food = Food;
        //删除食物,外部无法访问的私有函数，只能自己删除自己
        function remove() {
            //element数组长有这个食物
            for (var i = 0; i < elements.length; i++) {
                var ele = elements[i];
                //先找到这个子元素的父节点,父节点删除这个子节点
                ele.parentNode.removeChild(ele);
                //再次把elements中的这个子元素删除
                elements.splice(i, 1);
            }
        }
    }());