# Frontend

Este projeto é um frontend desenvolvido com Vue 3 e Vite, utilizando TypeScript e diversas bibliotecas para otimizar o desenvolvimento e a experiência do usuário.

## 📌 Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/) - Framework JavaScript para interfaces de usuário.
- [Vite](https://vitejs.dev/) - Ferramenta para build e desenvolvimento rápido.
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript com tipagem estática.
- [Pinia](https://pinia.vuejs.org/) - Gerenciamento de estado para Vue.
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS para estilização.
- [Flowbite](https://flowbite.com/) - Componentes UI para Tailwind CSS.
- [Laravel Fortify](https://laravel.com/docs/10.x/fortify) - Autenticação backend.
- [Heroicons Vue](https://heroicons.com/) - Ícones otimizados para Vue.
- [Vue Toast Notification](https://github.com/ankurk91/vue-toast-notification) - Notificações estilo toast.
- [Laravel Vue Pagination](https://www.npmjs.com/package/laravel-vue-pagination) - Paginação para Vue e Laravel.
- [FormKit](https://formkit.com/) - Gerenciamento avançado de formulários.

## ⚙️ Configuração do Projeto

### 1️⃣ Clonando o Repositório
```sh
git clone <https://github.com/TieliCristine/VueJS_TypeScript.git>
cd frontend
```

### 2️⃣ Instalando Dependências
```sh
npm install
```

### 3️⃣ Rodando o Ambiente de Desenvolvimento
```sh
npm run dev
```

### 4️⃣ Compilando para Produção
```sh
npm run build
```

### 5️⃣ Verificando Tipagem TypeScript
```sh
npm run type-check
```

## 🔧 Configuração de Dependências

### Instalação de Dependências Essenciais
```sh
composer require laravel/breeze --dev
php artisan breeze:install
npm install && npm run build
```

### Configuração do Tailwind CSS
```sh
npm install -D tailwindcss postcss autoprefixer
```

### Configuração do Flowbite
```sh
npm install flowbite
```

### Configuração do Laravel Fortify
```sh
composer require laravel/fortify
php artisan fortify:install
```

### Instalação do FormKit
```sh
npm install @formkit/vue @formkit/core
npx formkit@latest theme
```

### Instalação do Pinia e Persistência de Estado
```sh
npm install pinia
npm i pinia-plugin-persistedstate
```

### Notificações com Vue Toast Notification
```sh
npm install vue-toast-notification@^3
```

### Paginação com Laravel Vue Pagination
```sh
npm install laravel-vue-pagination
```

### Ícones com Heroicons Vue
```sh
npm install @heroicons/vue
```

## 📜 Estrutura do Projeto

```
frontend/
│── src/
│   ├── components/    # Componentes Vue reutilizáveis
│   ├── views/         # Páginas e telas principais
│   ├── router/        # Configuração das rotas
│   ├── store/         # Gerenciamento de estado (Pinia)
│   ├── assets/        # Arquivos estáticos e estilos
│   ├── main.ts        # Ponto de entrada da aplicação
│── public/            # Arquivos públicos
│── package.json       # Dependências do projeto
│── tsconfig.json      # Configuração do TypeScript
│── tailwind.config.js # Configuração do Tailwind CSS
│── vite.config.ts     # Configuração do Vite
```

## 🚀 Contribuindo

1. Faça um fork do repositório.
2. Crie uma nova branch: `git checkout -b minha-feature`
3. Faça suas alterações e commit: `git commit -m 'Adicionando nova feature'`
4. Faça push da branch: `git push origin minha-feature`
5. Abra um Pull Request!

## 🛠️ Manutenção e Atualizações
- Verifique as dependências com:
```sh
npm outdated
```
- Atualize pacotes com:
```sh
npm update
```

## 📄 Licença
Este projeto é licenciado sob a [MIT License](LICENSE).

---

Se precisar de mais alguma alteração, me avise! 😊

