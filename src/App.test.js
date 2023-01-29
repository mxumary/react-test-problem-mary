import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { Primary } from './App.stories'; // primary gets exported

// Add your tests here
describe ('Button', () => {
    it('Exists', () => {
        const { getByText } = render(<Primary />);
        const button = getByText('click me!');
        expect(button).toBeInTheDocument(); // checks if the button exists in the HTML file
    })
    it('Changes the value of the button', () => {
        const { getByText } = render(<Primary />);
        fireEvent.click(getByText('click me!'));

        const button = getByText('thanks');
        expect(button).toBeInTheDocument();
    })
})
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library