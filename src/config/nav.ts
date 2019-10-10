export const links = [
    {
        classNames: 'nav__button icon icon--notification',
        icon: 'notification',
        userSpecific: true,
    },
    {
        classNames: 'nav__button',
        to: '/user',
        text: 'my account',
        userSpecific: true,
    },
    {
        classNames: 'nav__link icon icon--home',
        to: '/',
        text: 'home',
        userSpecific: false,
    },
    {
        classNames: 'nav__link icon icon--work',
        to: '/posts',
        text: 'posts',
        userSpecific: false,
    },
    // {
    //     classNames: 'nav__link icon icon--login',
    //     to: '/sign-in',
    //     text: 'sign-in',
    //     userSpecific: false,
    // },
    {
        classNames: 'nav__button icon icon--logout',
        text: 'sign out',
        userSpecific: true,
    },
]