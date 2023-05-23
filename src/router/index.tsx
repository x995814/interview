import Admin from "../views/admin";
import Error from "../views/error";
import MenuOne from "../views/admin/menuOne";
import MenuTwo from "../views/admin/menuTwo";

// 路由
export const routes = [
  {
    path: "/", //首页
    element: <Admin></Admin>,
    children: [
      {
        path: "menu-one", //菜单一页面
        element: <MenuOne></MenuOne>,
      },
      {
        path: "menu-two", //菜单二页面
        element: <MenuTwo></MenuTwo>,
      },
      {
        path: "",
        redirect: "menu-one",
      },
    ],
  },
  {
    path: "/error", //错误页面
    element: <Error></Error>,
  },
];

//路由守卫
export const beforeRouter = async () => {
  
};
