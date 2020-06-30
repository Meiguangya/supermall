import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


const Home = () => import('views/home/Home')
import Cart from 'views/cart/Cart';



const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;