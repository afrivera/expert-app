import React from 'react';

import { shallow } from 'enzyme';
import { GitExpertApp } from '../GitExpertApp';



describe('Pruebas con <GitExpertApp />', () => {
    

    test('debe de mostrarse correctamente', () => {
        
        const wrapper = shallow(<GitExpertApp />)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {
        
        const categories = ['One Punch', 'Dragon ball'];
        const wrapper = shallow(<GitExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
})
