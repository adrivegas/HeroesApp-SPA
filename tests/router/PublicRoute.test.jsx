import { render, screen } from '@testing-library/react';
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

});