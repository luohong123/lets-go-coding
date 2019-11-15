```markdown
router:只做请求分发，没有业务逻辑 
middlewares:业务中间件，如用户权限控制 
model只能由它的proxy访问，而proxy能被controller和service访问。 
controller主要逻辑处理 
service作为项目的业务组件。如：redis连接服务，缓存组件，日志组件等，他可以减少controller的负担。 
app:放一次性脚本
```