# 🟢 TaTeTi - Tres en Línea

Este es un simple pero completo juego de **TaTeTi (Tic-Tac-Toe)** hecho con **React**, que guarda el estado del juego en el almacenamiento local del navegador para que puedas continuar más tarde. 🎮

---

## 🚀 Tecnologías

- ⚛️ React
- 🧠 Hooks (`useState`)
- 🎉 canvas-confetti para mostrar confeti al ganar
- 💾 localStorage para persistencia del juego

---


---

## 🧠 Lógica del juego

- **Tablero**: Un array de 9 posiciones (`null`, `"X"`, `"O"`).
- **Turnos**: Alterna entre `X` y `O` usando `useState`.
- **Ganador**: Se verifica con combinaciones ganadoras predefinidas.
- **Empate**: Si todas las casillas están ocupadas y no hay ganador.
- **Persistencia**: Guarda el tablero y el turno actual en `localStorage`.

---
