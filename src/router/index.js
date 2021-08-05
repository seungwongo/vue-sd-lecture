import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import DataBindingString from '../views/1_databinding/DataBindingString.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingString',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingString.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtml',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingHtml.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInput',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingInput.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelect',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingSelect.vue'
      )
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckbox',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingCheckbox.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadio',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingRadio.vue'
      )
  },
  {
    path: '/databinding/textarea',
    name: 'DataBindingTextarea',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingTextarea.vue'
      )
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttribute',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingAttribute.vue'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyle',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStyle.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClass',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingClass.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingList',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingList.vue'
      )
  },
  {
    path: '/databinding/serverlist',
    name: 'DataBindingServerList',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingServerList.vue'
      )
  },
  {
    path: '/event/click',
    name: 'EventClick',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventClick.vue'
      )
  },
  {
    path: '/event/change',
    name: 'EventChange',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventChange.vue'
      )
  },
  {
    path: '/event/key',
    name: 'EventKey',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventKey.vue'
      )
  },
  {
    path: '/event/blur',
    name: 'EventBlur',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventBlur.vue'
      )
  },
  {
    path: '/assignment/usercreate',
    name: 'UserCreate',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate.vue'
      )
  },
  {
    path: '/assignment/usercreate1',
    name: 'UserCreate1',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate1.vue'
      )
  },
  {
    path: '/assignment/usercreate2',
    name: 'UserCreate2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate2.vue'
      )
  },
  {
    path: '/assignment/usercreate3',
    name: 'UserCreate3',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate3.vue'
      )
  },
  {
    path: '/assignment/usercreate4',
    name: 'UserCreate4',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate4.vue'
      )
  },
  {
    path: '/assignment/usercreate5',
    name: 'UserCreate5',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate5.vue'
      )
  },
  {
    path: '/assignment/usercreate6',
    name: 'UserCreate6',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate6.vue'
      )
  },
  {
    path: '/assignment/usercreate7',
    name: 'UserCreate7',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate7.vue'
      )
  },
  {
    path: '/assignment/usercreate8',
    name: 'UserCreate8',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate8.vue'
      )
  },
  {
    path: '/assignment/usercreate9',
    name: 'UserCreate9',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate9.vue'
      )
  },
  {
    path: '/assignment/usercreate10',
    name: 'UserCreate10',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate10.vue'
      )
  },
  {
    path: '/assignment/usercreate13',
    name: 'UserCreate13',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate13.vue'
      )
  },
  {
    path: '/assignment/usercreate15',
    name: 'UserCreate15',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate15.vue'
      )
  },
  {
    path: '/assignment/usercreate16',
    name: 'UserCreate16',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate16.vue'
      )
  },
  {
    path: '/assignment/usercreate17',
    name: 'UserCreate17',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/UserCreate17.vue'
      )
  },
  // {
  //   path: '/assignment/reuse1',
  //   name: 'ReuseComponent1',
  //   component: () =>
  //     import(
  //       /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/ReuseComponent1.vue'
  //     )
  // },
  // {
  //   path: '/assignment/reuse2',
  //   name: 'ReuseComponent2',
  //   component: () =>
  //     import(
  //       /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/ReuseComponent2.vue'
  //     )
  // },
  // {
  //   path: '/assignment/reuse3',
  //   name: 'ReuseComponent3',
  //   component: () =>
  //     import(
  //       /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/ReuseComponent3.vue'
  //     )
  // },
  // {
  //   path: '/assignment/reuse4',
  //   name: 'ReuseComponent4',
  //   component: () =>
  //     import(
  //       /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/ReuseComponent4.vue'
  //     )
  // },
  // {
  //   path: '/assignment/reuse5',
  //   name: 'ReuseComponent5',
  //   component: () =>
  //     import(
  //       /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/ReuseComponent5.vue'
  //     )
  // },
  {
    path: '/assignment/reuse6',
    name: 'ReuseComponent6',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/ReuseComponent6.vue'
      )
  },
  {
    path: '/assignment/reuse7',
    name: 'ReuseComponent7',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/ReuseComponent7.vue'
      )
  },
  // {
  //   path: '/assignment/reuse8',
  //   name: 'ReuseComponent8',
  //   component: () =>
  //     import(
  //       /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/ReuseComponent8.vue'
  //     )
  // },
  {
    path: '/assignment/reuse9',
    name: 'ReuseComponent9',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/ReuseComponent9.vue'
      )
  },
  // {
  //   path: '/assignment/reuse10',
  //   name: 'ReuseComponent10',
  //   component: () =>
  //     import(
  //       /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/ReuseComponent10.vue'
  //     )
  // },
  // {
  //   path: '/assignment/reuse11',
  //   name: 'ReuseComponent11',
  //   component: () =>
  //     import(
  //       /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/ReuseComponent11.vue'
  //     )
  // },
  {
    path: '/assignment/reuse13',
    name: 'ReuseComponent13',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/ReuseComponent13.vue'
      )
  },
  {
    path: '/assignment/reuse15',
    name: 'ReuseComponent15',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/ReuseComponent15.vue'
      )
  },
  {
    path: '/assignment/reuse17',
    name: 'ReuseComponent17',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "assignment" */ '../views/8_assignment/ReuseComponent17.vue'
      )
  },
  {
    path: '/extra/computed',
    name: 'Computed',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "extra" */ '../views/3_extra/Computed.vue'
      )
  },
  {
    path: '/extra/watch',
    name: 'Watch',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "extra" */ '../views/3_extra/Watch.vue'
      )
  },
  {
    path: '/reuse/component1',
    name: 'ReuseComponent1',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "reuse" */ '../views/4_reuse/ReuseComponent1.vue'
      )
  },
  {
    path: '/reuse/component2',
    name: 'ReuseComponent2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "reuse" */ '../views/4_reuse/ReuseComponent2.vue'
      )
  },
  {
    path: '/reuse/slot',
    name: 'Slot',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "reuse" */ '../views/4_reuse/Slot.vue'
      )
  },
  {
    path: '/advanced/mixin',
    name: 'Mixin',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "advanced" */ '../views/5_advanced/Mixin.vue'
      )
  },
  {
    path: '/advanced/custom',
    name: 'CustomDirective',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "advanced" */ '../views/5_advanced/CustomDirective.vue'
      )
  },
  {
    path: '/advanced/plugin',
    name: 'Plugin',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "advanced" */ '../views/5_advanced/Plugin.vue'
      )
  },
  {
    path: '/vuex/store',
    name: 'StoreAccess',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/6_vuex/StoreAccess.vue'
      )
  },
  {
    path: '/vuex/store2',
    name: 'StoreAccess2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/6_vuex/StoreAccess2.vue'
      )
  },
  {
    path: '/template/create',
    name: 'Create',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/Create.vue'
      )
  },
  {
    path: '/template/listtodetail',
    name: 'ListToDetail',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/ListToDetail.vue'
      )
  },
  {
    path: '/template/listtodetail2',
    name: 'ListToDetail2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/ListToDetail2.vue'
      )
  },
  {
    path: '/template/detail',
    name: 'Detail',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/Detail.vue'
      )
  },
  {
    path: '/template/15/singleviewedit',
    name: 'SingleViewEdit',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/15/SingleViewEdit.vue'
      )
  },
  {
    path: '/template/15/singleviewedit2',
    name: 'SingleViewEdit2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/15/SingleViewEdit2.vue'
      )
  },
  {
    path: '/template/15/singleviewedit3',
    name: 'SingleViewEdit3',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/15/SingleViewEdit3.vue'
      )
  },
  {
    path: '/template/9/singleviewedit',
    name: 'SingleViewEdit',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/9/SingleViewEdit.vue'
      )
  },
  {
    path: '/template/9/singleviewedit2',
    name: 'SingleViewEdit2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/9/SingleViewEdit2.vue'
      )
  },
  {
    path: '/template/13/singleviewedit2',
    name: 'SingleViewEdit2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/13/SingleViewEdit2.vue'
      )
  },
  {
    path: '/template/13/singleviewedit3',
    name: 'SingleViewEdit3',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/13/SingleViewEdit3.vue'
      )
  },
  {
    path: '/template/6/singleviewedit2',
    name: 'SingleViewEdit2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/6/SingleViewEdit2.vue'
      )
  },
  {
    path: '/template/6/singleviewedit3',
    name: 'SingleViewEdit3',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/6/SingleViewEdit3.vue'
      )
  },
  {
    path: '/template/14/singleviewediteqp',
    name: 'SingleViewEditEqp',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/14/SingleViewEditEqp.vue'
      )
  },
  {
    path: '/template/14/singlevieweditproduct',
    name: 'SingleViewEditProduct',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/14/SingleViewEditProduct.vue'
      )
  },
  {
    path: '/template/10/singleviewedit4',
    name: 'SingleViewEdit4',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/10/SingleViewEdit4.vue'
      )
  },
  {
    path: '/template/7/singleviewedit2',
    name: 'SingleViewEdit2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/7/SingleViewEdit2.vue'
      )
  },
  {
    path: '/template/15/listtodetail3',
    name: 'ListToDetail3',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/15/ListToDetail3.vue'
      )
  },
  {
    path: '/uitemplate/create3',
    name: 'Create3',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/15/Create3.vue'
      )
  },
  {
    path: '/template/14/listtodetail',
    name: 'ListToDetailProduct',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/14/ListToDetailProduct.vue'
      )
  },
  {
    path: '/uitemplate/detailproduct',
    name: 'DetailProduct',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "store" */ '../views/9_utitemplate/14/DetailProduct.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
