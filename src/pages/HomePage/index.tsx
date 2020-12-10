import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import Header from '../../components/Header';
import Map from '../../components/Map';
import OrderForm from '../../components/OrderForm';
import FormContainer from '../../components/FormContainer';
import Button from '../../components/Button';
import {fetchCard as fetchCardAction} from '../../actions/card';

const WithoutCardInfo = () => (
    <div style={{width: '500px', position: 'absolute', top: '400px', left: '50%', transform: 'translateX(-50%)'}}>
        <FormContainer
            title="We don't have you card information"
            content={<Button text="Fill card info" link="/profile"/>}
        />
    </div>
);

const HomePage = ({token, cardId, fetchCard, isFetched}: any) => {
    useEffect(() => {
        if (!cardId && !isFetched) {
            fetchCard(token);
        }
    });

    return (
        <>
            <Header active="map" />
            <Map />
            {cardId ? <OrderForm /> : <WithoutCardInfo />}
        </>
    );
};

const mapStateToProps = (state: any) => ({
    token: state.auth.token,
    cardId: state.card.cardInfo.id,
    isFetched: state.card.isFetched,
});
const mapDispatchToProps = {
    fetchCard: fetchCardAction
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
