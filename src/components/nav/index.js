// 导航栏
import React from 'react';
import styles from './index.less';


export default class Nav extends React.Component {
    render() {
        return (
            <div className={styles.navComp}>
                <ul>
                    <li><a href='./index.html'>首页</a></li>
                    <li><a href='./globList.html'>我的博客</a></li>
                </ul>
            </div>
        )
    }
}
