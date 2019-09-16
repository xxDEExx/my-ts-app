export const USER_TYPE = {
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    USER: 'USER'
}

const { ADMIN, MANAGER, USER } = USER_TYPE;

export const routing = {
    dashboard: {
        path: '/',
        icon: '',
        key: 1,
        isPrivate: true,
        access: [ADMIN]
    },
    aboutus: {
        path: '/aboutus',
        icon: '',
        key: 2,
        isPrivate: true,
        access: [ADMIN, MANAGER, USER]
    },
    login: {
        path: '/login',
        key: 3,
        isPrivate: false
    },
    forbidden: {
        path: '/403',
        key: 4,
        isPrivate: false
    }
};
