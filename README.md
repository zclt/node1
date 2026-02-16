# Node1 - DateTime Web Service

Uma aplicação Node.js simples que fornece um serviço web para manipulação e exibição de data/hora.

## Funcionalidade

Esta aplicação cria um servidor HTTP que escuta na porta 8080 e oferece as seguintes funcionalidades:

- **Exibe data/hora atual**: Mostra a data e hora atual formatada
- **Processa parâmetros de data/hora**: Aceita parâmetros URL para ano, mês, dia, hora e minuto
- **Conversão de timezone**: Exibe a data/hora informada tanto no formato local quanto em UTC
- **Formatação amigável**: Utiliza a biblioteca Moment.js para formatação legível

## Como Usar

Inicie o servidor:
```bash
node node1.js
```

Acesse a aplicação via navegador com parâmetros:
```
http://localhost:8080/?year=2024&month=12&day=25&hour=15&minute=30
```

## Parâmetros URL

- `year`: Ano (ex: 2024)
- `month`: Mês (ex: 12)
- `day`: Dia (ex: 25)
- `hour`: Hora (ex: 15)
- `minute`: Minuto (ex: 30)

## Tecnologias

- **Node.js**: Runtime JavaScript
- **Moment.js**: Biblioteca para manipulação de datas
- **Módulo HTTP**: Servidor web nativo do Node.js

## Autor

Matheus Zucolotto 
