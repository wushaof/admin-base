import { appRouter } from '../router/router';
import {
  MENU_LIST
} from './types'

const state = {
  menuList: []    //左側菜單
}

const mutations = {
  [MENU_LIST](state){
    var menuList = [];
    appRouter.forEach((item, index) => {
      menuList.push(item)
    });
    state.menuList = menuList;
  }
}

const getters = {
  getMenuList(state){
    return state.menuList
  }
}

export default {
  state,
  mutations,
  getters
}
