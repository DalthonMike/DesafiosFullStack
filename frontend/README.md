# DesafiosFullStack

Bem-vindo ao Desafios Full Stack! Este repositório contém o código fonte que abrange desde o front até o backend da aplicação, representando uma solução para os desafios listados.

# Importante

Este documento contém informações cruciais para a execução **local** do projeto.

Ao final deste documento, existe uma collection caso queira testar via POSTMAN os endpoints criados.

## Frontend

O frontend foi desenvolvido utilizando Angular na versão 13.3.11 e Node.js na versão 14.21.1. Para a interface do usuário, integramos o framework de componentes PrimeNG, proporcionando uma experiência rica e responsiva.

### Antes de Iniciar

Antes de começar, certifique-se de ter o Node.js instalado. Em seguida, execute o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```
## Rodando a Aplicação

Inicie o frontend com o seguinte comando:

```bash
ng serve
```

## Testes unitários

Inicie o frontend com o seguinte comando:

```bash
npm test
```

Acesse a aplicação no navegador através do endereço http://localhost:4200/.

## Backend

O backend foi desenvolvido em Java na versão 8, utilizando o framework Spring Boot. A construção do projeto é feita com o Maven na versão 3.8.7. O banco de dados em memória utilizado é o H2.

**Url jdbc:** *h2:mem:desafiodb*

**username:** *desafio*

**password:** *desafio*

## Collection para teste via POSTMAN

```json
{
	"info": {
		"_postman_id": "ac44fa65-dbec-45a2-909f-ae1176414fee",
		"name": "Desafios",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "16045671",
		"_collection_link": "https://grey-satellite-60289.postman.co/workspace/e8a242b6-d83c-4166-9bd5-f319024a895b/collection/16045671-ac44fa65-dbec-45a2-909f-ae1176414fee?action=share&source=collection_link&creator=16045671"
	},
	"item": [
		{
			"name": "Bolsista",
			"item": [
				{
					"name": "Buscar todos",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8081/api/v1/bolsista/todos",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8081",
							"path": [
								"api",
								"v1",
								"bolsista",
								"todos"
							]
						}
					},
					"response": []
				},
				{
					"name": "Cadastrar",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"nome\": \"Fulano de Tal\",\r\n  \"numeroAgencia\": 456,\r\n  \"numeroConta\": 789,\r\n  \"identificador\": \"CPF\",\r\n  \"numeroIdentificador\": 123151321,\r\n  \"banco\": \"BANCO_DO_BRASIL\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8081/api/v1/bolsista/cadastrar",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8081",
							"path": [
								"api",
								"v1",
								"bolsista",
								"cadastrar"
							]
						}
					},
					"response": []
				},
				{
					"name": "Editar",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"id\": 1,\r\n  \"nome\": \"Fulano de Tal\",\r\n  \"numeroAgencia\": 456,\r\n  \"numeroConta\": 789,\r\n  \"identificador\": \"PASSAPORTE\",\r\n  \"numeroIdentificador\": 1,\r\n  \"banco\": \"BANCO_DO_BRASIL\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8081/api/v1/bolsista/cadastrar",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8081",
							"path": [
								"api",
								"v1",
								"bolsista",
								"cadastrar"
							]
						}
					},
					"response": []
				},
				{
					"name": "Deletar",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:8081/api/v1/bolsista/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8081",
							"path": [
								"api",
								"v1",
								"bolsista",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "Buscar por id",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8081/api/v1/bolsista/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8081",
							"path": [
								"api",
								"v1",
								"bolsista",
								"1"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Enums",
			"item": [
				{
					"name": "Buscar todos identificadores",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8081/api/v1/enums/identificadores",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8081",
							"path": [
								"api",
								"v1",
								"enums",
								"identificadores"
							]
						}
					},
					"response": []
				},
				{
					"name": "Buscar todos os bancos",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8081/api/v1/enums/bancos",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8081",
							"path": [
								"api",
								"v1",
								"enums",
								"bancos"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Pagamento",
			"item": [
				{
					"name": "Buscar todos",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8081/api/v1/pagamento/todos",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8081",
							"path": [
								"api",
								"v1",
								"pagamento",
								"todos"
							]
						}
					},
					"response": []
				},
				{
					"name": "Cadastrar",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"idBolsista\": 1,\r\n  \"dataPagamento\": \"2024-01-19\",\r\n  \"valor\": 21.00\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8081/api/v1/pagamento/cadastrar",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8081",
							"path": [
								"api",
								"v1",
								"pagamento",
								"cadastrar"
							]
						}
					},
					"response": []
				},
				{
					"name": "Buscar por {id} do bolsista",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8081/api/v1/pagamento/bolsista/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8081",
							"path": [
								"api",
								"v1",
								"pagamento",
								"bolsista",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "Editar",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"id\": 1,\r\n  \"idBolsista\": 1,\r\n  \"dataPagamento\": \"2024-01-19\",\r\n  \"valor\": 1000.00,\r\n  \"status\": \"SOLICITADO\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8081/api/v1/pagamento/editar",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8081",
							"path": [
								"api",
								"v1",
								"pagamento",
								"editar"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}
