# Cartão de Crédito Válido

## Índice

- [Cartão de Crédito Válido](#cartão-de-crédito-válido)
  - [Índice](#índice)
  - [1. Descrição do projeto](#1-descrição-do-projeto)
    - [Algoritmo de Luhn](#algoritmo-de-luhn)
  - [2. Experiência do usuário (UX)](#2-experiência-do-usuário-ux)
  - [3. Interface do usuário (UI)](#3-interface-do-usuário-ui)
  - [4. Tecnologias usadas](#4-tecnologias-usadas)
  - [5. Protótipo final do projeto](#5-protótipo-final-do-projeto)
  - [6. Desenvolvedora do projeto](#6-desenvolvedora-do-projeto)

***

## 1. Descrição do projeto

Projeto baseado na criação de um aplicativo web que permita validar o número da cartão de crédito de um cliente, implementado com a funcionalidade de ocultar os primeiros dígitos do cartão para proteger a segurança do cliente.

Nosso projeto é baseado na confirmação de pagamento, que é a seção que aparece em uma loja virtual depois de escolher um produto para comprar, então a interface pode ser aplicada em sites com o objetivo de comércio eletrônico. 

### Algoritmo de Luhn 

O número do cartão de crédito do cliente será validado com o que é conhecido como o algoritmo de Luhn, que também é usado para validar números de telefones e outros. Este algoritmo é baseado na inversão do número do cartão de crédito, todos os números com uma posição par devem ser multiplicados por dois e, se o resultado for igual ou maior que 10, os dígitos do resultado são somados. O número do cartão de crédito será válido se a soma final de todos os números for múltiplo de 10. 

<img src="C:\Users\BlueShift\SAP009-card-validation\thumb.png">

## 2. Experiência do usuário (UX)

O aplicativo web está desenhado para usuários que procuram validar seu cartão de crédito em uma loja virtual, esta solução é integrada para a segurança do comércio eletrônico e dos dados do cliente, desta forma, são obtidas transações on-line seguras e com dados financeiros protegidos.
 

## 3. Interface do usuário (UI)

As considerações do projeto para realizar a interface do usuário são as seguintes:

* Digite o número do cartão de crédito a ser validado, apenas com caracteres numéricos entre os números 0 e 9.
* Confirme se o resultado é válido ou não, ou seja, imprima na tela se o número do cartão de crédito é válido ou não.
* Oculte os dígitos do cartão de crédito, exceto os últimos 4, para garantir a segurança do usuário.
* Não insira campos vazios, ou seja, preencha todos os inputs do aplicativo web.

## 4. Tecnologias usadas 

* HTML
* CSS 
* JavaScript

## 5. Protótipo final do projeto

<img src="C:\Users\BlueShift\Pictures\Screenshots\prototipo.png">

## 6. Desenvolvedora do projeto

Edelice González / Estudante SAP-009 Laboratoria 


