const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: true
    },
    redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'HOME-Dashboard',
            path: '/',
            component: () => import('@/views/dashboard/index.vue')
        },
        {
            name: 'DST-Mods',
            path: '/dst/mods',
            component: () => import('@/views/mods/index.vue')
        },
        {
            name: 'DST-Rooms',
            path: '/dst/rooms',
            component: () => import('@/views/rooms/index.vue')
        },
        {
            name: 'UTILTIES-Typography',
            path: '/ui/typography',
            component: () => import('@/views/components/Typography.vue')
        },
        {
            name: 'UTILTIES-Shadow',
            path: '/ui/shadow',
            model: 'UTILTIES',
            component: () => import('@/views/components/Shadow.vue')
        },
        {
            name: 'EXTRA-Icons',
            path: '/icons',
            component: () => import('@/views/pages/Icons.vue')
        },
        {
            name: 'EXTRA-Starter',
            path: '/sample-page',
            component: () => import('@/views/pages/SamplePage.vue')
        },
    ]
};

export default MainRoutes;
