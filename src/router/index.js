import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/general/Home.vue'
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
    /*****************************************************
    ******************************************************
    ******************************************************
    ROUTES USUARIOS NO INSCRITOS: INDEX - LOG/REG - POLITICAS
    *******************************************************
    *******************************************************
    ******************************************************/
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component:() => import('../views/general/Login'),
    },
    {
      path: '/registro',
      name: 'Register',
      component:() => import('../views/general/Register'),
    },
    {
      path: '/formulario-horeca',
      name: 'FormHoreca',
      component:() => import('../views/general/FormHoreca'),
    },
    {
      path: '/cookies',
      name: 'Cookies',
      component:() => import('../views/general/Cookies'),
    },
    {
      path: '/privacidad-general',
      name: 'PrivacidadGeneral',
      component:() => import('../views/general/PrivacidadGeneral'),
    },
    {
      path: '/registro-actividades',
      name: 'RegistroActividades',
      component:() => import('../views/general/RegistroActividades'),
    },

    /*****************************************************
    ******************************************************
    ******************************************************
    ROUTES PARA HORECA - ADMIN - GENERAL - BÚSQUEDA
    *******************************************************
    *******************************************************
    ******************************************************/

    //HORECA : ADMIN
    {
      path: '/horeca/admin-index',
      name: 'IndexAdmHORECA',
      component:() => import('../views/horeca/admin/IndexAdmHO'),
      meta: {requireAuth: true}
    },
    {
      path: '/horeca/admin-general-info',
      name: 'GenInfAdmHORECA',
      component:() => import('../views/horeca/admin/GenInfAdmHO'),
      meta: {requireAuth: true}
    },
    {
      path: '/horeca/admin-establecimientos',
      name: 'HOAdminEstablecimientos',
      component:() => import('../views/horeca/admin/HOAdmEST'),
      meta: {requireAuth: true}
    },
    {
      path: '/horeca/admin-seguridad',
      name: 'SecAdmHORECA',
      component:() => import('../views/horeca/admin/SecAdmHO'),
      meta: {requireAuth: true}
    },
    {
      path: '/horeca/admin-favoritos',
      name: 'MyFavHORECA',
      component:() => import('../views/horeca/admin/MyFavHO'),
      meta: {requireAuth: true}
    },

    //RUTAS HORECA:  INICIO, FAQ y BÚSQUEDAS
    {
      path: '/horeca/index',
      name: 'IndexHORECA',
      component:() => import('../views/horeca/IndexHO'),
      meta: {requireAuth: true}
    },
    {
      path: '/horeca/faq',
      name: 'FaqHORECA',
      component:() => import('../views/horeca/FaqHO'),
      meta: {requireAuth: true}
    },

    /*****************************************************
    ******************************************************
    ******************************************************
    ROUTES PARA PRODUCTORES - ADMIN - GENERAL - BÚSQUEDA
    *******************************************************
    *******************************************************
    ******************************************************/

    //PRODUCTORES : ADMIN
    {
      path: '/productor/admin-index',
      name: 'IndexAdmPro',
      component:() => import('../views/productor/admin/IndexAdmPro'),
      meta: {requireAuth: true}
    },
    {
      path: '/productor/admin-general-info',
      name: 'GenInfAdmPro',
      component:() => import('../views/productor/admin/GenInfAdmPro'),
      meta: {requireAuth: true}
    },
    {
      path: '/productor/admin-productos',
      name: 'ProductsAdminPro',
      component:() => import('../views/productor/admin/ProAdmPro'),
      meta: {requireAuth: true}
    },
    {
      path: '/productor/admin-seguridad',
      name: 'SecAdmPro',
      component:() => import('../views/productor/admin/SecAdmPro'),
      meta: {requireAuth: true}
    },
    {
      path: '/productor/admin-favoritos',
      name: 'MyFavPro',
      component:() => import('../views/productor/admin/MyFavPro'),
      meta: {requireAuth: true}
    },

    //RUTAS PRODUCTORES:  INICIO, FAQ y BÚSQUEDAS
    {
      path: '/productor/index',
      name: 'IndexProductor',
      component:() => import('../views/productor/IndexProductor'),
      meta: {requireAuth: true}
    },
    {
      path: '/productor/faq',
      name: 'FAQProductor',
      component:() => import('../views/productor/FaqProductor'),
      meta: {requireAuth: true}
    },

    // {
    //   path: '/resultados/productores',
    //   name: 'ResultadosP',
    //   component:() => import('../views/productor/ResultadosHoreca'),
    //   meta: {requireAuth: true}
    // },
    // {
    //   path: '/resultados/ficha-horeca/:id',
    //   name: 'FichaP',
    //   component:() => import('../views/productor/ResultadosHoreca'),
    //   meta: {requireAuth: true}
    // },
    
    /*****************************************************
    ******************************************************
    ******************************************************
    ROUTES PARA PRODUCTORES - ADMIN - GENERAL - BÚSQUEDA
    *******************************************************
    *******************************************************
    ******************************************************/
    
    //ADMINS: ADMINISTRACIÓN GENERAL 
    {
      path: '/admin/index',
      name: 'AdminIndex',
      component:() => import('../views/admin/AdminIndex'),
      //meta: {requireAuth: true }
    },
    {
      path: '/admin/userlist',
      name: 'AdminUserlistado',
      component:() => import('../views/admin/AdminUserlist'),
      //meta: {requireAuth: true }
    },
    {
      path: '/admin/tareas-pendientes',
      name: 'AdminPendingTask',
      component:() => import('../views/admin/AdminPendingTask'),
      //meta: {requireAuth: true }
    },

    // {
    //   path: '/buscador/productores',
    //   name: 'ResultadosProductores',
    //   component:() => import('../views/horeca/ResultadosProductores'),
    //   meta: {requireAuth: true}
    // },
    // {
    //   path: '/buscador/ficha-productor/:id',
    //   name: 'FichaP',
    //   component:() => import('../views/horeca/ResultadosProductores'),
    //   meta: {requireAuth: true}

    // },

    // {
    //   path: '/resultados/ficha-admin/:id',
    //   name: 'FichaAdmin',
    //   component:() => import('../views/admin/FichaAdmin'),
    //   meta: {requireAuth: true}
    // },
    // {
    //   path: '/resultados/horeca',
    //   name: 'ResultadosP',
    //   component:() => import('../views/productor/ResultadosHoreca'),
    //   meta: {requireAuth: true}
    // },
    // {
    //   path: '/resultados/ficha-horeca/:id',
    //   name: 'FichaP',
    //   component:() => import('../views/productor/ResultadosHoreca'),
    //   meta: {requireAuth: true}
    //},
  ]
})

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requireAuth);

  if(rutaProtegida && store.state.token === '') {
    next({name: 'Login'})
  } else {
    next()
  }
  // if(rutaProtegida && (store.state.usuarioDB.usuario.role === "ADMIN_ROLE") ) {
  //   next()
  // }
})

export default router;