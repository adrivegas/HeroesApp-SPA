import { authReducer, types } from "../../../src/auth";

describe('Pruebas en authReducer', () => {

    test('debe retornar el estado por defecto', () => {

        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });

    });

    test('debe llamar el login, autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Viole',
                id: '1312'
            }
        };

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });

    });

    test('debe llamar el logout, borrar el name del usuario y logged en false', () => {

        const state = {
            logged: false,
            user: { id: '123', name: 'Mati' }
        }

        const action = {
            type: types.logout,
        };

        const newState = authReducer(state, action);
        expect(newState).toEqual({ logged: false });

    })



})