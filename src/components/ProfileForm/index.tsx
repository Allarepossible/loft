import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import Input from '../Input';
import Button from '../Button';
import {Image} from '../LogoImages';
import FormContainer from '../FormContainer';

import {Wrapper, Form, Row, Column, CardInfo, Number, ButtonWrapper} from './styles';
import {fetchCard as fetchCardAction, addCard as addCardAction} from "../../actions/card";

const Content = ({onSubmit}: any) => (
    <Form onSubmit={onSubmit}>
        <Row gap="100px">
            <Column>
                <Input type="text" name="cardName" placeholder="IVANOV IVAN" label="Surname Name" />
                <Input type="text" name="cardNumber" placeholder="0000 0000 0000 0000" label="Card number" />
                <Row gap="50px">
                    <Input type="text" name="expiryDate" placeholder="00/00" label="MM/YY" />
                    <Input type="text" name="cvc" placeholder="000" label="CVC" />
                </Row>
            </Column>
            <Column>
                <CardInfo>
                    <Image size="small" />
                    <Number>0000  0000  0000  0000</Number>
                </CardInfo>
            </Column>
        </Row>
        <ButtonWrapper><Button text="Save" /></ButtonWrapper>
    </Form>
);

const ProfileForm = ({token, fetchCard, addCard, isFetched}: any) => {
    useEffect(() => {
        if (!isFetched) {
            fetchCard(token);
        }
    });

    return (
        <Wrapper>
            <FormContainer
                title="Profile"
                padding="60px 40px"
                subtitle="Add your payment cart"
                content={<Content onSubmit={(e: any) => {
                    e.preventDefault();
                    const {cardName, cardNumber, expiryDate, cvc} = e.target;
                    addCard({
                        token,
                        cardName: cardName.value,
                        cardNumber: cardNumber.value,
                        expiryDate: expiryDate.value,
                        cvc: cvc.value,
                    })
                }}/>}
            />
        </Wrapper>
    );
};

const mapStateToProps = (state: any) => ({
    token: state.auth.token,
    isFetched: state.card.isFetched,
});
const mapDispatchToProps = {
    fetchCard: fetchCardAction,
    addCard: addCardAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
