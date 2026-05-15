# Mirra Mirra — Landing Page

Mirra Mirra（美容ログ iOS アプリ）の公式ランディングページ。

## Stack
- Next.js 15 / App Router
- React 19
- Tailwind CSS v4
- TypeScript
- Vercel deployment

## Local Dev
```bash
pnpm install   # or npm install
pnpm dev       # http://localhost:3000
```

## Routes
| Path | Page |
|---|---|
| `/` | Landing page |
| `/terms` | 利用規約 |
| `/privacy` | プライバシーポリシー |
| `/commerce` | 特定商取引法に基づく表記 |

## Deployment
GitHub → Vercel 連携。`main` ブランチに push すると自動デプロイ。

## Legal Source
`content/legal/*.md` は `mirra/docs/legal/` からコピー。本家を更新したら同期すること。
