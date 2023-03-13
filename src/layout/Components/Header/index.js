import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
//import { Link } from 'react-router-dom';
//import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import Button from '~/layout/Components/Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img className={cx('logo-img')} src={images.logo} alt="Vietravel Logo" />
                </div>
                <div className={cx('function')}>
                    <div className={cx('action')}>Info</div>
                    <div className={cx('search')}>
                        <input placeholder="Bắt đầu tìm kiếm..." spellCheck={false} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className={cx('info')}>
                        <Button userinfobtn>
                            <FontAwesomeIcon icon={faUser} />
                        </Button>
                    </div>
                    <div className={cx('info')}>
                        <Button primary>Test Button</Button>
                    </div>
                    <div className={cx('info')}>
                        <Button outline32>Test Button</Button>
                    </div>
                    <div className={cx('info')}>
                        <Button book32>Test Button</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
