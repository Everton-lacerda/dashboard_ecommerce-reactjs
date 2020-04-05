import React, { Component } from 'react';
import Title from '../../components/text/title'
import Search from '../../components/inputs/search'
import SimpleTable from '../../components/table/simple'
import Pagination from '../../components/pagination/simple'


import moment from 'moment'

class Orders extends Component {

    state = {
        search: '',
        offset: 0
    }

    onChangeSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    changeNumberCurrent = (offset) => {
        this.setState({ offset })
    }
    
    render() {

        const { search  } = this.state

        const datas = [
            {
                "Cliente": "CLiente 1",
                "Valor total": 90.90,
                "Data": moment().toISOString(),
                "Situação": "Aguardando pagamento",
                "botaoDetalhes": "/pedido/12731897238123"
            },
            {
                "Cliente": "CLiente 2",
                "Valor total": 90.90,
                "Data": moment().toISOString(),
                "Situação": "Aguardando pagamento",
                "botaoDetalhes": "/pedido/12798977238123"
            },
            {
                "Cliente": "CLiente 3",
                "Valor total": 299.90,
                "Data": moment().toISOString(),
                "Situação": "Pagamento finalizado",
                "botaoDetalhes": "/pedido/1273343497238123"
            }
        ]
        return (
            <div className="orders">
                <div className="card">
                    <Title 
                        type="h1" 
                        content="Pedidos" 
                    />
                    <br />
                    <Search 
                        value={search}
                        placeholder={"Pesquise aqui pelo nome do cliente"}
                        onChande={(event) => this.onChangeSearch(event)}
                        onclick={() => alert('Pesquisar')}
                    />
                    <br />
                    <SimpleTable 
                        header={['Cliente', 'Valor Total', 'Data', 'Situação']}
                        datas={datas}
                    />
                    <Pagination 
                        offset={this.state.offset}
                        limit={20}
                        total={120}
                        onclick={(numberCurrent) => this.changeNumberCurrent(numberCurrent) }
                    />
                </div>
            </div>
        );
    }
}

export default Orders;
