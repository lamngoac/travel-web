import { DefaultListLayout, DefaultLayout } from '~/layout';
import Home from '~/pages/Home';
import Travel from '~/pages/Travel';
import News from '~/pages/News';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/travel', component: Travel, layout: DefaultListLayout },
    { path: '/news', component: News, layout: DefaultLayout },
    { path: '/login', component: Login, layout: DefaultLayout },
    { path: '/register', component: Register, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
