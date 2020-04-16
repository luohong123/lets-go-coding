/*
 * @Author: honghong
 * @Date: 2020-03-07 09:40:10
 * @LastEditors: honghong
 * @LastEditTime: 2020-03-12 09:25:28
 * @Description: 
 * @email: 3300536651@qq.com
 */

/**
 * 实现一种狗猫队列的结构，要求如下：
 * ● 用户可以调用add方法将cat类或dog类的实例放入队列中；
 * ● 用户可以调用pollAll方法，将队列中所有的实例按照进队列的先后顺序依次弹出；
 * ● 用户可以调用pollDog方法，将队列中dog类的实例按照进队列的先后顺序依次弹出；
 * ● 用户可以调用pollCat方法，将队列中cat类的实例按照进队列的先后顺序依次弹出；
 * ● 用户可以调用isEmpty方法，检查队列中是否还有dog或cat的实例；
 * ● 用户可以调用isDogEmpty方法，检查队列中是否有dog类的实例；
 * ● 用户可以调用isCatEmpty方法，检查队列中是否有cat类的实例。
 */

/**
 * 宠物
 */
class Pet {
    type:any;
    constructor(type) {
        this.type = type;
    }
    getPetType() {
        return this.type;
    }
}
/**
 * 狗
 */
class Dog extends Pet {
    constructor() {
        super('dog');
    }
}
/**
 * 猫
 */
class Cat extends Pet {
    constructor() {
        super('cat');
    }
}
class PetEnterQueue {
    private pet:Pet;
    private count:number = 0;
    constructor(pet:Pet, count) {
        this.pet = pet;
        this.count = count;
    }
    getPet() {
        return this.pet;
    }
    getCount() {
        return this.count;
    }
    getEnterPetType() {
        return this.pet.getPetType();
    }
}
class DogCatQueue {
    dogQ: [];
    catQ: [];
    count: number;
    constructor() {
       
    }
    DogCatQueue() {
        this.dogQ = [];
        this.catQ = [];
        this.count = 0;
    }
    /**
     * 用户可以调用add方法将cat类或dog类的实例放入队列中
     * @param pet 
     */
    add(pet: Pet) {
        if (pet.getPetType() === 'dog') {
            this.dogQ.push(new PetEnterQueue(pet,this.count++));
        }else if (pet.getPetType()==='cat') {
            this.catQ.push(new PetEnterQueue(pet,this.count++)) ;
        }else{
            throw Error('err,not dog or cat');
        }
    }
    /**
     * 将队列中所有的实例按照进队列的先后顺序依次弹出
     */
    pollAll() {
        if(this.dogQ.length&&this.catQ.length) {
            if(this.dogQ.shift().getCount() < this.catQ.shift().getCount()){
                return this.dogQ.shift().getPet();
            }else{
                return this.catQ.shift().getPet();
            }
        }else if(this.dogQ.length) {
            return this.dogQ.shift().getPet();
        }else if(this.catQ.length) {
            return this.catQ.shift().getPet();
        }else {
            throw new Error('err,queue is empty!');
        }
    }
    /**
     * 将队列中dog类的实例按照进队列的先后顺序依次弹出
     */
    pollDog() {
        if(!this.isDogQueueEmpty()) {
            return this.dogQ.shift().getPet();
        }else{
            throw Error('Dog queue is empty!');
        }
    }
    /**
     * 将队列中cat类的实例按照进队列的先后顺序依次弹出
     */
    pollCat() {
        if(!this.isCatQueueEmpty()) {
            return this.catQ.shift().getPet();
        }else{
            throw new Error('cat queue is empty!');
        }
    }
    /**
     * 检查队列中是否还有dog或cat的实例
     */
    isEmpty() {
        return !this.dogQ.length&&!this.catQ.length;
    }
    /**
     * 检查队列中是否有dog类的实例
     */
    isDogQueueEmpty(){
        return !this.dogQ.length;
    }
    /**
     * 检查队列中是否有cat类的实例
     */
    isCatQueueEmpty() {
        return !this.catQ.length;
    }
}
/**
 * 几种常见的设计错误：
 * ● cat队列只放cat实例，dog队列只放dog实例，再用一个总队列放所有的实例。
 *   错误原因：cat、dog以及总队列的更新问题。
 * ● 用哈希表，key表示一个cat实例或dog实例，value表示这个实例进队列的次序。
 *   错误原因：不能支持一个实例多次进队列的功能需求，因为哈希表的key只能对应一个value值。
 * ● 将用户原有的cat或dog类改写，加一个计数项来表示某一个实例进队列的时间。
 *   错误原因：不能擅自改变用户的类结构。本题实现将不同的实例盖上时间戳的方法，但是又不能改变用户本身的类，
 *   所以定义一个新的类，具体实现请查看PetEnterQueue类
 */