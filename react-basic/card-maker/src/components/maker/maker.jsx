import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const history = useHistory();
    const onLogout = () => {
        if (window.confirm('로그아웃 하시겠습니까?')) {
            authService.logout();
        }
    };

    useEffect(() => {
        authService.onAuthChange((user) => {
            if (!user) {
                history.push('/');
            }
        });
    });
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <Footer />
        </section>
    );
};

export default Maker;
