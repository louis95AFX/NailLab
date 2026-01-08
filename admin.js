let bookings = [
    {
        id: 1,
        name: "Sarah M",
        phone: "072 345 6789",
        service: "Polygel Nails",
        date: "2026-01-12",
        status: "Pending"
    },
    {
        id: 2,
        name: "Amanda K",
        phone: "071 987 6543",
        service: "French Nails",
        date: "2026-01-14",
        status: "Pending"
    }
];

const table = document.getElementById("bookingTable");

function renderBookings() {
    table.innerHTML = "";

    bookings.forEach(b => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${b.name}</td>
            <td>${b.phone}</td>
            <td>${b.service}</td>
            <td>${b.date}</td>
            <td><span class="status ${b.status}">${b.status}</span></td>
            <td>
                <button class="accept" onclick="updateStatus(${b.id}, 'Accepted')">Accept</button>
                <button class="decline" onclick="updateStatus(${b.id}, 'Declined')">Decline</button>
                <button class="shift" onclick="shiftDate(${b.id})">Shift</button>
            </td>
        `;

        table.appendChild(row);
    });
}

function updateStatus(id, status) {
    const booking = bookings.find(b => b.id === id);
    booking.status = status;
    renderBookings();
}

function shiftDate(id) {
    const newDate = prompt("Enter new date (YYYY-MM-DD):");
    if (!newDate) return;

    const booking = bookings.find(b => b.id === id);
    booking.date = newDate;
    booking.status = "Shifted";

    renderBookings();
}

renderBookings();
