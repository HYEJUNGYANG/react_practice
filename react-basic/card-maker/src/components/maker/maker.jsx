import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
    const historyState = useHistory().state;
    const [cards, setCards] = useState({});

    const [userId, setUserId] = useState(historyState && historyState.id);

    const history = useHistory();
    const onLogout = () => {
        if (window.confirm('로그아웃 하시겠습니까?')) {
            authService.logout();
        }
    };

    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = cardRepository.syncCards(userId, (cards) => {
            setCards(cards);
        });
        return () => stopSync();
    }, [userId, cardRepository]);

    // 로그인 관련 useEffect()
    useEffect(() => {
        authService.onAuthChange((user) => {
            if (user) {
                setUserId(user.uid);
            } else {
                history.push('/');
            }
        });
    }, [authService, userId, history]);

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
        cardRepository.saveCard(userId, card);
    };

    const deleteCard = (card) => {
        setCards((cards) => {
            const updated = { ...cards };
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId, card);
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor
                    FileInput={FileInput}
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
