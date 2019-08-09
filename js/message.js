!function(){
    var view=document.querySelector('div.message')

    var model={

        init:function(){
            var APP_ID = 'SUtw8tU45JtPHqBQkoFvMuRG-gzGzoHsz';
            var APP_KEY = 'yjKntth0v0azV9i7HpvQ6VFP';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch:function(){//获取数据

            var query = new AV.Query('Message');
            return query.find()

        },
        save:function(name,content){//保存数据
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({
                'name': name,
                'content': content
            })

        }
        
    }

    var controller={
        view:null,
        messageList:null,
        form:null,
        model:null,
        init:function(view,model){
            this.view=view
            this.model=model
            this.messageList=view.querySelector('#messageList')
            this.form=view.querySelector('form')
            this.model.init()
            this.loadMessage()
            this.bindEvents()

        },
       
        loadMessage: function () {
           this.model.fetch().then((messages)=> {//messages包含数据库中所有的内容
                let array = messages.map((item) => item.attributes)
                array.forEach((item) => {//将从数据库中获取的内容，添加到li标签的文本中，用于显示
                    let li = document.createElement('li')
                    li.innerText = `${item.name}:${item.content}`
                    this.messageList.appendChild(li)
                })
            })
        },
        
        bindEvents: function() {
           that=this;
            this.form.addEventListener('submit',function (e) {
                console.log(this)
                e.preventDefault()
                that.saveMessage()
                console.log(that)


                
                
            })
        },
        saveMessage: function(){
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name,content).then(function (message) {
                let li = document.createElement('li')
                li.innerText = `${message.attributes.name}:${message.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
                myForm.querySelector('input[name=name]').value = ''
            })

        }
       


    }


    controller.init(view,model)

}.call()










//将form表单的内容提交至数据库

//将数据库中的内容显示到页面

 



