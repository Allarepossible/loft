import React from 'react';
import {connect} from 'react-redux';

import {register} from '../../actions/register';

import {Wrapper} from './styles';

const OrderForm = () => (
    <Wrapper>
        <form onSubmit={() => {}}>
            <label htmlFor="to">Куда едем? </label>
            <input id="ещ" type="password" name="password" size={28} />
            <button type="submit">Log in</button>
        </form>
    </Wrapper>
);

const mapStateToProps = (state: any) => ({error: state.user.error});
const mapDispatchToProps = {reg: register};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
