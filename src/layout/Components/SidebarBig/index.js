import classNames from 'classnames/bind';
import styles from './SidebarBig.module.scss';

const cx = classNames.bind(styles);

function SidebarBig() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Search</h2>
        </aside>
    );
}

export default SidebarBig;
