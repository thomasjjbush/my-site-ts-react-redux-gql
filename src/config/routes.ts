import { Home } from './../views/home/home';
import { Post } from './../views/post/post';
import { Posts } from './../views/posts/posts';
import SignIn from './../views/sign-in/sign-in';
import { SignUp } from './../views/sign-up/sign-up';
import { User } from './../views/user/user';

interface Route {
    component: any;
    exact: boolean;
    path: string;
}

export const routes: Route[] = [
    {
        component: Home,
        exact: true,
        path: '/',
    },
    {
        component: Posts,
        exact: true,
        path: '/posts',
    },
    {
        component: Post,
        exact: true,
        path: '/posts/:id',
    },
    {
        component: User,
        exact: true,
        path: '/my-account',
    },
    {
        component: SignIn,
        exact: true,
        path: '/sign-in',
    },
    {
        component: SignUp,
        exact: true,
        path: '/sign-up',
    },
];