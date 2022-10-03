import Dashboard from './Components/Dashboard.vue';
import Contact from './Components/Contact.vue';

export default [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            active: 'dashboard'
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    }
];

