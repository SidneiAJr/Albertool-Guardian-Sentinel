# 🛡️ Albertool Guardian Sentinel
*"Security shouldn't be an afterthought."*

---

> ## 🚫 FREE TO USE — NOT FOR SALE
>
> ✅ Use in personal and commercial projects  
> ✅ Copy, adapt and modify freely  
> ✅ Share with other devs  
> ❌ Do not sell, resell or charge for this content  
>
> Made by devs, for devs. Keep it that way. 🇧🇷

---

## 📌 O que é isso?

Esqueletos prontos de libs de segurança para você copiar, colar e usar.
Você ganha a estrutura. A lógica é sua.

> ⚠️ Algumas libs como **JWT** e **Winston (logs)** foram deixadas de fora propositalmente —
> cada dev implementa do seu jeito. Use a lib que preferir.

> ❌ **Java e C# não estão disponíveis** — frameworks como Spring Boot e ASP.NET são muito
> verbosos para esqueletos simples. Cada lib vira uma classe, uma annotation, um Bean.
> Contribuições da comunidade são bem-vindas.

---

## 📦 Libs disponíveis

| Lib | Função | Níveis |
|-----|--------|--------|
| `helmet` | Headers de segurança HTTP | básico, intermediário, enterprise |
| `cors` | Controle de origens | básico, intermediário, enterprise |
| `express-rate-limit` | Limite de requisições | básico, login, cadastro, api, enterprise |
| `hpp` | Previne HTTP Parameter Pollution | básico, intermediário, enterprise |
| `cookie-parser` | Cookies seguros | básico, intermediário, enterprise |
| `express-mongo-sanitize` | Previne NoSQL injection | básico, intermediário, enterprise |
| `xss` | Sanitiza input contra XSS | básico, intermediário, enterprise |

---

## 🗂️ Estrutura

```
TS/
├── models Express/
│   ├── basic.ts
│   ├── intermediario.ts
│   └── avancado.ts
├── models RateLimit/
│   ├── model-basico.ts
│   ├── model-login.ts
│   ├── model-cadastro.ts
│   ├── model-api.ts
│   └── model-enterprise.ts
├── models Helmet/
│   ├── model-basico.ts
│   ├── model-intermediario.ts
│   └── model-enterprise.ts
├── models CORS/
│   ├── model-basico.ts
│   ├── model-intermediario.ts
│   └── model-enterprise.ts
├── models HPP/
│   ├── model-basico.ts
│   ├── model-intermediario.ts
│   └── model-enterprise.ts
├── models cookie-parser/
│   ├── model-basico.ts
│   ├── model-intermediario.ts
│   └── model-enterprise.ts
├── models Express Mong/
│   ├── model-basico.ts
│   ├── model-intermediario.ts
│   └── model-enterprise.ts
├── model xss/
│   ├── model-bacis.ts
│   ├── model-Intermediário.ts
│   └── model-Enterprise.ts
PHP/
├── Php Puro/
│   ├── basic.php
│   ├── intermediario.php
│   └── avancado.php
└── Php Laravel/
    ├── basic.php
    └── intermediario.php
```

---

## 🚀 Como usar

```bash
# Node/TS
npm install helmet cors express-rate-limit hpp cookie-parser express-mongo-sanitize xss

# tipos
npm install -D @types/cookie-parser @types/express-mongo-sanitize @types/xss

# PHP Puro / Laravel
composer require firebase/php-jwt slim/slim slim/psr7 monolog/monolog vlucas/phpdotenv
```

Escolha o nível, copie o arquivo e preencha os campos vazios.

---

## ⭐ Se isso te ajudou

Deixa uma estrela no repositório. Esse é o único pagamento aceito aqui.

---

**Made in Brazil 🇧🇷 — Open source. Free. Forever.**