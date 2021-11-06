import React from 'react';
import { shallow } from "enzyme";
import { GigGridItem } from "../../components/GigGridItem";


describe('Pruebas en <GigGridItem />', () => {

    const title = 'un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GigGridItem title={title} url={url} />);
    
    test('debe de mostrar el componente correctamente', () => {
        
        expect( wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el titulo', () => {
        
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');

        //saber las propiedades de la etiqueta
        // console.log(img.props()); o console.log(img.prop('src'))
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        // console.log(div.prop('className'));
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn') ).toBe(true);
    });
    
    
    
    
})
