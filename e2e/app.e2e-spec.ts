import { TodoListPrimeNGPage } from './app.po';

describe('todo-list-prime-ng App', () => {
  let page: TodoListPrimeNGPage;

  beforeEach(() => {
    page = new TodoListPrimeNGPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
