import React from 'react';
import { Link } from 'react-router-dom';


const SimpleTable = ({header, datas}) => {
    return (
        <div className="simpleTable">
           <table className="simple"> 
                <thead>
                    <tr>
                        {
                            header.map((item, index) =>  ( <th key={index} >{item}</th> )) 
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map((row, index) => (
                            <tr key={index}>
                                {
                                   header.map((item, idx) => {
                                       if(row[item]) {
                                           return  <td key={idx}>{row[item]}</td>
                                       } else {
                                           return <td></td>
                                       }
                                    })
                                }
                                {
                                    row['botaoDetalhes'] && (
                                        <td>
                                            <Link to={ row['botaoDetalhes']}>
                                                <button>Detalhes</button>
                                            </Link>
                                        </td>
                                    )
                                }
                            </tr>
                        ))
                    }
                </tbody>
           </table>
        </div>
    );
}

export default SimpleTable;
