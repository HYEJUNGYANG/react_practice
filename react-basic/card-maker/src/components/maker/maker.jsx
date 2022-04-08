import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Jung',
            company: 'none',
            theme: 'light',
            title: 'Software Engineer',
            email: 'jung@naver.com',
            message: 'go for it',
            fileName: 'jung',
            fileURL: null,
        },
        {
            id: '2',
            name: 'Jung',
            company: 'none',
            theme: 'dark',
            title: 'Software Engineer',
            email: 'jung@naver.com',
            message: 'go for it',
            fileName: 'jung',
            fileURL: null,
        },
        {
            id: '3',
            name: 'Jung',
            company: 'none',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'jung@naver.com',
            message: 'go for it',
            fileName: 'jung',
            fileURL: null,
        },
    ]);
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
            <div className={styles.container}>
                <Editor cards={cards} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;
