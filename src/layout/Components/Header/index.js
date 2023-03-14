import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
//import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import Button from '~/layout/Components/Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')} to="/">
                    <img className={cx('logo-img')} src={images.logo} alt="Vietravel Logo" />
                </Link>
                <div className={cx('function')}>
                    <div className={cx('action')}>
                        <Button menuitbtn dropdowntoggle>
                            Du lịch
                        </Button>
                        <Button menuitbtn>Non nước Việt Nam</Button>
                        <Button menuitbtn dropdowntoggle>
                            Vận chuyển
                        </Button>
                        <Button menuitbtn dropdowntoggle>
                            Tin tức
                        </Button>
                        <Button menuitbtn dropdowntoggle>
                            Khuyến mãi
                        </Button>
                        <Button menuitbtn dropdowntoggle>
                            Giới thiệu
                        </Button>
                        <Button menuitbtn> Liên hệ</Button>
                    </div>
                    <div className={cx('search')}>
                        <input placeholder="Bắt đầu tìm kiếm..." spellCheck={false} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className={cx('info')}>
                        <Button userinfobtn to="/login">
                            <FontAwesomeIcon icon={faUser} />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
