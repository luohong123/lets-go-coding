/*
 * @Author: honghong
 * @Date: 2019-11-30 11:10:47
 * @LastEditors: honghong
 * @LastEditTime: 2019-11-30 13:51:20
 * @Description: 群信息
 * @email: 3300536651@qq.com
 */
import request from '@/utils/request';
/**
 * 根据 userId 获取消息列表
 * @param {*} userId 
 */
export function messageList(userId) {
    return request({
        url: '/messageList',
        method: 'get',
        userId
    })
}
/**
 * 根据 ID 获取群消息
 * @param {*} groupId 
 */
export function getGroupInfoById(groupId) {
    return request({
        url: `/groupinfo/list/${groupId}`,
        method: 'get'
    })
}
/**
 * 根据群ID获取群成员
 * @param {*} groupId 
 */
export function getGroupUser(groupId) {
    return request({
        url: `/groupuser/list/${groupId}`,
        method: 'get'
    })
}
/**
 * 新增群消息
 * @param {*} groupId 
 */
export function groupInfoAdd(groupId, data) {
    return request({
        url: `/groupinfo/create/${groupId}`,
        method: 'post',
        data
    })
}
/**
 * 新增群成员
 * @param {*} groupId 
 */
export function groupUserAdd(groupId, data) {
    return request({
        url: `/groupuser/list/${groupId}`,
        method: 'post',
        data
    })
}