document.addEventListener('DOMContentLoaded', () => {
    fetch('events.json')
        .then(response => response.json())
        .then(data => {
            displayEvents(data);
        });

    document.getElementById('searchBar').addEventListener('input', function() {
        const filter = this.value.toLowerCase();
        const cards = document.querySelectorAll('.event-card');
        cards.forEach(card => {
            const title = card.querySelector('h5').textContent.toLowerCase();
            card.style.display = title.includes(filter) ? '' : 'none';
        });
    });
});

function displayEvents(events) {
    const eventCardsContainer = document.getElementById('eventCards');
    eventCardsContainer.innerHTML = '';

    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'col-md-4 event-card';
        card.innerHTML = `
            <h5>${event.name}</h5>
            <p>${event.date}</p>
            <p>${event.location}</p>
            <p>${event.description}</p>
            <button class="btn btn-primary">Register</button>
        `;
        eventCardsContainer.appendChild(card);
    });
}
