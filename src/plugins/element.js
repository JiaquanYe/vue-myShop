import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// 把Message挂载到Vue的原型对象上,后面可通过this，访问$message,从而访问Message
// $message中的message是自定义的，合法即可
Vue.prototype.$message = Message
