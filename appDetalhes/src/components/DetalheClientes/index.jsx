import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { api } from "../../services/api";

export default function DetalheClientes(props){
    const [cliente, setCliente] = useState({});

    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        const id = window.location.pathname.split('/').slice(-1);
        const response = await api.get(`/clientes/${id}`)
        setCliente(response.data);
    }

    return(
        <ul style={{ listStyle: 'none' }}>
            <li><b>ID:</b> {cliente.id}</li>
            <li><b>Nome:</b> {cliente.nome}</li>
            <li><b>Peso:</b> {cliente.peso}</li>
            <li><b>Altura:</b> {cliente.altura}</li>
            <li><b>Sexo:</b> {cliente.sexo}</li>
            <li><b>IMC:</b> {cliente.imc}</li>
        </ul>
    );
}

