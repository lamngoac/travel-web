import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline32 = false,
    book32 = false,
    userinfobtn = false,
    menuitbtn = false,
    dropdowntoggle = false,
    big = false,
    disabled = false,
    leftIcon = false,
    rightIcon = false,
    loginbtn = false,
    registerbtn = false,
    className,
    children,
    onClick,
    passProps,
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof [key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        userinfobtn,
        primary,
        outline32,
        book32,
        menuitbtn,
        dropdowntoggle,
        disabled,
        big,
        loginbtn,
        registerbtn,
        leftIcon,
        rightIcon,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
