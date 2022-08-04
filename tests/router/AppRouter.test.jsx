import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from "../../src/auth";
import { AppRouter } from '../../src/router/AppRouter';


describe('pruebas en AppRouter', () => {

    test('debe mostrar el login sino está autenticado', () => {

        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getAllByText('Login').length).toBe(2);

    });

    test('debe mostrar el componente de marvel si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'abg',
                name: 'AppRouter'
            }       
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);

    });

});