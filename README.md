# Lab-02

![Day](https://img.shields.io/badge/Day-260813-233D4D?labelColor=464858)
![Notes Rehearsal](https://img.shields.io/badge/Notes_Rehearsal-01%20~%2002-233D4D?labelColor=464858)

<sub>React + TypeScript + Vite 기본 구조를 반복해서 다시 작성해보는 연습용 공간.</sub>

```txt
notes/
├─ rehearsal-01/
│  ├─ index.example.html
│  └─ examples/
│     ├─ App.example.tsx
│     ├─ index.example.css
│     └─ main.example.tsx
└─ rehearsal-02/
   ├─ index.example.html
   └─ examples/
      ├─ App.example.tsx
      ├─ index.example.css
      └─ main.example.tsx
```

---

## Dev

<sub>터미널에서 Vite 개발 서버를 실행한다.</sub>

```bash
npm run dev
```

<sub>실행 후 확인할 rehearsal 주소로 접속한다.</sub>

```txt
Rehearsal 01
http://localhost:5173/notes/rehearsal-01/index.example.html

Rehearsal 02
http://localhost:5173/notes/rehearsal-02/index.example.html
```

---

## Import Rule

<sub>실제 앱의 `src` 폴더에서는 `@` alias를 사용한다.</sub>

```ts
import App from '@/App';
```

<sub>`notes` 안의 rehearsal 예제에서는 rehearsal별 alias를 사용한다.</sub>

```ts
// rehearsal-01
import App from 'examples01/App.example';
import 'examples01/index.example.css';

// rehearsal-02
import App from 'examples02/App.example';
import 'examples02/index.example.css';
```

<sub>Alias 설정은 `tsconfig.app.json`, `vite.config.ts`, `vitest.config.ts`에서 함께 관리한다.</sub>

<sub>`tsconfig.app.json` 예시:</sub>

```json
"paths": {
    "@/*": ["./src/*"],
    "examples01/*": ["./notes/rehearsal-01/examples/*"],
    "examples02/*": ["./notes/rehearsal-02/examples/*"]
}
```
