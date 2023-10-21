import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"

const routes = [{
    path: "/",
    component : Home,
    name : "Home",
}]

const router = createRouter ({
    history : createWebHistory(),
    linkActiveClass: "active",
    scrollBehavior(to, from, savePosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return { x:0, y: 0}; //go to the top of the page if no hash
    },
    routes,
});

export default router ;