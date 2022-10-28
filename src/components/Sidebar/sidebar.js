import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Bar } from './styles'

const Sidebar = () => {
    return (
        <Bar>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Hospital X
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/pacientes" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Lista de pacientes</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Cadastrar novo paciente</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/delete" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="exclamation-circle">Deletar paciente</CDBSidebarMenuItem>
                        </NavLink>

                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 80px',
                        }}
                    >
                        Developed by Marcos
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </Bar>
    );
};



export default Sidebar;