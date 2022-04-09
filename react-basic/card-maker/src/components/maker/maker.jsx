import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState({
        1: {
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
        2: {
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
        3: {
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
    });

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

    const createOrUpdateCard = (card) => {
        // setCards를 부를 때, 바로 이 시점에 cards의 상태를 그대로 복사해와서
        // card.id를 이용하여 오브젝트 안에 있는 키를 이용해서 해당하는 그 키에
        // 새로 업데이트 되는 card를 변경해주고
        // 업데이트 되는 updated를 return
        setCards((cards) => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
    };

    const deleteCard = (card) => {
        setCards((cards) => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor
                    cards={cards}
                    addCard={createOrUpdateCard}
                    updateCard={createOrUpdateCard}
                    deleteCard={deleteCard}
                />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;
