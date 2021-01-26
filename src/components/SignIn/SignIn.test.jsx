import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import SignInContainer from './SignInContainer';

describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            const submitForm = jest.fn().mockName('submitForm');
            const { debug, getByTestId } = render(<SignInContainer onSubmit={submitForm} />);

            debug();

            const credentials = { username: 'kalle', password: 'password' };

            /* act() throws incorrect error - "Warning: You called act(async () => ...) without await"
               https://github.com/callstack/react-native-testing-library/issues/379 */
            await act(async () => {
                await fireEvent.changeText(getByTestId('usernameField'), credentials.username);
                await fireEvent.changeText(getByTestId('passwordField'), credentials.password);
                await fireEvent.press(getByTestId('submitButton'));
            });

            debug();

            await waitFor(() => {
                expect(submitForm).toHaveBeenCalledTimes(1);
                expect(submitForm.mock.calls[0][0]).toEqual(credentials);
            });
        });
    });
});
