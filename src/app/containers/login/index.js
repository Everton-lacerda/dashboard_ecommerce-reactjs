import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Title from '../../components/text/title';
import Input from '../../components/inputs/simple';
import Checkbox from '../../components/inputs/checkbox';
import Button from '../../components/button/simple';



export default class Login extends Component {

    state = {
        email: '',
        password: '',
        optionRemember: true    
    }

    onChangeInput = (field, ev) => {
        this.setState({
            [field]: ev.target.value
        })
    }
    onChangeCheckbox = (field) => {
        this.setState({
            [field]: !this.state[field]
        })
    }

    render() {
        const { email, password, optionRemember } = this.state
        return (
            <div className="login">
                <div className="card">
                    <Title type="h1" content="Loja TI" />
                    <p> Faço seu login abaixo </p>

                    <Input
                        label="E-mail"
                        value={email}
                        type="email"
                        onChange={(ev) => this.onChangeInput("email", ev)}
                    />

                    <Input
                        label="Senha"
                        value={password}
                        type="password"
                        onChange={(ev) => this.onChangeInput("password", ev)}
                    />

                    <div>
                        <div>
                            <Checkbox 
                                value={optionRemember}
                                onChange={() => this.onChangeCheckbox('optionRemember')}
                                label="lembrar"
                            />
                        </div>
                        <div>
                            <Link to="/recoveryPassword">Esqueceu sua senha?</Link>
                        </div>
                    </div>

                    <Button 
                        type="success"
                        rota='/'
                        label='ENTRAR'
                    />
                </div>
            </div>
        );
    }
}
