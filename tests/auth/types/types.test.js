import { types } from "../../../src/auth";

describe('pruebas en types.js', () => { 

    test('debe regresar estos types', () => { 

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',        
        });

     });

 });