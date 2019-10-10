import { User } from './user';

export interface Client {
    domain: string;
    logo: string;
    name: string;
};

export enum PostTags {
    ANGULAR = 'ANGULAR',
    CSS = 'CSS', 
    ENZYME = 'ENZYME',
    ES6 = 'ES6', 
    ES7 = 'ES7', 
    GRAPHQL = 'GRAPHQL',
    GRUNT = 'GRUNT',
    GULP = 'GULP',
    HTML = 'HTML', 
    JASMINE = 'JASMINE',
    JAVASCRIPT = 'JAVASCRIPT', 
    JEST = 'JEST',
    JQUERY = 'JQUERY',
    NODE = 'NODE',
    PWA = 'PWA',
    REACT = 'REACT',
    REDUX = 'REDUX',
    SCSS = 'SCSS', 
    SINON = 'SINON',
    TYPESCRIPT = 'TYPESCRIPT',
    VUE = 'VUE',
    WEBPACK = 'WEBPACK',
};

export interface Post {
    _id: string;
    author: User;
    comments_counter: number;
    comments: [Comment];
    client: Client;
    description: string;
    likes_counter: number;
    likes: any[];
    slug: string;
    tags: PostTags[];
    timestamp: string;
    title: string;
};