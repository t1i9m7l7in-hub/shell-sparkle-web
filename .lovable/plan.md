## Changes

**1. `src/contexts/LanguageContext.tsx`** — Add `home.history.desc2` key to all three language blocks (en, zh-TW, zh-CN) with the exact strings provided. The `home.history` and `home.history.desc` keys already exist and match the requested values, so no edits there.

**2. `src/pages/Index.tsx`** — In the History section, the second paragraph is currently hardcoded English ("The Group established the microwave ovens business..."). Replace that hardcoded string with `{t('home.history.desc2')}` so it renders in the active language.

No layout, styling, or other content changes.