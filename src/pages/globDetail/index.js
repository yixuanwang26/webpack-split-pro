import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import styles from './index.less';
import liu from '@/assets/liu.jpeg';

ReactDom.render(
    <div className={styles.globDetailPage}>
       hello webpack, { _.join(['hello', 'webpack!!', 'globDetailxixixixi'], ' ') }
       <img src={liu} />
    </div>, 
    document.getElementById('root')
)