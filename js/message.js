var APP_ID = 'SUtw8tU45JtPHqBQkoFvMuRG-gzGzoHsz';
var APP_KEY = 'yjKntth0v0azV9i7HpvQ6VFP';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


//将form表单的内容提交至数据库
let myForm=document.querySelector('#postMessageForm')//找到form表单
myForm.addEventListener('submit',function(e){//监听form表单
    e.preventDefault()//清除默认样式
    let content=myForm.querySelector('input[name=content]').value//得到form表单的内容
    var Message = AV.Object.extend('Message');//保存到数据库中
    var message = new Message();
    message.save({
        'content':content
    }).then(function (message) {
       window.location.reload()
       })


})
//将数据库中的内容显示到页面
var query = new AV.Query('Message');
query.find()
.then(function (messages) {//messages包含数据库中所有的内容
    let array=messages.map((item)=>item.attributes)    
    array.forEach((item)=>{//将从数据库中获取的内容，添加到li标签的文本中，用于显示
        let li=document.createElement('li')
        li.innerText=item.content
        let messageList=document.querySelector('#messageList')
        messageList.appendChild(li)
    })
  },function(error){
      //异常处理
      alert('提交失败')
  })
 



