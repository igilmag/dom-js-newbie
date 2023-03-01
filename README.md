# Pasos a seguir para instalar standard.js

- [x] Tener instalado en el equipo nodejs
- [x] Inicializar el entorno para trabajar con JavaScript con el comando __npm__:

```sh
npm init -y
```
- [x] Tener instalado en __vsc__ la extensión [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), ¡¡¡¡ el de microsoft !!!!

- [x] Instalar [standard](https://standardjs.com/)

```sh
npm install standard --save-dev
```
o

```sh
npm i standard -D
```

- [x] Configurar el package.json con standard añadiendo estas líneas:

```json
"eslintConfig": {
  "extends": "standard"
}
```

