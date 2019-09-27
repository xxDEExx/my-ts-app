// Routes
import dashboard from 'routes/dashboard';
import aboutUs from 'routes/aboutUs';

export const USER_TYPE = {
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    USER: 'USER'
}

const { ADMIN, MANAGER, USER } = USER_TYPE;

export const routing = {
    dashboard: {
        path: '/',
        isPrivate: true,
        access: [ADMIN],
        component: dashboard
    },
    aboutUs: {
        path: '/aboutUs',
        isPrivate: true,
        access: [ADMIN, MANAGER, USER],
        component: aboutUs
    },
    login: {
        path: '/login',
        isPrivate: false
    }
};
