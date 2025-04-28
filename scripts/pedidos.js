document.getElementById("btn-voltar").addEventListener("click", () => {
  window.location.href = "index.html";
});

const concluidos = JSON.parse(localStorage.getItem("concluidos")) || [];
const tbody = document.getElementById("tabela-concluidos-body");

if (concluidos.length === 0) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td colspan="8" style="text-align: center;">Nenhum pedido concluído</td>`;
  tbody.appendChild(tr);
} else {
  concluidos.forEach(pedido => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
          <td>${pedido.id}</td>
          <td>${pedido.cliente}</td>
          <td>${pedido.endereco}</td>
          <td>${pedido.produto}</td>
          <td>${pedido.data}</td>
          <td>${pedido.horaPedido}</td>
          <td>${pedido.horaSaida}</td>
          <td>${pedido.horaChegada}</td>
      `;
    tbody.appendChild(tr);
  });
}