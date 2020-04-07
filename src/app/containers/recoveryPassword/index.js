import React, { Component } from 'react';

import Title from '../../components/text/title';
import Input from '../../components/inputs/simple';
import Button from '../../components/button/simple';

export default class RecoveryPassword extends Component {

    state = {
        email: '',
    }

    onChangeInput = (field, ev) => {
        this.setState({
            [field]: ev.target.value
        })
    }

    render() {
        const { email } = this.state
        return (
            <div className="recoveryPassword">
                <Title type="h1" content="Loja TI" />
                <br />
                <div>
                    <p>Para reiniciar a sua senha, digite seu email abaixo</p>
                    <p>iremos enviar um link para você alterar sua senha</p>
                </div>
                <br />
                <div>
                    <Input label='E-mail' value={email} onChange={(ev) => this.onChangeInput("email", ev)} type="email" />
                </div>
                <br />
                <div>
                    <Button
                        type="success"
                        rota='/resetPassword/1'
                        label='RESETAR SENHA'
                    />
                </div>
            </div>
        );
    }
}
