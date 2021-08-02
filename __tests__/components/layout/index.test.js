import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {render, screen, cleanup} from '@testing-library/react'
import Layout from '../../../src/components/layout';

describe('<Layout />', () => {
    beforeEach(() => {
        render(
            <Router>
                <Layout>
                    <div>children</div>
                </Layout>
            </Router>
        )
    })
    afterAll(() => {
        cleanup()
    })
    test('should render title', () => {
        expect(screen.getByText('Movie Search Application')).toBeInTheDocument()
    })

    test('should render children', () => {
        expect(screen.getByText('children')).toBeInTheDocument()
    })
})