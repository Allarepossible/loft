import React from 'react';

import Input from '../Input';
import Button from '../Button';
import {Image} from '../LogoImages';
import FormContainer from '../FormContainer';

import {Wrapper, Form, Row, Column, CardInfo, Number, ButtonWrapper} from './styles';

const Content = ({onSubmit}: any) => (
    <Form onSubmit={onSubmit}>
        <Row gap="100px">
            <Column>
                <Input type="text" name="name" placeholder="IVANOV IVAN" label="Surname Name" />
                <Input type="text" name="number" placeholder="0000 0000 0000 0000" label="Card number" />
                <Row gap="50px">
                    <Input type="text" name="date" placeholder="00/00" label="MM/YY" />
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

const ProfileForm = () => (
    <Wrapper>
        <FormContainer
            title="Profile"
            padding="60px 40px"
            subtitle="Add your payment cart"
            content={<Content onSubmit={() => {}} />}
        />
    </Wrapper>
);

export default ProfileForm;
