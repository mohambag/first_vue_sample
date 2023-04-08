import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "@/components/HomePage.vue";
import PostsPage from "@/components/pages/posts/index.vue"
import UsersPage from "@/components/pages/users/index.vue";
import ShowUser from "@/components/pages/users/ShowUser.vue";
import ShowPost from "@/components/pages/posts/ShowPost.vue";
import templatePost from "@/components/pages/posts/templatePost.vue";
import CreatePost from "@/components/pages/posts/CreatePost.vue";
import UpdatePost from "@/components/pages/posts/EditPost.vue"

const routes = [
    {path: '/', name: 'home', component: HomePage},
    {path: '/users', name: 'users', component: UsersPage},
    {path: '/users/:id', name: 'userin', component: ShowUser},

    {
        path: '/posts', name: 'posts', component: templatePost, children: [
            {path: '', name: 'postIndex', component: PostsPage},
            {path: '/:id', name: 'postin', component: ShowPost},
            {path:'/create',name:'createPost',component: CreatePost},
            {path:'/update/:id',name:'updatePost',component: UpdatePost}
        ]
    },

    // {path: '/posts', name: 'posts', component:PostsPage }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router;