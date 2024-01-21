-- Inserir dados na tabela TBL_BOLSISTA
INSERT INTO TBL_BOLSISTA (id, nome, data_cadastro, numero_agencia, numero_conta, identificador, banco, numero_identificador)
VALUES
    (1, 'Fulano', '2022-01-01', 1234, 56789, 'CPF', 'BANCO_DO_BRASIL', 12345678901),
    (2, 'Ciclano', '2022-01-02', 5678, 98765, 'RG', 'CAIXA_ECONOMICA', 98765432109);

-- Inserir dados na tabela TBL_PAGAMENTO
INSERT INTO TBL_PAGAMENTO (id, data_pagamento, valor, status, bolsista_id)
VALUES
    (1, '2022-01-10', 1000.00, 'NAO_REALIZADO', 1),
    (2, '2022-01-15', 1500.00, 'CANCELADO', 1),
    (3, '2022-01-12', 800.00, 'SOLICITADO', 2),
    (4, '2022-01-18', 1200.00, 'PAGO', 2);