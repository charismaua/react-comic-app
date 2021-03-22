import { render } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
    it('should render component without throwing an error', async () => {
        const { container, queryByTestId } = render(<Search />);
        expect(queryByTestId('Search')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('should render component with proper width', async () => {
        const { container, getAllByTestId } = render(<Search />);
        const style = window.getComputedStyle(getAllByTestId('Search')[0]);

        expect(style.width).toBe('100%');
        expect(container).toMatchSnapshot();
    });
});