//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('loginForm');
            const existingButton = document.getElementById('existing');
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const rememberMeCheckbox = document.getElementById('checkbox');

            // Check if there are saved credentials in localStorage
            const savedUsername = localStorage.getItem('username');
            const savedPassword = localStorage.getItem('password');

            if (savedUsername && savedPassword) {
                existingButton.style.display = 'block';
            }

            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const username = usernameInput.value;
                const password = passwordInput.value;

                if (rememberMeCheckbox.checked) {
                    localStorage.setItem('username', username);
                    localStorage.setItem('password', password);
                } else {
                    localStorage.removeItem('username');
                    localStorage.removeItem('password');
                }

                alert(`Logged in as ${username}`);

                // Show the "Login as existing user" button if credentials are saved
                if (localStorage.getItem('username') && localStorage.getItem('password')) {
                    existingButton.style.display = 'block';
                }
            });

            existingButton.addEventListener('click', () => {
                alert(`Logged in as ${savedUsername}`);
            });
        });