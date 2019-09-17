Os aplicativos da Web têm áreas diferentes, acessíveis de acordo com a autenticação e o 
controle de acesso do usuário.

Existem rotas de convidados, como / inscrição, / entrada, / esqueci a senha, etc., 
bem como rotas privadas, / painel, / perfil do usuário e assim por diante.

Uma solução poderia ser estender o próprio aplicativo, com componentDidMount e componentDidUpdate e 
verificar se o usuário está autenticado. Caso contrário, redirecione o usuário para / entrar. 
Parece desde o início, mas esta solução tem duas desvantagens.

Em primeiro lugar, viola o princípio da responsabilidade única, que agora mistura funcionalidade ao 
componente App, que originalmente não pertence a ele. E segundo, caso desejemos introduzir outra 
rota com comportamento semelhante, essa lógica também deve estar presente lá, o que levaria a 
algumas duplicações de código.