import classNames from 'classnames/bind';
import styles from './DefaultListLayout.module.scss';

import Header from '~/layout/Components/Header';
import Footer from '~/layout/Components/Footer';
import SidebarBig from '~/layout/Components/SidebarBig';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SidebarBig />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
