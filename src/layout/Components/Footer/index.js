import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Block from '~/components/Block';
import images from '~/assets/images';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Block colMd3 twoColumn title={'Du lịch trong nước'}>
                    <span>Hà Nội</span>
                    <span>Đà Lạt</span>
                    <span>Hải Phòng</span>
                    <span>Phan Thiết</span>
                    <span>Hạ Long</span>
                    <span>Bà Rịa - Vũng Tàu</span>
                    <span>Huế</span>
                    <span>Phú Quốc</span>
                    <span>Quảng Bình</span>
                    <span>Cần Thơ</span>
                    <span>Đà Nẵng</span>
                    <span>Hà Tiên</span>
                    <span>Quảng Nam</span>
                    <span>Bắc Kạn</span>
                    <span>Nha Trang</span>
                    <span>Hà Giang</span>
                </Block>
                <Block colMd3 twoColumn title={'Du lịch nước ngoài'}>
                    <span>Trung Quốc</span>
                    <span>Ấn Độ</span>
                    <span>Thái Lan</span>
                    <span>Philipines</span>
                    <span>Malaysia</span>
                    <span>Maldives</span>
                    <span>Singapore</span>
                    <span>Na Uy</span>
                    <span>Hàn Quốc</span>
                    <span>Tây Ban Nha</span>
                    <span>Úc</span>
                    <span>Hà Lan</span>
                    <span>Mỹ</span>
                    <span>Đức</span>
                    <span>Nhật Bản</span>
                    <span>Anh</span>
                </Block>
                <Block colMd3 oneColumn title={'Dòng tour'}>
                    <span>Cao cấp</span>
                    <span>Tiêu chuẩn</span>
                    <span>Tiết kiệm</span>
                    <span>Giá tốt</span>
                </Block>
                <Block colMd3 oneColumn title={'Thông tin'}>
                    <span>Tạp chí du lịch</span>
                    <span>Cẩm nang du lịch</span>
                    <span>Tin tức</span>
                    <span>Sitemap</span>
                    <span>FAQs</span>
                    <span>Chính sách riêng tư</span>
                    <span>Thỏa thuận sử dụng</span>
                </Block>
                <div className={cx('block')}>
                    <h4 className={cx('block-title')}>Liên hệ</h4>
                    <span>190 Pasteur, Phường Võ Thị Sáu, Quận 3, TP HCM</span>
                    <span>(+84 28) 3822 8898</span>
                    <span>(+84 28) 3829 9142</span>
                    <span>info@vietravel.com</span>
                    <h4 className={cx('block-title')}>Mạng xã hội</h4>
                    <div className={cx('media')}>
                        <a href="https://www.facebook.com/vietravel/" target="_blank" rel="noreferrer">
                            <img className={cx('mdicon')} src={images.facebook} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/vietravel/" target="_blank" rel="noreferrer">
                            <img className={cx('mdicon')} src={images.instagram} alt="Instagram" />
                        </a>
                        <a
                            href="https://invite.viber.com/?g2=AQB8wC0DUgDueEuLGo5BAeemjjx4ry%2Fe5vhdAApryxsvJron7Hxr0xmLNk%2FISS2j&lang=vi"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className={cx('mdicon')} src={images.call} alt="Viber" />
                        </a>
                        <a href="https://zalo.me/vietravel/" target="_blank" rel="noreferrer">
                            <img className={cx('mdicon')} src={images.zalo} alt="Zalo" />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCY4diIi4ZvrcZIfpLTTM11g"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className={cx('mdicon')} src={images.youtube} alt="Youtube" />
                        </a>
                    </div>
                    <div className={cx('phone')}>
                        <Button big book32 leftIcon={<FontAwesomeIcon icon={faPhone} />}>
                            1900&nbsp;1839
                        </Button>
                    </div>
                    <span>Từ 8:00 - 22:00 hàng ngày</span>
                </div>
            </div>
            <div className={cx('copy-right')}>
                <p>Bản quyền của Vietravel ® 2016. Bảo lưu mọi quyền.</p>
                <p>
                    Ghi rõ nguồn <a href="https://travel.com.vn">www.travel.com.vn</a> ® khi sử dụng lại thông tin từ
                    website này.
                </p>
                <p>Số giấy phép kinh doanh lữ hành Quốc tế: 79-234/2014/TCDL-GP LHQT</p>
            </div>
        </footer>
    );
}

export default Footer;
