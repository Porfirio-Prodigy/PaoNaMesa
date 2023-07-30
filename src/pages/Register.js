import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SaveFamilias from '../components/SaveFamilias';

const Register = () => {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [situacao, setSituacao] = useState('');
    const [ErrorMessage, setErrorMessage] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        SaveFamilias(nome, endereco, telefone, situacao).then(result => {
            if (result === "success") {
                setNome('');
                setEndereco('');
                setTelefone('');
                setSituacao('');
                alert('Cadastro Realizado com Sucesso');
            } else {
                alert('Erro ao Cadastrar os dados');
            }
        })    
    }

  return (
    <form onSubmit={handleSubmit}>

        <div className='form_register'>
            <input 
                type="text" 
                placeholder="Nome:" 
                value={nome} 
                className="form_input"
                onChange={(event) =>  setNome(event.target.value)}
            />

            <input 
                type="text"
                placeholder="Endereço:" 
                value={endereco}
                className="form_input"
                onChange={(event) =>  setEndereco(event.target.value)}
            />

            <input 
                type="tel" 
                placeholder="Telefone:" 
                value={telefone}
                className="form_input"
                onChange={(event) =>  setTelefone(event.target.value)}
            />

            <textarea 
                placeholder="Situação:" 
                value={situacao}
                className="form_textArea"
                onChange={(event) =>  setSituacao(event.target.value)}>
            </textarea>
        </div>

        <div className='form_actions'>
            <button type="submit" className="save_button">Salvar</button>
            <Link to="/" className="back_button">Voltar</Link>    
        </div>
    </form>
  )
}

export default Register