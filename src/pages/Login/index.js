import { faRegistered } from '@fortawesome/free-regular-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/layout/Components/Button';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <div className={cx('form-header')}>
                    <h3>Chào mừng Quý khách đến với</h3>
                    <h2>Vietravel</h2>
                </div>
                <div className={cx('form-info')}>
                    <div className={cx('tag')}>ĐĂNG NHẬP</div>
                    <div className={cx('login-item')}>
                        <label>Số điện thoại hoặc Email &nbsp;</label>
                        <span className={cx('danger')}>*</span>
                        <input className={cx('form-control')} type="text" placeholder="Tài khoản" />
                    </div>
                    <div className={cx('login-item')}>
                        <label>Mật khẩu &nbsp;</label>
                        <span className={cx('danger')}>*</span>
                        <input className={cx('form-control')} type="password" placeholder="Mật khẩu" />
                    </div>
                    <div className={cx('br-h48')}></div>
                    <Button loginbtn rightIcon={<FontAwesomeIcon icon={faSignInAlt} />}>
                        Đăng nhập
                    </Button>
                    <div className={cx('spirit')}>Hoặc</div>
                    <Button to="/register" registerbtn rightIcon={<FontAwesomeIcon icon={faRegistered} />}>
                        Đăng ký
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;
