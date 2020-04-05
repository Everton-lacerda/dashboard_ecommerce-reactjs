import React from 'react'
import { Link } from 'react-router-dom';

const items = [
    { router: '/', icon: ( <i className="fas fa-copy"></i>), title: 'Pedidos'},
    { router: '/clientes', icon: ( <i className="fas fa-users"></i>), title: 'Clientes'},
    { router: '/categorias', icon: ( <i className="fas fa-clone"></i>), title: 'Categorias'},
    { router: '/produtos', icon: ( <i className="fas fa-boxes"></i>), title: 'Produtos'},
    { router: '/config', icon: ( <i className="fas fa-cog"></i>), title: 'Configurações'},
    { router: '/perfil', icon: ( <i className="fas fa-user"></i>), title: 'Perfil'},
]

const ListItems = ({ open, history }) => {

    const LocalAtual = history.location.pathname 

    return (
        <div className="items-wrapper">
            {
                items.map((item, index) => (
                    <Link to={item.router}  key={index}>
                        <div className={`menu-item ${ LocalAtual === item.router ? 'menu-item-active' : '' } flex horizontal`}>
                            <div className="flex-1 flex flex-center">
                            {item.icon}
                            </div>
                            {
                                open && 
                                (
                                    <div className="flex-2 flex flex-start">
                                        <span>{item.title}</span>
                                    </div>
                                )
                            }
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default ListItems