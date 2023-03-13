import Home from '~/pages/Home';
import Travel from '~/pages/Travel';
import News from '~/pages/News';
import { DefaultListLayout } from '~/layout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/travel', component: Travel, layout: DefaultListLayout },
    { path: '/news', component: News, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
