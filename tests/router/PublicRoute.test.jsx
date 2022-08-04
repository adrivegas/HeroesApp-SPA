import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Pruebas en PublicRoute', () => {

    test('debe mostrar el children sino está autenticado', () => {

        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    {/* sino está autenticado debe mostrar el contenido que está dentro de PublicRoute: */}
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getAllByText('Ruta pública')).toBeTruthy();

    });

    test('debe nevegar si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'MoonLight',
                id: '2022'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta pública</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1>Página de marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        // screen.debug();

        expect(screen.getByText('Página de marvel')).toBeTruthy();

    });


});