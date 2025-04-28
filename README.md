# Lanchonete Delivery

Projeto desenvolvido como parte da Situação de Aprendizagem - Front-End, utilizando **HTML**, **CSS** e **JavaScript**. O sistema implementa funcionalidades como **LocalStorage**, **tabelas dinâmicas** e **responsividade**.

---

## Configurações do Projeto

- **Fonte principal**: Roboto, sans-serif;
- **Paleta de cores**:
  - `cor1`: #0d1b2a (Texto principal)
  - `cor2`: #415a77 (Títulos e destaques)
  - `cor3`: #1b263b (Botões e cabeçalhos de tabela)
  - `cor4`: #778da9 (Hover e destaques secundários)
  - `cor5`: #e0e1dd (Fundo principal)
  - `cor6`: #f9f9f9 (Fundo de formulários e tabelas)
  - `transp1`: rgba(0, 0, 0, 0.8) (Transparência escura)
  - `transp2`: rgba(255, 255, 255, 0.8) (Transparência clara)

---

## Requisitos Funcionais

### [RF001] Cadastro de Pedidos
- O usuário deve conseguir cadastrar um pedido, informando os dados do cliente e o produto desejado, escolhendo entre os produtos disponíveis em um **select** do HTML.
  - **[RF001.1]** O sistema deve registrar a **data e hora** do pedido no momento do cadastro.
  - **[RF001.2]** Os pedidos devem ser armazenados no **LocalStorage**.

### [RF002] Listagem de Pedidos
- O sistema deve listar os pedidos cadastrados em formato de **cards**, separados em duas colunas:
  - **Pedidos em execução**.
  - **Pedidos a caminho**.
- Cada card deve conter:
  - Nome do cliente.
  - Endereço.
  - Produto.
  - Data e hora do pedido.
- **[RF002.1]** Os cards de pedidos em execução devem possuir um botão que move o pedido para a coluna de **pedidos a caminho**.
- **[RF002.2]** Os cards de pedidos a caminho devem possuir um botão que finaliza o pedido, movendo-o para o **LocalStorage** e exibindo-o na página de **pedidos finalizados**.

### [RF003] Tela de Pedidos Finalizados
- O sistema deve ter uma tela de **pedidos finalizados**, acessada através de um botão na tela principal chamado **Concluídos**.
- A tela deve exibir os pedidos finalizados em formato de **tabela responsiva**, com as seguintes colunas:
  - Id.
  - Cliente.
  - Endereço.
  - Produto.
  - Data.
  - Hora do Pedido.
  - Hora de Saída.
  - Hora de Chegada.
- **[RF003.1]** Caso não haja pedidos finalizados, a tabela deve exibir uma mensagem indicando que não há pedidos.

### [RF004] Responsividade
- O sistema deve ser **responsivo**, adaptando-se a diferentes tamanhos de tela. Deve ser testado em dispositivos móveis e desktops para garantir a exibição correta da interface.

---

## Estrutura do Projeto

### **Páginas**
1. **index.html**: Página principal para cadastro e gerenciamento de pedidos.
2. **pedidos.html**: Página para exibição de pedidos finalizados.

### **Scripts**
- **index.js**:
  - Gerencia o cadastro de pedidos.
  - Move pedidos entre as colunas de execução e a caminho.
  - Salva os pedidos no LocalStorage.
- **pedidos.js**:
  - Carrega os pedidos finalizados do LocalStorage.
  - Exibe os pedidos em uma tabela dinâmica.

### **Estilos**
- **index.css**:
  - Estiliza a página principal, incluindo o formulário de cadastro e os cards de pedidos.
- **pedidos.css**:
  - Estiliza a página de pedidos finalizados, com foco na tabela responsiva.

---

## Dados dos Produtos

Os produtos disponíveis no sistema estão descritos abaixo:

```json
[
    {
        "id": 1,
        "nome": "X-Burguer",
        "ingredientes": ["Pão", "Carne", "Queijo"],
        "preco": 15.00
    },
    {
        "id": 2,
        "nome": "X-Egg",
        "ingredientes": ["Pão", "Carne", "Queijo", "Ovo"],
        "preco": 18.00
    },
    {
        "id": 3,
        "nome": "X-Bacon",
        "ingredientes": ["Pão", "Carne", "Queijo", "Bacon"],
        "preco": 20.00
    },
    {
        "id": 4,
        "nome": "X-Tudo",
        "ingredientes": ["Pão", "Carne", "Queijo", "Bacon", "Ovo", "Alface", "Tomate"],
        "preco": 25.00
    },
    {
        "id": 5,
        "nome": "Refrigerante - Lata",
        "preco": 5.00
    },
    {
        "id": 6,
        "nome": "Refrigerante - 2L",
        "preco": 10.00
    }
]