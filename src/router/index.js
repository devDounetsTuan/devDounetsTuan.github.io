import Vue from 'vue'
import Router from 'vue-router'
import BookList from '../components/BookList.vue'
import AddBook from '../components/AddBook.vue'
/* import ShowBoard from '@/components/ShowBoard'
import AddBoard from '@/components/AddBoard'
import EditBoard from '@/components/EditBoard' */
Vue.use(Router)


export default new Router({
    routes: [
      {
        path: '/addbook',
        name: 'AddBook',
        component: AddBook
      },
      {
        path: '/',
        name: 'BookList',
        component: BookList
      }
     /*  {
        path: '/show-board/:id',
        name: 'ShowBoard',
        component: ShowBoard
      },
     
      {
        path: '/edit-board/:id',
        name: 'EditBoard',
        component: EditBoard
      } */
    ]
  })