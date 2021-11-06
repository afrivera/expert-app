import {useFetchGifs} from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en el Hook useFetchGifs', () => {
    
    test('debe de retornar el estado inicial', async() => {

        //
        // const {resultc,waitForNextUpdate} = renderHook( () => useFetchGifs( 'Dragon Ball'));
        // const {data, loading } = result.current;
        // await waitForNextUpdate();
        // // console.log(res);
        // // const {data, loading} = useFetchGifs( 'Dragon Ball' );
        // console.log(data, loading);

        // expect(data).toEqual([]);
        // expect( loading  ).toBe(true);
    });

    test('debe de retornar un arreglo de imagenes y loading en false', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs( 'Dragon Ball'));
        await waitForNextUpdate();
        const {data, loading } = result.current;

        expect(data.length).toBe(10);
        expect( loading  ).toBe(false);
    })
    
    
})
