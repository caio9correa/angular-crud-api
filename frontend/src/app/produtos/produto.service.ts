import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Produto } from './produto.model';

// @Injectable com providedIn: 'root' registra esse serviço
// como um Singleton disponível em toda a aplicação, sem precisar
// declará-lo manualmente em nenhum módulo.
@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  // URL base da nossa API local. Todas as requisições vão usar
  // esse endereço como ponto de partida.
  private readonly apiUrl = 'http://localhost:3000/api/products';

  // Injetamos o HttpClient do Angular, responsável por fazer
  // as chamadas HTTP (GET, POST, PUT, DELETE) para o back-end.
  constructor(private readonly http: HttpClient) { }

  // CONSULTA (READ) - Lista todos os produtos
  // GET /api/products
  // Retorna um Observable<Produto[]>, ou seja, um "fluxo" de dados
  // que o componente vai "assinar" (subscribe) para receber a lista.
  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  // CONSULTA (READ) - Busca um único produto pelo id
  // GET /api/products/:id
  // Útil, por exemplo, na tela de edição, para carregar os dados
  // do produto antes de mostrar o formulário.
  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  // CRIAÇÃO (CREATE) - Cadastra um novo produto
  // POST /api/products
  // Envia o objeto "produto" no corpo (body) da requisição.
  // O back-end responde com o produto criado (geralmente incluindo o id gerado).
  cadastrar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  // ATUALIZAÇÃO (UPDATE) - Atualiza um produto existente
  // PUT /api/products/:id
  // Precisamos informar o id na URL para o back-end saber QUAL
  // produto atualizar, além de enviar os novos dados no body.
  atualizar(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto);
  }

  // DESTRUIÇÃO (DELETE) - Exclui um produto
  // DELETE /api/products/:id
  // O back-end responde com status 204 (No Content), ou seja,
  // sem corpo na resposta. Por isso o tipo é Observable<void>.
  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}