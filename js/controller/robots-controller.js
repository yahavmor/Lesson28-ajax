'use strict';

function initRobots() {
    getUsers(20, renderRobots) 
}

function renderRobots(users) {
    const elRobots = document.querySelector('.robots-container')
    console.log('Users to render:', users)
    if (!users || users.length === 0) {
        elRobots.innerHTML = '<p>No users found.</p>'
        return
    }

    elRobots.innerHTML = users.map(user => `
        <div class="robot-card">
            <header class="robot-header">
                <h3>${user.name}</h3>
            </header>
            <div class="robot-data">
                <img src="https://robohash.org/${encodeURIComponent(user.name)}" alt="${user.name}" />
                <div class="robot-info">
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>City:</strong> ${user.city}</p>
                    <p><strong>State:</strong> ${user.state}</p>
                    <p><strong>Zip:</strong> ${user.zip}</p>
                    <p><strong>Address:</strong> ${user.address}</p>
                </div>
            </div>
        </div>
    `).join('')
}


