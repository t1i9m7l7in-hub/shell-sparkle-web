# Architecture Rules

- Keep the language context identity in a `globalThis` registry so Vite hot updates cannot split providers and consumers across context instances.