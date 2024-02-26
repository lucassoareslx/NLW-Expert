const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas:[
        "var",
        "let",
        "const",
      ],
      correta: 2 //indice de respostas dentro do array de respostas
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas:[
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função usada para imprimir mensagens de depuração no console?",
      respostas:[
        "print()",
        "log()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado da expressão '2' + 2 em JavaScript?",
      respostas:[
        "22",
        "4",
        "TypeError",
      ],
      correta: 0
    },
    {
      pergunta: "Como você comentaria uma linha em JavaScript?",
      respostas:[
        "//",
        "/* */",
        "#",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      respostas:[
        "parseInt()",
        "parseFloat()",
        "Number()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de várias linhas em JavaScript?",
      respostas:[
        "// Este é um comentário de várias linhas",
        "/* Este é um comentário de várias linhas */",
        "# Este é um comentário de várias linhas",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas:[
        "pop()",
        "shift()",
        "splice()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas:[
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para encontrar o tamanho de um array em JavaScript?",
      respostas:[
        "length()",
        "size()",
        "length",
      ],
      correta: 2
    }
  ];
  
  // Seleção de elementos DOM
  const quiz = document.querySelector('#quiz') // Elemento onde o quiz será exibido
  const template = document.querySelector('template') // Template HTML para clonagem
  
  // Conjunto para armazenar as perguntas corretamente respondidas
  const corretas = new Set()
  // Contador do total de perguntas
  const totalDePerguntas = perguntas.length
  // Elemento para mostrar o total de respostas corretas
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  // Loop para criar dinamicamente as perguntas e opções de respostas
  for (const item of perguntas) {
    // Clonagem do template para cada pergunta
    const quizItem = template.content.cloneNode(true)
    // Adiciona a pergunta ao elemento clonado
    quizItem.querySelector('h3').textContent = item.pergunta
    
    // Loop para adicionar as opções de resposta
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        // Verifica se a resposta está correta
        const estaCorreta = event.target.value == item.correta
        // Remove a pergunta do conjunto se já estava presente 
        corretas.delete(item)
        // Adiciona a pergunta ao conjunto se a resposta estiver correta
        if (estaCorreta){
          corretas.add(item)
        }
        // Atualiza o contador de respostas corretas
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        
      }
      // Adiciona a opção de resposta ao elemento clonado
      quizItem.querySelector('dl').appendChild(dt)
    }
    // Remove o elemento "questão A" que foi clonado junto com o template
    quizItem.querySelector('dl dt').remove() // remove a 'questao A'
  
    // Adiciona o elemento da pergunta ao quiz
    quiz.appendChild(quizItem)
  
  }
  