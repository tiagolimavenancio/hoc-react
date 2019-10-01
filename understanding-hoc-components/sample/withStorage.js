import React from 'react';

const withStorage = (WrappedComponent) => {
  class HOC extends React.Component {
    state = {
      localStorageAvailable: false, 
    };
  
    componentDidMount() {
       this.checkLocalStorageExists();
    }
  
    checkLocalStorageExists() {
      const testKey = 'test';

      try {
          localStorage.setItem(testKey, testKey);
          localStorage.removeItem(testKey);
          this.setState({ localStorageAvailable: true });
      } catch(e) {
          this.setState({ localStorageAvailable: false });
      } 
    }
  
    load = (key) => {
      if (this.state.localStorageAvailable) {
        return localStorage.getItem(key); 
      }
      
      return null;
    }
    
    save = (key, data) => {
      if (this.state.localStorageAvailable) {
        localStorage.setItem(key, data);
      }
    }
    
    remove = (key) => {
      if (this.state.localStorageAvailable) {
        localStorage.removeItem(key);
      }
    }
    
    render() {
      return (
        <WrappedComponent
          load={this.load}
          save={this.save}
          remove={this.remove}
          {...this.props}
        />
      );
    }
  }
    
  return HOC; 
}

export default withStorage;

A funcionalidade do withStorage HOC será salvar/carregar o estado de um componente, 
permitindo acessar e renderizá-lo rapidamente em um carregamento de página.

Na parte superior do withStorage, temos um único item no estado do componente que 
rastreia se o localStorage está disponível no navegador fornecido. 
Usamos o gancho do ciclo de vida componentDidMount que verificará se localStorage 
existe na função checkLocalStorageExists. Aqui, ele testará o salvamento de um item e 
definirá o estado como true, se for bem-sucedido.

Também adicionamos três funções ao nosso HOC - carregar, salvar e remover. 
Eles são usados ​​para acessar diretamente a API localStorage, se disponível. 
Nossas três funções no HOC são passadas para o nosso componente empacotado para ser consumido lá.