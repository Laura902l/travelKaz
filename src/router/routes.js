const routes = [
  {
    path: "/",
    component: () => import("src/pages/HomePage.vue"),
  },
  {
    path: "/registration",
    component: () => import("src/pages/Registration.vue"),
  },
  {
    path: "/login",
    component: () => import("src/pages/Login.vue"),
  },
  {
    path: "/test",
    component: () => import("src/pages/BackendTest.vue"),
  },
  {
    path: "/about",
    component: () => import("src/pages/AboutUs.vue"),
  },
  {
    path: "/contact",
    component: () => import("src/pages/ContactUs.vue"),
  },
  {
    path: "/profile/:username",
    component: () => import("src/pages/UserProfile.vue"),
    props: true,
  },

  {
    path: "/city",
    children: [
      {
        path: "astana",
        component: () => import("src/cities/Astana.vue"),
      },
      {
        path: "almaty",
        component: () => import("src/cities/Almaty.vue"),
      },
      {
        path: "shymkent",
        component: () => import("src/cities/Shymkent.vue"),
      },
      {
        path: "kokshetau",
        component: () => import("src/cities/Kokshetau.vue"),
      },
      {
        path: "atyrau",
        component: () => import("src/cities/Atyrau.vue"),
      },
      {
        path: "aktau",
        component: () => import("src/cities/Aktau.vue"),
      },
      {
        path: "aktobe",
        component: () => import("src/cities/Aktobe.vue"),
      },
    ],
  },
  {
    path: "/air",
    children: [
      {
        path: "city",
        component: () => import("src/components/Flights/Flights.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
