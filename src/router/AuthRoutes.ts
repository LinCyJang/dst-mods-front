const AuthRoutes = {
    path: '/auth',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    meta: {
        requiresAuth: false
    },
    children: [
        {
            name: 'AUTH-Login',
            path: '/auth/login',
            component: () => import('@/views/auth/Login.vue')
        },
        {
            name: 'AUTH-Register',
            path: '/auth/register',
            component: () => import('@/views/auth/Register.vue')
        },
    ]
};

export default AuthRoutes;
