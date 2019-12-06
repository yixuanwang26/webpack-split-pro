import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import Nav from '@/components/nav';
import styles from './index.less';

ReactDom.render(
    <div className={styles.globListPage}>
        <Nav />
       hello webpack, { _.join(['hello', 'webpack!!', 'globListxixixixi'], ' ') }
       <ul className={styles.globList}>
           <li>
               <p>第一篇文章嘻嘻嘻嘻嘻嘻嘻嘻想</p>
               <a href='./globDetail.html?titleId=1'>详情</a>
            </li>
           <li>
               <p>第二篇文章哈哈哈哈哈哈哈呵呵呵呵呵</p>
               <a href='./globDetail.html?titleId=2'>详情</a>
            </li>
       </ul>
    </div>, 
    document.getElementById('root')
)