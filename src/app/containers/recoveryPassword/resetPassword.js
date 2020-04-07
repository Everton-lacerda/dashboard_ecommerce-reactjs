import React, { Component } from 'react';

import Title from '../../components/text/title';
import Input from '../../components/inputs/simple';
import Button from '../../components/button/simple';

export default class ResetPassword extends Component {

  state = {
    password: '',
    confirmPassword: ''
}

onChangeInput = (field, ev) => {
    this.setState({
        [field]: ev.target.value
    })
}
  render() {

    const { password, confirmPassword } = this.state

    return (
        <div className="resetPassword">
            <Title type="h1" content="Loja TI" />
                <br />
                <div>
                    <p>Para reiniciar a sua senha, digite a nova senha </p>
                </div>
                <br />
                <div>
                    <Input label='Senha' value={password} onChange={(ev) => this.onChangeInput("senha", ev)} type="password" />
                    <Input label='Confirmar Senha' value={confirmPassword} onChange={(ev) => this.onChangeInput("ConfirmarSenha", ev)} type="password" />
                </div>
                <br />
                <div>
                    <Button
                        type="success"
                        rota='/login'
                        label='CONFIRMAR SENHA'
                    />
                </div>
        </div>
    );
  }
}
