import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui';

const mockedUseNavigate = jest.fn();

// jest.mock(ruta de useNavigate, fn(tome todo lo que exporte la librería pero solo vamos a sobreescribir useNavigate))
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en Navbar component', () => {

    const contextValue = {
        logged: true,
        user: {
            id: 'abg',
            name: 'Navbar'
        },
        logout: jest.fn(),
    }

    // Es recomendable que cada vez que se use un jest.fn() se haga:
    beforeEach(() => jest.clearAllMocks());

    test('debe mostrar el nombre del usuario autenticado', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getAllByText('Navbar')).toBeTruthy();

    });

    test('debe llamar el logout y navigate cuando se hace click en el botón de logout', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        // screen.debug();

        const logoutBtn = screen.getByRole('button'); 
        fireEvent.click( logoutBtn );

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});

    });


})