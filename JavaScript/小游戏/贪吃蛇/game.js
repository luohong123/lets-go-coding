 /**
     *自调用函数---游戏对象
     *
     */
    (function () {
        var that = null;
        //游戏的构造函数
        function Game(map) {
            this.food = new Food(); //食物对象
            this.snake = new Snake(); //小蛇对象
            this.map = map; //地图
            that = this;
        }
        //游戏的初始化对象
        Game.prototype.init = function () {
            //初始化游戏
            //食物初始化
            this.food.init(this.map); //这里的this指的是实例对象
            //小蛇初始化
            this.snake.init(this.map);
            // setInterval(function () {
            //     // 定时器里面的this是window,所有定义一个变量that
            //     that.snake.move(that.food, document.querySelector(".map"));
            //     that.snake.init(that.map); //初始化---重新画一条小蛇
            // }, 150);
            //调用自动移动小蛇的方法
            this.runSnake(this.food, this.map);
            //调用按键的绑定方法
            this.bindKey();
            //调用分数
            // this.getScoreByNumber(this.snake.body.length - 1);
        }
        //  添加原型方法---设置小蛇可以自动的跑起来
        Game.prototype.runSnake = function (food, map) {
            //此时这里的this指的是实例对象runSnake
            //自动的去移动
            var timeId = setInterval(function () {
                //此时的this是window,
                //移动小蛇
                this.snake.move(food, map);
                //初始化小蛇
                this.snake.init(map);
                //判断小蛇是否撞墙,如果小蛇撞到墙,则游戏停止
                //横坐标的最大值
                var maxX = map.offsetWidth / this.snake.width;
                console.log(this.snake.body[0].x + "====>" + maxX);
                //纵坐标的最大值
                var maxY = map.offsetHeight / this.snake.height;
                //小蛇的头的坐标
                var headX = this.snake.body[0].x;
                var headY = this.snake.body[0].y;
                if (headX < 0 || headX >= maxX) {
                    clearInterval(timeId);
                    alert("不小心撞墙啦,游戏结束！")
                }
                if (headY < 0 || headY >= maxY) {
                    //停止定时器
                    clearInterval(timeId);
                    alert("不小心撞墙啦,游戏结束！")
                }
            }.bind(that), 150); //bind改变了this的指向,谁调用了bind,this。指的便是谁
        }
        //添加原型方法-设置用户按键,改变小蛇移动的方向
        Game.prototype.bindKey = function () {
            console.log("bindKey已经调用")
            //获取用户的按键,改变小蛇的方向
            document.addEventListener("keydown",
                function (e) {
                    //这里的this是触发keydown的事件的对象--document,所有这里的this是document
                    switch (e.keyCode) {
                        case 37:
                            //此时的this是游戏对象
                            this.snake.direction = "left";
                            break;
                        case 38:
                            //此时的this是游戏对象
                            this.snake.direction = "top";
                            break;
                        case 39:
                            //此时的this是游戏对象
                            this.snake.direction = "right";
                            break;
                        case 40:
                            //此时的this是游戏对象
                            this.snake.direction = "bottom";
                            break;
                    }
                }.bind(that), false);
        }
        //得分
        // Game.prototype.getScoreByNumber=function(number) {
        //     var div = document.createElement("div");
        //     this.map.appendChild(div);
        //     div.style.width = "80px";
        //     div.style.height = "80px";
        //     div.style.backgroundColor = "yellow";
        //     div.style.color = "#ffffff";
        //     div.style.position = "fixed";
        //     div.style.left = "850px";
        //     div.style.top = "10px";
        //     div.innerHtml = "分数" + number * 10 + "分";
        // }
        window.Game = Game;
    }());
     //调用游戏,让小蛇动起来
     var gm = new Game(document.querySelector(".map"));
     gm.init();