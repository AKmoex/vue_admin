import Vue from 'vue'

import { Button } from 'element-ui'
import {Container} from 'element-ui'
import {Aside} from 'element-ui'
import {Menu} from 'element-ui'
import {Submenu} from 'element-ui'
import {MenuItemGroup} from 'element-ui'
import {MenuItem} from 'element-ui'
import {Header} from 'element-ui'
import {Dropdown} from 'element-ui'
import {DropdownMenu} from 'element-ui'
import {DropdownItem} from 'element-ui'
import {Main} from 'element-ui'
import {Table} from 'element-ui'
import {TableColumn} from 'element-ui'
import {Form} from 'element-ui'
import {FormItem} from 'element-ui'
import {Input} from 'element-ui'
import {Select} from 'element-ui'
import {Option} from 'element-ui'
import {Upload} from 'element-ui'

Vue.use(Upload)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Header)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Main)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
import { Message } from 'element-ui'
Vue.prototype.$message = Message
import { MessageBox } from 'element-ui';
Vue.prototype.$confirm=MessageBox.confirm