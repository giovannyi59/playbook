const Ajolonauta = require('./../app/ajolonauta')

describe("Esto es una suite de pruebas", ()=>{
    test('Caso de prueba 1', ()=>{

        const nombre = new Ajolonauta("michini")  //aqui envia lo que queremos probar
        expect(nombre.name).toBe("Woopa"); //esto valida el resultado
    });
})