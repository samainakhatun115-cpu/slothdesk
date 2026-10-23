# SlothDesk

> Make room for slow.

SlothDesk is a calm task planner powered by open-source AI. It turns an overwhelming list into small, doable steps without hustle metrics or guilt.

## Why this fits Week 3: Slow and Steady

The project uses open-source AI as a gentle planning layer: it breaks large tasks into tiny wins and adapts the plan to a person's available energy. The interface deliberately rewards consistency over speed.

The current demo is frontend-first and works without an API key. To connect a local model, use any OpenAI-compatible server such as Ollama or LM Studio and add the values in `.env.local` from `.env.example`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Tech

- Next.js 14 and TypeScript
- React client interactions
- CSS with responsive layout and no UI framework
- Compatible with local, open-weight models

## License

MIT. See [LICENSE](./LICENSE).
