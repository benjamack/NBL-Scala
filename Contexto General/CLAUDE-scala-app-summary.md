# Scala — Claude Context

## Brand — Scala

> **IMPORTANTE:** El nombre de la app es **Scala**, tanto en código como cara al usuario. Para cualquier trabajo creativo — landings, copy, assets, presentaciones, UI nueva — usar siempre **Scala** y seguir las guías de `design.md`.

**Antes de cualquier trabajo creativo leer `design.md` en la raíz del proyecto.** Sistema de marca completo: logo SVG, colores, tipografía, voz, ejemplos de copy.

Resumen rápido:
- **Símbolo:** 5 barras ascendentes con base común, esquinas superiores redondeadas, fill `#f3ffca` sobre oscuro (o `#0a0a0c` sobre claro). SVG exacto en `design.md`.
- **Colores:** Primary lime `#F3FFCA` sobre ink `#0A0A0C`. Acentos secundarios (Sky/Mint/Ember) solo para datos.
- **Fuentes:** Lexend 700 display · Inter body · JetBrains Mono labels (uppercase, tracking +0.18em).
- **Tono:** Coach que conoce al atleta. Frases cortas, verbos directos, sin motivacional vacío.
- **Tagline preferida:** *Subí tu escala.*

## What is this
Personal fitness app conectada a Garmin. Dashboard biométrico (sleep, HRV, actividades, wellness), nutrición con análisis foto AI + heatmap mensual + suplementación contextual, **ciclo menstrual matizado por anticonceptivo**, **memoria persistente** del coach, **AI Coach agéntico** como única superficie de chat, training plans con `session_type` semántico, goals. Stack: React + TS (Vite) frontend, Express + **Neon Postgres** (Drizzle ORM) backend, `@gooin/garmin-connect`. AI: Claude API (tool_use nativo) o Gemma vía Ollama (ReAct). i18n es/en con react-i18next.

## Project Structure
```
/                       → React frontend (src/)
/server/                → Express backend (src/)
/server/src/db/         → Drizzle ORM: client.ts, schema/, seed.ts
/server/drizzle/        → SQL migrations (drizzle-kit)
/server/scripts/        → One-off scripts (migrate-sqlite-to-postgres.ts)
/server/uploads/        → Meal photos (gitignored)
/server/.env            → DATABASE_URL, ANTHROPIC_API_KEY, etc.
/render.yaml            → Render deployment
/docs/                  → Internal docs
```

## Architecture

### Frontend (`src/`)
- `pages/` → **AICoach (root `/`)**, Dashboard, Sports, SportDetail, Sleep (legacy redirect), Wellness (legacy redirect), TrainingPlans, PlanDetail, ActiveWorkout, Nutrition, Goals, GoalDetail, **MenstrualCycle**, **Profile**, **Settings**, Assessment (onboarding), Login, Signup
- `components/` →
  - `layout/` → **Header, Sidebar, MobileDock, MobileNavSheet** (mobile = botón flotante con sheet de tarjetas)
  - `cycle/` → CyclePhaseRing, CyclePhaseCard, CycleDayLogger
  - `profile/` → ProfileEntryCard, ProfileEntryEditor (CRUD UI para memory cards)
  - `brand/` → LogoMark, Wordmark, BrandLockup, ScalaPulse, BrandLoader
  - `ui/` → MarkdownText, TTSButton, STTButton, AIProgressIndicator, ActivityRing, LoadingSkeleton
  - DynamicChart, SportGroupEditor, InsightsCard, AIInsightPanel, MealLogger, NutritionTodayCard, **NutritionCalendar**, **SupplementsCard**, **AskCoachInline** (input + chips → navega a `/` con `state.initialPrompt` para arrancar **chat nuevo**)
  - SessionModal
- `context/AuthContext.tsx` → Auth global con `login`, `logout`, `enterDemoMode`
- `hooks/` → useDailySummary, useSleep, useActivities, useActivityDetail, useSessionDetail, useHrv, useStress, useInsights, useSportGroups, useTrainingPlans, useTrainingPlan, useWorkout, useExerciseHistory, useNutrition, useNutritionPlan, useProfile, **useFullProfile**, useGoals, useGoal, **useCycle**, **useMemories**, **useLanguage**, **useAIProvider**, useAuthFeatures, useAIAnalysis, useRotatingPhrase, useSTT, useTTS, useAIProgress, usePlan
- `i18n/` → react-i18next, locales en `i18n/locales/{en,es}.json`. `useLanguage()` persiste en localStorage `scala_language` y sincroniza a `user_profile.locale` vía PUT `/api/profile`.
- `api/client.ts` → `apiFetch()` (lanza `error.status` con HTTP code; bloquea mutaciones en demo mode)

### Routing (recordar)
- `/` → AICoach (única superficie de chat)
- `/sleep` y `/wellness` → redirect a `/dashboard` (consolidados ahí)
- `/coach` → redirect a `/`
- `/goals` → redirect a `/training?tab=goals`
- `/cycle`, `/profile`, `/profile/edit` (Assessment), `/settings`

### Backend (`server/src/`)
- `index.ts` → Express. Producción: `/dist/` + SPA fallback. `/uploads` static.
- `garmin.ts` → OAuth Garmin wrapper
- `sync.ts` → `syncInitial()` (30 días) y `syncToday()` (cada 15min). `nextDay()` para offset Garmin.
- `db/client.ts` → Drizzle + `node-postgres` Pool. Exporta `db` y `pool`.
- `db/schema/` → garmin, core, training, nutrition, goals, profile, **cycle**, **memory**, auth (Better Auth tables), waitlist, index
- `db/seed.ts` → Seed idempotente de sport_groups
- `routes/` → auth, activities, health, sync, plan, insights, sport-groups, ai, training, nutrition, profile, goals, **cycle**, **memory**, admin, public-meta, waitlist
- `insights/` → stats.ts, rules.ts (8 reglas), index.ts
- `ai/` → prompts.ts, context.ts, index.ts, tools.ts, nutrition-context.ts, providers/, config.ts, **tracing.ts** (LangSmith opcional, vía `LANGSMITH_API_KEY`)
- `lib/` → macros.ts (Mifflin-St Jeor), upload-dir.ts, **cycle.ts** (`computeCycleState`), int-pk.ts (`randomInt32Pk`), profile-completion.ts, origins.ts (CORS allowlist)
- `middleware/auth.ts` → `requireUser` (Better Auth session)

## Garmin's Systematic Offset (CRITICAL)

**Garmin devuelve datos con offset +1 día**: para data del día X, hay que querear con X+1.

Implementado en `sync.ts` con `nextDay()`. Sleep usa `calendarDate` de la respuesta. HRV/stress/summary usan `dateStr` directo.

**Sleep queries**: filtrar `WHERE score IS NOT NULL` — sync crea fila del día siguiente con score null.

## Garmin Endpoints

✅ Vía library: `getActivities`, `getSleepData`, `getHRVData`, `getSteps`, `getHeartRate`
✅ Vía `client.get()`: `/wellness-service/wellness/dailyStress/${date}`
❌ 403 permanente: `/usersummary-service/usersummary/daily/${date}` (body battery, calories), `/wellness-service/wellness/dailyHeartRate/${date}`

**Sin body battery** → `sleepScore` como proxy (rings READY y BATTERY del Dashboard).

## Garmin Rate Limiting (CRITICAL)

Cloudflare WAF tira 429 en muchas requests. `syncInitial()` hace ~190.

- `sleep(1000)` después de **toda** request en `garmin.ts` (incluyendo fallbacks)
- Initial sync ~3 min — esperado
- Si 429 persiste: esperar 30 min. Subir a `sleep(2000)` si sigue.

## Sport Type Mapping

Garmin agrega sufijo `_v2`. Stripear antes de lookup:
```typescript
const key = sportType.toLowerCase().replace(/\s+/g, '_').replace(/_v\d+$/, '');
```
La columna `category` de `activities` es **legacy** — fuente de verdad: tabla `sport_groups`.

### `sport_groups`
- `id` TEXT slug, `sport_types` jsonb, `metrics` jsonb, `chart_metrics` jsonb `[{dataKey,name,type}]`, `sort_order`
- Al boot: si está vacía, seedea 3 grupos (water_sports, tennis, gym)

### `/api/activities`
```typescript
{ groups: [{id, name, subtitle, color, icon, metrics, chartMetrics, data}], others, chartData, volumeHistory, trainingReadiness }
```

## Formatos

- Garmin `maxSpeed`: **m/s** → ×3.6 para KM/H
- Sleep como `Xh Xm` (nunca decimal): `` `${Math.floor(h)}h ${Math.round((h%1)*60)}m` ``

## Better Auth

- Email/password + **Google OAuth opcional** (`server/src/auth.ts`, cookies vía Better Auth).
- Env: `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL` (origin público de la **API**, ej. `http://localhost:3001`), `APP_URL` (origin del SPA).
- **Google**: `GOOGLE_CLIENT_ID` + `GOOGLE_CLIENT_SECRET`. En Cloud Console agregar redirect URI exacto: `{BETTER_AUTH_URL}/api/auth/callback/google`. Reiniciar tras editar `.env`.
- `GET /api/meta/auth-features` → `{ google: boolean }`. Login/Signup muestran "Continue with Google" sólo cuando está configurado.
- **Google redirect tras login**: `signIn.social` usa `callbackURL = window.location.origin` (no `/`, que iría al host API y mostraría "Cannot GET /" en dev). Setear `APP_URL` al mismo origin que abre el browser.

## Auth — Garmin (Playwright / get-tokens)

Garmin bloqueó SSO programático (Cloudflare WAF, mar 2026). Requiere browser real.

**Flow**: `npx tsx server/src/get-tokens.ts --email=...` → abre Chrome → login manual → tokens encriptados en DB (`garmin_tokens`). Duran ~90 días.

## Deploy (Render)

- Build: `npm install --legacy-peer-deps && npm run build && cd server && npm install`
- Start: `cd server && npx tsx src/index.ts`
- Env: `NODE_ENV=production`, `DATABASE_URL`, `DATABASE_URL_DIRECT`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `APP_URL`, `ANTHROPIC_API_KEY` (opcional), `UPLOAD_PATH=/data/uploads`

## DB — Tablas

| Tabla | Key | Notas |
|-------|-----|-------|
| `activities` | `garmin_id` | `category` legacy |
| `sleep` | `date` = calendarDate | offset -1; filtrar `score IS NOT NULL` |
| `hrv` / `stress` / `daily_summary` | `date` = dateStr | `body_battery` siempre null |
| `sport_groups` | TEXT slug | jsonb auto-parsed |
| `training_plans` | autoincrement | `status` active/archived · `language` (es/en) |
| `training_sessions` | autoincrement | `plan_id` FK · `type` (sport) + **`session_type`** (long_ride, long_run, threshold, tempo, race_pace, recovery, strength, mobility, brick, swim_technique, interval, other) |
| `training_exercises` | autoincrement | `description` AI nullable |
| `workout_logs` / `workout_sets` | autoincrement | sets CASCADE |
| `user_profile` | `id` int + UNIQUE `user_id` | **Single source of truth** para onboarding (Assessment) y macros. Campos: name, age, sex, height_cm, weight_kg, experience_level, primary_goal, secondary_goals, sports, training_days_per_week, available_days, equipment, dietary_preferences, injuries, training_preferences, past_injuries_detail, time_constraints, short/long_term_goals, special_considerations, daily_calorie_target, daily_protein_g/carbs_g/fat_g, **`tracks_cycle`**, **`locale`** (es/en), `onboarded_at`. Macros auto-Mifflin-St Jeor si no hay manuales. |
| `nutrition_logs` | autoincrement | `image_path` = basename en `uploads/` |
| `nutrition_plans` | autoincrement | `strategy` cut/bulk/recomp/maintain/endurance · `training_plan_id` FK nullable · `language` · **`supplements`** jsonb (puede estar vacío) |
| `nutrition_plan_meals` | autoincrement | `option_number` 1/2/3 por slot · index en `plan_id` |
| `goals` / `goal_milestones` | autoincrement | `language` · milestones CASCADE, `workouts` JSON |
| **`cycle_settings`** | UNIQUE `user_id` | `last_period_start`, `avg_cycle_length`, `avg_period_length`, `hormonal_contraception` (none/combined_pill/mini_pill/hormonal_iud/implant/injection/patch/ring/copper_iud), `tracking_goal`, `pack_schedule` (21_7/24_4/extended_84_7/continuous), `pack_start_date`, `has_regular_bleeding` (yes/no/sometimes) |
| **`cycle_logs`** | UNIQUE (`user_id`,`date`) | `period_active`, `is_period_start` (re-anchor), `flow_intensity`, `symptoms` jsonb, `mood`, `energy_level`, `notes` |
| **`memory_cards`** | autoincrement | `type` enum (goal/preference/constraint/routine/context), `title`, `content`, `metadata` (`why`, `how_to_apply`, `confirmed_at`), `pinned`, `source` (tool/manual). Index por (user_id, type). |
| `waitlist` | UNIQUE `email` | Pre-launch signup |

## Logout — Data Purge

POST `/api/auth/logout` borra: activities, sleep, stress, hrv, daily_summary, sync_log.
**No se purga**: training_plans, nutrition_logs/plans, user_profile, goals/milestones, cycle_*, memory_cards.

## API Errors

`apiFetch()` lanza `Error` con `error.status`. `429` rate-limit vs `401` credenciales.

## AI Coach (única superficie de chat)

Otros módulos embeben **`AskCoachInline`** (input + chips) que navega a `/` con `location.state.initialPrompt`. Cuando hay `initialPrompt` arranca **chat nuevo** (no continúa el anterior); el `contextHint` se incluye en el prompt para preservar el contexto del módulo (ej. plan nutricional activo, día seleccionado en `/nutrition`).

Endpoints:
- `POST /api/ai/chat` → streaming sin tools. Backend detecta keywords y carga contexto relevante (activities/sleep/wellness/nutrition); sin keywords carga los 4.
- `POST /api/ai/agent` → **agentic loop con tool_use**. Tools (11):
  - `update_profile` — datos estructurados
  - `create_memory` / `update_memory` / `delete_memory` — memory cards (perfil cualitativo)
  - `enable_cycle_tracking` — activa tracking de ciclo (sólo si `sex='female'` + interés explícito); modo según anticonceptivo
  - `log_cycle_day` — log diario (period, flow, symptoms, mood, energy)
  - `generate_training_plan`, `generate_nutrition_plan`, `generate_goal_plan`
  - `log_meal` (con `date` opcional retroactivo)
  - `get_daily_briefing`
  - `navigate_to` (sólo cuando el user pide ir/abrir/ver explícito)

Persiste side effects en DB **antes** de emitir `tool_result` SSE.

SSE: `{token}`, `{tool_call}`, `{tool_result}`, `[DONE]`. Historial en localStorage (`scala_ai_chats`).

**Empty-response guard** (`providers/claude.ts`): si Claude devuelve `end_turn` sin texto ni tool_use, reintenta una vez en silencio antes de emitir fallback localizado. Evita el bug "I'm sorry, I couldn't generate a response".

**`update_profile` UX**: la card de tool result muestra mensaje marketing-friendly con saludo personalizado (`Listo, ${firstName}.`) y tagline aspiracional — nunca las keys raw.

### Memory Cards (perfil cualitativo persistente)
- **Para qué sirve**: cosas que NO entran en `update_profile` pero que el coach debería recordar entre sesiones (rutinas con día/hora, constraints de schedule, preferencias con razón, contexto puntual tipo "carrera en octubre", lesiones detalladas).
- **Tipos**: `goal | preference | constraint | routine | context`. `pinned` y `source` (tool/manual).
- Inyectadas vía `buildMemoryContext(userId)` en el system prompt como sección `## Profile entries`. El LLM ve `(id: N)` y puede hacer update/delete por id.
- UI: `Profile.tsx` lista por sección con `ProfileEntryCard` + `ProfileEntryEditor` para CRUD manual.
- Routes `/api/memory`: `GET /` · `POST /` · `PUT /:id` · `PUT /:id/pin` · `DELETE /:id`

### Cycle (matizado por anticonceptivo)
- `lib/cycle.ts → computeCycleState()` resuelve modo según `hormonal_contraception`:
  - `none` / `copper_iud` → **natural mode** (requiere `last_period_start`)
  - `combined_pill` / `patch` / `ring` → **pill_pack mode** (requiere `pack_start_date` + `pack_schedule`). Trackea "active hormone week" vs "withdrawal week"; ovulación suprimida.
  - `mini_pill` / `hormonal_iud` → según `has_regular_bleeding`: `yes` → natural estimado (certainty=low), `no/sometimes` → symptom_only.
  - `implant` / `injection` → **symptom_only mode**. Sin predicción; sólo síntomas.
- Contexto al AI Coach (`buildAssessmentContext`): inyecta fase actual sólo si `tracks_cycle=true`. Si la predicción está stale, los prompts instruyen no hacer claims de fase y confiar en logs.
- Nutrition prompts ajustan macros/timing según fase (véase `prompts.ts` "CYCLE-AWARE NUTRITION").
- Routes `/api/cycle`: `GET/PUT/DELETE /settings`, `GET/POST /logs`, `DELETE /logs/:id`, `GET /calendar`.
- UI: `MenstrualCycle.tsx` con onboarding gradual + `CyclePhaseRing` (variante natural y pill_pack) + `CycleDayLogger`.

## Training Plans

Generados con Claude API (streaming SSE). **Two-phase prompt**:
1. 3-5 oraciones de análisis
2. Línea exacta `---PLAN_JSON---` seguida por JSON limpio

**CRITICAL**: el prompt `training_plan` **NO hereda `BASE`**. BASE genera prosa mezclada con JSON → JSON inválido. Standalone.

Backend usa callback `beforeDone` para extraer JSON tras `---PLAN_JSON---`, guardar vía `savePlanToDB()`, y emitir `{"plan":...}` antes de `[DONE]`.

`buildTrainingContext(goal)` incluye: assessment + memory cards, 30 días actividades, sport_groups, 14 días sleep, 7 días HRV, 7 días stress, intake nutricional promedio, ciclo (si aplica).

### Routes `/api/training`

| Method | Path | Descripción |
|--------|------|-------------|
| POST | `/generate` | Plan vía SSE |
| GET | `/plans` | Lista con stats |
| GET/PUT/DELETE | `/plans/:id` | CRUD. PUT archiva con `status:'archived'` |
| PUT | `/exercises/:id` | Edit targets |
| POST | `/exercises/:id/describe` | AI description (no streaming) |
| POST | `/workouts` · PUT/DELETE `/workouts/:id` · GET `/workouts?planId=&sessionId=` | Workouts |
| POST | `/workouts/:id/sets` · PUT/DELETE `/sets/:id` | Sets |
| GET | `/exercises/:id/history` | Para progressive overload |

### Colors — CRITICAL
`surface-lowest` **no existe** en Tailwind config. Texto oscuro sobre `bg-primary` (#f3ffca) → `text-surface` (#0e0e0e).

## Goals

`claudeChat()` sin streaming (5-10s). Body: `{ objective, targetDate }`.

```json
{ "title":"", "description":"", "milestones":[{"week":1,"title":"","description":"","target":"","workouts":[]}] }
```

`buildGoalContext` calcula semanas hasta `targetDate` e instruye exactamente esa cantidad de milestones.

`getAssessmentContext()` (nombre legacy) lee de `user_profile` — **no hay tabla assessment separada**. Se inyecta en Training Plans, Goals, y todos los analyze modes.

### Routes `/api/goals`
GET/DELETE `/:id`, PUT `/:id` (title/description/status), PUT `/:goalId/milestones/:milestoneId` (`{completed:bool}`), POST `/generate`

## Assessment (onboarding)

`src/pages/Assessment.tsx` es form multi-step. Escribe a `user_profile` vía `useProfile()` — **no hay tabla user_assessment**. Tanto AI context (`getAssessmentContext`) como macros (`computeMacroTargets`) leen del mismo row. `onboarded_at` flaggea onboarding completo.

El AI Coach también puede llenar los mismos campos vía `update_profile` (onboarding interactivo). Ambos paths convergen en `user_profile`.

## TTS/STT

Web Speech API browser. `useSTT` (lang dinámico, continuous, auto-restart 60s) + `useTTS`. STT sólo en Chrome/Edge.

## Nutrition

Provider-agnostic. Vision con `provider.visionStream`, plans con `provider.streamGenerate`. Default: Gemma 3n E2B vía Ollama. Toggle UI a Claude.

### AI Provider Architecture (`server/src/ai/providers/`)
- `config.ts` → `AI_CONFIG`. `modelNameFor(provider)` para columnas DB.
- `types.ts` → `Provider` interface: `chat`, `chatJSON`, `streamChat`, `streamGenerate`, `visionStream`, `streamAgent`
- `gemma.ts` → Gemma 3n vía Ollama. Vision con `images:[base64]`. Agent vía ReAct.
- `claude.ts` → Claude vía Anthropic SDK. Agent con tool_use nativo.
- `ollama.ts` → Cliente low-level `/api/chat`.
- `react-agent.ts` → ReAct loop para modelos sin tool_use. Fenced `` ```tool_call `` blocks.
- `index.ts` → `getProvider(name?)`, `pickProviderFromReq(req)`, `isAIConfigured(name?)`
- Rutas usan `pickProviderFromReq(req)`: `body.provider` / `query.provider` / header `x-ai-provider` / env `AI_PROVIDER`.
- `ANTHROPIC_API_KEY` **opcional** — sólo si `provider=claude`.

### LangSmith tracing (opcional)
`ai/tracing.ts` exporta `createRun`, `endRun`. Sin `LANGSMITH_API_KEY` es no-op silencioso. Spans para `ai.chat`, `ai.agent`, `tool.<name>`.

### SSE Formats
**Photo analyze**: `{"image_path":"..."}`, luego `{"token":"..."}`, luego `[DONE]`
**Plans/generate**: `{"token":"..."}`, `{"plan":{...},"done":true}`, `[DONE]`
**Training/generate**: `{"token":"..."}`, `{"plan":{...},"recommendations":"..."}`, `[DONE]`

### UPSERT en user_profile (CRITICAL)
`user_profile` está keyada por `user_id` (UNIQUE), NO por `id=1`. Lookup por `user_id`, después update o insert:
```typescript
const [existing] = await db.select({ id: user_profile.id })
  .from(user_profile).where(eq(user_profile.user_id, userId));
if (existing) {
  await db.update(user_profile).set({ ...fields, updated_at: now })
    .where(eq(user_profile.user_id, userId));
} else {
  await db.insert(user_profile).values({
    id: randomInt32Pk(), user_id: userId, ...fields, updated_at: now,
  });
}
```
El int `id` PK queda por compat con rows antiguas; nuevos usan `randomInt32Pk()` de `lib/int-pk.ts`.

### dietary_preferences
JSON **objeto** (no array) en `user_profile`:
```ts
{ diet_type: string, allergies: string[], excluded_foods: string, preferred_foods: string, meals_per_day: number }
```
Compat en nutrition-context.ts: si encuentra array (formato viejo), lo une.

### Target Logic
Si `user_profile.daily_calorie_target` existe → usalo. Sino → defaults: 2000kcal/150g prot/250g carbs/65g grasa. Generar plan escribe macros a `user_profile` vía UPSERT.

### Imágenes
En `server/uploads/`. Static. Vite proxy: `'/uploads': 'http://localhost:3001'`. DELETE de log borra archivo con `fs.unlink()` (no-blocking).

Env: `AI_PROVIDER=gemma|claude` (default gemma), `OLLAMA_URL`, `GEMMA_MODEL=gemma4:e2b`, `GEMMA_VISION_MODEL`, `ANTHROPIC_API_KEY` (opcional), `CLAUDE_MODEL=claude-sonnet-4-6`, `UPLOAD_PATH=/data/uploads`, `LANGSMITH_API_KEY` (opcional).

### Supplements
`nutrition_plans.supplements` jsonb: `[{ name, dose, timing, trigger?, rationale? }]`.
- `timing`: `morning | pre_session | during_session | post_session | evening | conditional`
- `trigger` semántico (NO FK): `sport_type:cycling_long`, `session_duration_gt_min:90`, `macro_short:protein|calories`. Resiliente a regen del training plan.
- El prompt instruye **emitir `supplements: []` cuando el contexto no lo justifica**. No renderizar `SupplementsCard` si vacío.
- Frontend mapea triggers a labels naturales en `SupplementsCard.tsx`.

### Training ↔ Nutrition linkage
- FK `nutrition_plans.training_plan_id` → `training_plans.id` (nullable). Set cuando AI Coach recibe `linked_training_plan_id` o cuando se genera desde `/nutrition` con plan activo.
- UI bidireccional: `Nutrition.tsx` chip "Ver plan de entreno vinculado" · `PlanDetail.tsx` chip "Nutrición: ..." y chip `session_type` por sesión.
- `getPlanById` (server) hace join y devuelve `nutrition_plan: { id, title, strategy, daily_calories, supplements_count } | null`.

### Routes `/api/nutrition`
- `POST /analyze` — vision SSE
- `POST /logs` · `GET /logs?date=` · `PUT/DELETE /logs/:id`
- `GET /logs/range?from=&to=` — agregados diarios
- `GET /calendar?month=YYYY-MM` — heatmap mensual: `{ days: [{date, calories, ..., score: 0..100|null}], targets, month }`. `score` = avg % adherence 4 macros (cap 100). Powers `NutritionCalendar`.
- `POST /plans/generate` — SSE. Genera plan + supplements + auto-link a training plan activo.
- `GET /plans` — incluye `supplements`.
- `GET /plans/:id` — plan + meals + `linked_training_plan: {id, title, sessions:[{id,name,session_type}]} | null`.
- `DELETE /plans/:id`

**No hay endpoint `/chat`** — único chat es el AI Coach.

## Insights Engine

`server/src/insights/`: stats.ts (puro), rules.ts (8 reglas, top 3), index.ts.
**Stress trend**: "improving" = valores suben (= peor) → invertido en rules.

## Readiness Score

Sin body_battery. Score: Sleep 40% + Inverse Stress 30% + HRV 30%.
HRV mapeo: ≤20ms→10, 20-38ms→10-45, 38-99ms→45-100, ≥99ms→100.
Si una métrica es 0, su peso se redistribuye. En `health.ts` y `activities.ts`.

## i18n

- react-i18next, locales en `src/i18n/locales/{en,es}.json`. Default español.
- `useLanguage()` persiste en `localStorage[scala_language]` y sincroniza vía `PUT /api/profile { locale }`.
- Backend: prompts (`prompts.ts`) tienen rama es/en con regla CRÍTICA de no cambiar idioma. Plans/goals guardan `language` para mantener consistencia al regenerar.

## Important Notes

1. **Reiniciar el server** tras cambios en `server/src/` — tsx no auto-reload
2. Sync periódico sólo corre si hay sesión activa (`garmin.getStatus() === true`)
3. `fetchDailySummary` falla con 403 → fallback (`getSteps` + `getHeartRate`) — ambos con `sleep(1000)`
4. **Todas las funciones DB son async** (Drizzle + Postgres). Routes y context builders deben `await` todo.
5. **jsonb** (sport_types, metrics, equipment, symptoms, supplements, etc.) auto-parsed por Drizzle — no `JSON.parse/stringify`.

## Database — Neon Postgres + Drizzle

```bash
# In server/
npm run db:generate   # nueva migration desde cambios en schema/
npm run db:migrate    # aplica migrations a Neon
npm run db:studio     # GUI
npm run db:seed       # seed sport_groups
```

**TODO — rename Neon DB**: la base en Neon todavía se llama `drift` con role `drift_owner`. Cuando se haga el rename a `scala`/`scala_owner`, actualizar `DATABASE_URL` y `DATABASE_URL_DIRECT` en Render (servicio `scala`) y en `server/.env` local. `server/.env.example` ya quedó con los placeholders nuevos como referencia.

## PWA / API

- `vite-plugin-pwa` **no debe** cachear `/api/*`: respuestas autenticadas no se particionan por user en SW. Si algo sigue cacheado: DevTools → Application → Service workers → **Unregister** + hard reload.

## Dev Commands
```bash
# DATABASE_URL y DATABASE_URL_DIRECT en server/.env (de Neon console)

# AI local (Gemma) — default
ollama serve
ollama pull gemma4:e2b        # ~2GB
# ollama pull gemma3:4b        # fallback si vision falla

npx tsx server/src/index.ts   # backend :3001
npm run dev                    # frontend :5175
curl -X POST http://localhost:3001/api/sync

# Migración one-time desde SQLite (sólo con data legacy)
DB_PATH=./scala.db npx tsx server/scripts/migrate-sqlite-to-postgres.ts
```
