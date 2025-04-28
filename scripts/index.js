let pedidos = [];
let pedidoId = 1;

document.getElementById('gerar-pedido').addEventListener('click', () => {
    const cliente = document.getElementById('cliente').value;
    const endereco = document.getElementById('endereco').value;
    const produto = document.getElementById('produto').value;

    if (cliente && endereco && produto) {
        const agora = new Date();
        const data = agora.toLocaleDateString();
        const hora = agora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const pedido = {
            id: pedidoId++,
            cliente,
            endereco,
            produto,
            data,
            horaPedido: hora,
            status: 'execucao'
        };

        pedidos.push(pedido);
        renderPedidos();
        atualizarDataHora();
    }
});

function renderPedidos() {
    const execucaoLista = document.getElementById('execucao-lista');
    const caminhoLista = document.getElementById('caminho-lista');

    execucaoLista.innerHTML = '';
    caminhoLista.innerHTML = '';

    pedidos.forEach(pedido => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
      <p><strong>Id:</strong> ${pedido.id}</p>
      <p><strong>Cliente:</strong> ${pedido.cliente}</p>
      <p><strong>Produto:</strong> ${pedido.produto}</p>
      <p><strong>Endereço:</strong> ${pedido.endereco}</p>
      <p><strong>Data:</strong> ${pedido.data}</p>
      <p><strong>Horário:</strong> ${pedido.horaPedido}</p>
    `;

        const botao = document.createElement('button');
        if (pedido.status === 'execucao') {
            botao.textContent = 'Enviar Entrega';
            botao.addEventListener('click', () => {
                pedido.status = 'caminho';
                pedido.horaSaida = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                renderPedidos();
            });
            card.appendChild(botao);
            execucaoLista.appendChild(card);
        } else if (pedido.status === 'caminho') {
            botao.textContent = 'Pedido entregue';
            botao.addEventListener('click', () => {
                pedido.horaChegada = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                salvarFinalizado(pedido);
                pedidos = pedidos.filter(p => p.id !== pedido.id);
                renderPedidos();
            });
            card.appendChild(botao);
            caminhoLista.appendChild(card);
        }
    });
}

function salvarFinalizado(pedido) {
    const concluidos = JSON.parse(localStorage.getItem('concluidos')) || [];
    concluidos.push(pedido);
    localStorage.setItem('concluidos', JSON.stringify(concluidos));
}

function atualizarDataHora() {
    const agora = new Date();
    document.getElementById('data-hora').textContent = `Hoje é = ${agora.toLocaleDateString()} Agora são = ${agora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}

document.getElementById('btn-concluidos').addEventListener('click', () => {
    window.location.href = 'concluidos.html';
});

atualizarDataHora();
setInterval(atualizarDataHora, 60000);
