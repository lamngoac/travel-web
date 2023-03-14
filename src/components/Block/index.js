import classNames from 'classnames/bind';
import styles from './Block.module.scss';

const cx = classNames.bind(styles);

function Block({
    colMd3 = false,
    colMd6 = false,
    col6 = false,
    col12 = false,
    twoColumn = false,
    oneColumn = false,
    contactBlock = false,
    className,
    title,
    children,
    onClick,
    passProps,
}) {
    const props = {
        onClick,
        ...passProps,
    };

    const classes = cx('wrapper', {
        [className]: className,
        colMd3,
        colMd6,
        col6,
        col12,
        oneColumn,
        twoColumn,
        contactBlock,
    });

    //var childrens0 = null;
    var childrens1 = null;
    var childrens2 = null;

    if (twoColumn) {
        // generate first half of children to item  1
        // eslint-disable-next-line array-callback-return
        childrens1 = children.map((child, index) => {
            if (index % 2 === 0) {
                return (
                    <div className={cx('item')} key={index}>
                        {child}
                    </div>
                );
            }
        });

        // generate second half of children to item 2
        // eslint-disable-next-line array-callback-return
        childrens2 = children.map((child, index) => {
            if (index % 2 !== 0) {
                return (
                    <div className={cx('item')} key={index}>
                        {child}
                    </div>
                );
            }
        });
    }

    if (oneColumn) {
        childrens1 = children.map((child, index) => {
            return (
                <div className={cx('item')} key={index}>
                    {child}
                </div>
            );
        });
    }

    if (oneColumn || twoColumn) {
        return (
            <div className={classes} {...props}>
                <h4 className={cx('title')}>{title}</h4>
                <div className={cx('menu')}>{childrens1}</div>
                <div className={cx('menu')}>{childrens2}</div>
            </div>
        );
    }

    if (contactBlock) {
        return (
            <div className={classes} {...props}>
                <h4 className={cx('title')}>{title}</h4>
                <div className={cx('menu')}>{children}</div>
            </div>
        );
    }
    // return (
    //     <div className={classes} {...props}>
    //         <h4 className={cx('title')}>{title}</h4>
    //         <div className={cx('menu')}>{childrens1}</div>
    //         <div className={cx('menu')}>{childrens2}</div>
    //     </div>
    // );
}

export default Block;
