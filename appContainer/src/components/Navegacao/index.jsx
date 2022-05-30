import React, { Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const ListarClientesApp = React.lazy(() => import('listar/ListarClientesApp'));
const CadastrarClienteApp = React.lazy(() => import('cadastrar/CadastrarClienteApp'));

export function Navegacao() {
    const navegacao = useNavigate();

    return (
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <ListarClientesApp />
                </Suspense>
            } />
            <Route path="/cadastrar" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <CadastrarClienteApp navegar={navegacao} />
                </Suspense>
            } />
        </Routes>
    );
}