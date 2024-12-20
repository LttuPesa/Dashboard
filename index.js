const userData = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  ];
  
  const userTable = document.getElementById("user-data");
  
  // Render data pengguna ke tabel
  function renderTable(data) {
    userTable.innerHTML = ""; // Kosongkan tabel sebelum render ulang
    data.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
          <a href="#" class="btn edit">Edit</a>
          <a href="#" class="btn delete">Delete</a>
        </td>
      `;
      userTable.appendChild(row);
    });
  }
  
  // Render tabel saat halaman dimuat
  renderTable(userData);
  