// Admin Panel JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Login functionality
    const loginBtn = document.getElementById('login-btn');
    const loginForm = document.getElementById('login-form');
    const dashboard = document.getElementById('dashboard');
    
    // Correct credentials
    const correctUsername = 'swayam khangaonkar';
    const correctPassword = 'hackathonswayam';
    
    loginBtn.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username.toLowerCase() === correctUsername && password === correctPassword) {
            loginForm.style.display = 'none';
            dashboard.style.display = 'block';
        } else {
            alert('Invalid username or password!');
        }
    });
    
    // Form toggle functionality
    const actionBtns = document.querySelectorAll('.action-btn');
    const formContainers = document.querySelectorAll('.form-container');
    
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const formId = this.getAttribute('data-form') + '-form';
            
            // Hide all forms
            formContainers.forEach(form => {
                form.style.display = 'none';
            });
            
            // Show selected form
            const targetForm = document.getElementById(formId);
            if (targetForm) {
                targetForm.style.display = 'block';
            }
        });
    });
    
    // Image preview functionality for file inputs
    const fileInputs = document.querySelectorAll('input[type="file"]');
    
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            const previewId = this.id.replace('-images', '-preview').replace('-image', '-preview');
            const previewContainer = document.getElementById(previewId);
            
            if (previewContainer) {
                previewContainer.innerHTML = '';
                
                if (this.files) {
                    Array.from(this.files).forEach(file => {
                        if (file.type.startsWith('image/')) {
                            const reader = new FileReader();
                            
                            reader.onload = function(e) {
                                const previewItem = document.createElement('div');
                                previewItem.className = 'preview-item';
                                
                                const img = document.createElement('img');
                                img.src = e.target.result;
                                img.alt = 'Preview';
                                
                                const removeBtn = document.createElement('button');
                                removeBtn.className = 'remove-btn';
                                removeBtn.innerHTML = '×';
                                removeBtn.onclick = function() {
                                    previewItem.remove();
                                };
                                
                                previewItem.appendChild(img);
                                previewItem.appendChild(removeBtn);
                                previewContainer.appendChild(previewItem);
                            };
                            
                            reader.readAsDataURL(file);
                        }
                    });
                }
            }
        });
    });
    
    // Form submission handlers
    const forms = document.querySelectorAll('.form-container');
    
    forms.forEach(form => {
        const submitBtn = form.querySelector('.btn');
        
        submitBtn.addEventListener('click', function() {
            const formType = form.id.replace('-form', '');
            
            // In a real implementation, this would send data to a backend
            // For now, we'll just show a success message
            alert(`${formType.charAt(0).toUpperCase() + formType.slice(1)} data has been submitted successfully!`);
            
            // Reset form
            form.querySelectorAll('input, textarea, select').forEach(input => {
                if (input.type !== 'file') {
                    input.value = '';
                }
            });
            
            // Clear image previews
            const previews = form.querySelectorAll('.image-preview');
            previews.forEach(preview => {
                preview.innerHTML = '';
            });
        });
    });
});