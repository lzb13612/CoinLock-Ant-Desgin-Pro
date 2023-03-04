export default [
  {
    path: '/create',
    name: 'create',
    icon: 'smile',
    component: './Create',
  },
  {
    path: '/robot',
    name: 'robot',
    icon: 'smile',
    component: './Robot',
  },
  {
    path: '/lock',
    name: 'lock',
    icon: 'smile',
    component: './Lock',
  },
  {
    path: '/popular',
    name: 'popular',
    icon: 'smile',
    component: './Popular',
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Admin',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  {
    path: '/',
    redirect: '/create',
  },
  {
    component: './404',
  },
];
