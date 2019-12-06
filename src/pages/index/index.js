import React from 'react';
import ReactDom from 'react-dom';
import styles from './index.less';
import Nav from '@/components/nav';

ReactDom.render(
    <div className={styles.indexPage}>
        <Nav />
        hello webpack, index
    </div>, 
    document.getElementById('root')
)