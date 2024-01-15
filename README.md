## Documentation 

- `DropdownInput`, is designed to handle user interactions with a dropdown input field. It uses several hooks to manage state and behavior.

Here's a breakdown of the code:

1. **Type Definition**: The `User` type is defined with `id`, `name`, and `email` properties.

2. **DropdownInput Component**: This is the main functional component. It manages several pieces of state:

   - `users`: The mock contains 500 users.
   - `customUsers`: A slice of the last n users from the imported data.For now its 10.
   - `isOpen`: A boolean indicating whether the dropdown is open.
   - `value`: The current value of the input field.
   - `selectedUsers`: An array of users that have been selected.
   - `lastBackspacedUser`: The last user that was removed from the selected users.

3. **handleUserClick Function**: This function is triggered when a user is clicked. It adds the clicked user to the `selectedUsers` array, closes the dropdown, and resets the input value.

4. **handleUserSelect Function**: This function is triggered when a user is selected. It removes the selected user from the `selectedUsers` array.

5. **filteredUsers**: This is a memoized value that returns an array of users filtered based on the current input value, but only when the dropdown is open.

6. **handleUserSelect** function: This function uses the `useCallback` hook to ensure that it doesn't unnecessarily re-render, improving performance.

7. **Chip**: When a particular user is selected, this component will gets updated in the input UI.

8. **Chip x**: By clicking on the following x button, the user gets filtered out from the selected users to customUsers;

9. **Backspace Key Functionality**: When backspace key is pressed, the last user is selected and on further pressing the backspace key the user gets filtered out from the selected users.