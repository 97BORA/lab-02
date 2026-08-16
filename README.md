# Lab-02

![Day](https://img.shields.io/badge/Day-260813-233D4D?labelColor=464858)
![Notes Rehearsal](https://img.shields.io/badge/Notes_Rehearsal-01%20~%200X-233D4D?labelColor=464858)

<sub>React + TypeScript + Vite 기본 구조를 반복해서 다시 작성해보는 연습용 공간.</sub>

## Contents

<table>
    <tr>
        <th align="left"><sub>Setup</sub></th>
        <th align="left"><sub>설명</sub></th>
    </tr>
    <tr>
        <td><sub><a href="#structure">Structure</a></sub></td>
        <td><sub>연습용 폴더 구조</sub></td>
    </tr>
    <tr>
        <td><sub><a href="#dev">Dev</a></sub></td>
        <td><sub>개발 서버 실행과 접속 주소</sub></td>
    </tr>
    <tr>
        <td><sub><a href="#import-rule">Import Rule</a></sub></td>
        <td><sub>src, notes alias 사용 규칙</sub></td>
    </tr>
</table>

<table>
    <tr>
        <th align="left"><sub>Rehearsal</sub></th>
        <th align="left"><sub>설명</sub></th>
    </tr>
    <tr>
        <td><sub><a href="#rehearsal-01">Rehearsal 01</a></sub></td>
        <td><sub>---</sub></td>
    </tr>
    <tr>
        <td><sub><a href="#rehearsal-02">Rehearsal 02</a></sub></td>
        <td><sub>---</sub></td>
    </tr>
</table>

---

## Structure

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

---

## Rehearsal 01

<sub>기본 Vite React 구조를 다시 작성하는 첫 번째 연습.</sub>

```txt
notes/rehearsal-01/
├─ index.example.html
└─ examples/
   ├─ App.example.tsx
   ├─ index.example.css
   └─ main.example.tsx
```

---

## Rehearsal 02

<sub>같은 구조를 다시 한 번 반복해서 작성하는 두 번째 연습.</sub>

```txt
notes/rehearsal-02/
├─ index.example.html
└─ examples/
   ├─ App.example.tsx
   ├─ index.example.css
   └─ main.example.tsx
```
