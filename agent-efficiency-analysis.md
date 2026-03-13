# Coding Agent Efficiency Analysis

**Author:** williamnewton  
**Period:** Dec 13, 2025 - Mar 13, 2026  
**Total PRs:** 87  
**Focus:** How effectively coding agents (Claude via Slack, Cursor Agent, Claude IDE) produce shippable code

---

## Executive Summary

### PR Origins

| Origin | PRs | Avg Commits | Avg Substantive | Median | 1-commit % |
|--------|----:|------------:|----------------:|-------:|-----------:|
| Slack → Claude | 21 | 8.2 | 6.0 | 3 | 19% |
| Cursor Agent | 48 | 4.5 | 2.9 | 3 | 27% |
| Claude (IDE) | 10 | 15.5 | 9.0 | 18 | 0% |
| Manual branch | 8 | 13.1 | 7.2 | 9 | 12% |

### The headline numbers

- **18 PRs (20%)** merged with a single commit — the agent nailed it first try
- **41 PRs (47%)** merged with 1-3 commits — minimal iteration
- **20 PRs (22%)** had 10+ commits — significant back-and-forth
- **650 total commits**, of which **239 (36%)** were noise (merges, lint auto-fix, i18n bot)
- **205 fix commits** across all PRs — each represents an agent correction cycle

---

## What Works: Clean Agent Runs (1-2 commits)

These PRs represent the ideal: a single prompt produced shippable code with zero or minimal iteration.

**35 PRs** fell into this category.

### Characteristics of clean runs

**1. Highly scoped, single-concern tasks**
Every clean PR does exactly one thing. The task is unambiguous and doesn't require the agent to make design decisions.

Examples:
- `2026-03-10` [ai-824 [ai-chat-core] Agent settings icon](https://github.com/amplitude/javascript/pull/97498) — `Cursor Agent`
- `2026-03-05` [AI-817 [lightning] Classifier button overlap](https://github.com/amplitude/javascript/pull/96937) — `Cursor Agent`
- `2026-03-03` [amp-140638 [ai-chat-core] Chat core max width](https://github.com/amplitude/javascript/pull/96515) — `Cursor Agent`
- `2026-02-27` [amp-140638 [lightning] Classifier fab position](https://github.com/amplitude/javascript/pull/95931) — `Cursor Agent`
- `2026-02-25` [amp-140638 [lightning] Custom instructions editor modal](https://github.com/amplitude/javascript/pull/95702) — `Cursor Agent`
- `2026-02-13` [AI-609 [ai-chat-core] Link parser undefined URLs](https://github.com/amplitude/javascript/pull/94623) — `Cursor Agent`
- `2026-02-12` [AI-577 [lightning] Chat setup button removal](https://github.com/amplitude/javascript/pull/94344) — `Cursor Agent`
- `2026-02-11` [amp-140638 [lightning] Ask banner color icon](https://github.com/amplitude/javascript/pull/94184) — `Cursor Agent`

**2. CSS/layout fixes dominate**
12 of 35 clean runs were CSS/layout changes — agents excel at targeted style fixes.

**3. Removal is easier than creation**
2 clean PRs were removals/deletions — the simplest possible task for an agent.

**4. Origin breakdown:** 10 from Slack, 23 from Cursor, 2 other

---

## What Thrashes: High-Iteration PRs (10+ commits)

**20 PRs** had 10+ commits. These consumed disproportionate agent cycles.

### The worst offenders

| PR | Commits | Substantive | Fix commits | Origin | Title |
|---:|--------:|------------:|------------:|--------|-------|
| [#92154](https://github.com/amplitude/javascript/pull/92154) | 49 | 39 | 17 | Slack → Claude | AI-387 [lightning] Agents Dashboard Entrypoint - Add agents  |
| [#94401](https://github.com/amplitude/javascript/pull/94401) | 36 | 14 | 12 | Manual branch | amp-140638 [ai-chat-core]  AI Controls, Context, Files UI po |
| [#92848](https://github.com/amplitude/javascript/pull/92848) | 28 | 20 | 13 | Cursor Agent | amp-140638 [lightning] Dashboard / Agents popover UI adjustm |
| [#97129](https://github.com/amplitude/javascript/pull/97129) | 25 | 10 | 8 | Claude (IDE) | AI-824 [agents] Add Opportunities management page with PDLC  |
| [#97936](https://github.com/amplitude/javascript/pull/97936) | 23 | 10 | 8 | Manual branch | AI-886 [agents] clean up opportunities view |
| [#94097](https://github.com/amplitude/javascript/pull/94097) | 23 | 12 | 6 | Claude (IDE) | AMP-148810 [lightning] Update Global Agent splash page look, |
| [#97394](https://github.com/amplitude/javascript/pull/97394) | 22 | 14 | 8 | Manual branch | AI-824 [lightning] add inline validation and helper text to  |
| [#94204](https://github.com/amplitude/javascript/pull/94204) | 22 | 13 | 6 | Claude (IDE) | amp-140638 [lightning] Claude/svg collage background sg7n b |
| [#92945](https://github.com/amplitude/javascript/pull/92945) | 21 | 16 | 6 | Cursor Agent | amp-140638 [lightning] Shared Agents UI Details Postlaunchfi |
| [#92594](https://github.com/amplitude/javascript/pull/92594) | 20 | 15 | 7 | Slack → Claude | amp-140638 [ai-chat-core] refactor(ai-chat): add translation |
| [#92198](https://github.com/amplitude/javascript/pull/92198) | 20 | 15 | 16 | Claude (IDE) | AI-331 [lightning] Sharing agents: Fix share modal spacing a |
| [#93246](https://github.com/amplitude/javascript/pull/93246) | 19 | 8 | 5 | Slack → Claude | amp-140638 [lightning] Add Session Replay Agents popover to  |
| [#97134](https://github.com/amplitude/javascript/pull/97134) | 18 | 8 | 5 | Claude (IDE) | ai-824 [agents] Refactor OpportunityDetailPage layout and re |
| [#94510](https://github.com/amplitude/javascript/pull/94510) | 17 | 10 | 5 | Claude (IDE) | amp-140638 [lightning] Refactor Global Agent toggle to use T |
| [#90193](https://github.com/amplitude/javascript/pull/90193) | 17 | 11 | 1 | Slack → Claude | amp-140638 [ai-chat-core] add ForkConversation component for |
| [#90210](https://github.com/amplitude/javascript/pull/90210) | 15 | 13 | 2 | Slack → Claude | amp-140638 [lightning] Enhance Agents Overview Page Layout |
| [#94400](https://github.com/amplitude/javascript/pull/94400) | 14 | 6 | 7 | Cursor Agent | amp-140638 [ai-chat-core] Ai-chat debug panel dark mode! |
| [#96944](https://github.com/amplitude/javascript/pull/96944) | 13 | 11 | 7 | Claude (IDE) | AMP-140638 [agents] Extract opportunity detail view to dedic |
| [#92384](https://github.com/amplitude/javascript/pull/92384) | 13 | 7 | 1 | Slack → Claude | amp-140638 [lightning] Change Export Markdown to Copy Markdo |
| [#93683](https://github.com/amplitude/javascript/pull/93683) | 10 | 6 | 4 | Cursor Agent | amp-140638 [lightning] Ask Amplitude warning Al-507 |

### Root causes of thrash

**1. Scope creep within a single PR**
The #1 pattern: a PR starts as one thing, then more gets added. Example:
- **#92154** (49 commits): Started as "add agents icon button" → grew to include popover, empty state, create modal, agent switcher UI, z-index fixes, and collaboration with 4 different authors.
- **#94401** (36 commits): "AI Controls polish" became a catch-all for multiple UI refinements across context, files, and settings.

**2. Visual/design iteration**
Agents struggle with visual design tasks that require subjective judgment:
- **#94204** (22 commits): SVG collage background required multiple rounds of repositioning, z-index fixes, blur adjustments, and human intervention ("add images", "make it slap").
- **#94097** (23 commits): Splash page "look, copy and messaging" involved iterative refinement that agents can't self-evaluate.
- **#92945** (21 commits): "Shared Agents UI Details" — 6 fix commits just for button width, spacing, and padding.

**3. Multi-component features**
When a PR touches multiple components or requires cross-cutting changes, agents need many rounds:
- **#93246** (19 commits): Session Replay agents popover required creating the popover, making the modal dynamic, adding starter prompts, fixing z-index for dropdowns, and availability checks.
- **#97129** (25 commits): Opportunities manage page involved routing, tabs, feature flags, and back-end coordination.

**4. i18n/CI noise inflates commit counts**
Across the 20 high-thrash PRs, **167 of 425 commits (39%)** were noise (Smartling translations, lint auto-fixes, merge commits). The i18n bot alone generates 2-6 commits per PR with translatable strings.

**5. Fix-commit ratio reveals agent accuracy**
- High-thrash PRs: **58%** of substantive commits are fixes
- Clean PRs: **47%** of substantive commits are fixes
- In thrash PRs, agents spend most of their time fixing what they just wrote.

---

## Learnings for the Organization

### What makes agents succeed (defaults to build in)


1. **One task, one PR, one prompt.** The cleanest runs all share a common trait: the prompt describes exactly one change. Build tooling that enforces or encourages single-concern prompts.

2. **CSS and layout fixes are the agent sweet spot.** Agents are remarkably good at targeted style changes — z-index, padding, width, position, colors. Consider making these a first-class "quick fix" workflow in Slack.

3. **Removals and deletions are trivially easy.** "Remove X" or "Hide Y" prompts almost never need iteration. Build templates for common removal patterns.

4. **Feature flags and config changes are one-shotters.** Adding a feature flag or a config value is mechanical and well-suited to agents.

5. **Agents should lint/format before committing.** Many thrash PRs have separate lint-fix commits. If the agent ran the formatter as part of its workflow, this noise disappears.

6. **i18n should be handled post-merge, not in-PR.** Smartling bot commits inflate PR complexity massively. Consider a workflow where translations are managed as a follow-up.

### What makes agents struggle (guardrails to build)


1. **Scope gates.** The highest-thrash PRs all started small and grew. Build a system that flags when a PR crosses a complexity threshold (e.g., >5 substantive commits, >3 files changed) and suggests splitting.

2. **Visual design requires human-in-the-loop.** Agents can't judge aesthetics. For any task involving "look and feel", "polish", or "make it look good", the workflow should include a screenshot review step before committing.

3. **Multi-component features need decomposition.** When a feature touches routing + UI + API + i18n, break it into sequential agent tasks rather than one mega-prompt. The Opportunities build in March shows this working well — many small PRs instead of one big one.

4. **Fix-commit detection as a quality signal.** If an agent produces a commit with "fix" in the message on the same PR, that's signal that the original prompt was underspecified or the agent made assumptions. Track this metric to identify prompt patterns that need templates.

5. **Cursor vs Slack efficiency gap.** Cursor Agent PRs average 4.5 commits vs Slack-originated Claude PRs at 8.2. Cursor's tighter IDE integration may give it better context. Investigate whether Slack-originated prompts can include more file context by default.

6. **Multi-author PRs correlate with thrash.** The worst PRs have 3-4 different authors (Claude, Cursor Agent, human, i18n bot). Consider enforcing one-agent-per-PR to reduce context-switching overhead.

### Recommended system defaults


| Default | Why |
|---------|-----|
| Auto-format before commit | Eliminates lint noise commits |
| Max 3 files changed per agent task | Forces decomposition |
| Screenshot review for any UI change | Catches visual issues before commit |
| Post-merge i18n pipeline | Removes Smartling noise from PRs |
| Prompt templates for common patterns | CSS fix, feature flag, removal, rename |
| Commit-count alerting at 5+ | Flags thrash early so humans can intervene |
| Single agent per PR | Prevents multi-agent context confusion |

---

## Appendix: All PRs by Commit Count

| Date | PR | Commits | Substantive | Fixes | Origin | Title |
|------|---:|--------:|------------:|------:|--------|-------|
| 2026-01-28 | [#92154](https://github.com/amplitude/javascript/pull/92154) | 49 | 39 | 17 | Slack → Claude | AI-387 [lightning] Agents Dashboard Entrypoint - Add ag |
| 2026-02-12 | [#94401](https://github.com/amplitude/javascript/pull/94401) | 36 | 14 | 12 | Manual branch | amp-140638 [ai-chat-core]  AI Controls, Context, Files  |
| 2026-01-30 | [#92848](https://github.com/amplitude/javascript/pull/92848) | 28 | 20 | 13 | Cursor Agent | amp-140638 [lightning] Dashboard / Agents popover UI ad |
| 2026-03-07 | [#97129](https://github.com/amplitude/javascript/pull/97129) | 25 | 10 | 8 | Claude (IDE) | AI-824 [agents] Add Opportunities management page with  |
| 2026-03-12 | [#97936](https://github.com/amplitude/javascript/pull/97936) | 23 | 10 | 8 | Manual branch | AI-886 [agents] clean up opportunities view |
| 2026-02-11 | [#94097](https://github.com/amplitude/javascript/pull/94097) | 23 | 12 | 6 | Claude (IDE) | AMP-148810 [lightning] Update Global Agent splash page  |
| 2026-03-10 | [#97394](https://github.com/amplitude/javascript/pull/97394) | 22 | 14 | 8 | Manual branch | AI-824 [lightning] add inline validation and helper tex |
| 2026-02-13 | [#94204](https://github.com/amplitude/javascript/pull/94204) | 22 | 13 | 6 | Claude (IDE) | amp-140638 [lightning] Claude/svg collage background sg |
| 2026-01-30 | [#92945](https://github.com/amplitude/javascript/pull/92945) | 21 | 16 | 6 | Cursor Agent | amp-140638 [lightning] Shared Agents UI Details Postlau |
| 2026-01-27 | [#92594](https://github.com/amplitude/javascript/pull/92594) | 20 | 15 | 7 | Slack → Claude | amp-140638 [ai-chat-core] refactor(ai-chat): add transl |
| 2026-01-21 | [#92198](https://github.com/amplitude/javascript/pull/92198) | 20 | 15 | 16 | Claude (IDE) | AI-331 [lightning] Sharing agents: Fix share modal spac |
| 2026-02-10 | [#93246](https://github.com/amplitude/javascript/pull/93246) | 19 | 8 | 5 | Slack → Claude | amp-140638 [lightning] Add Session Replay Agents popove |
| 2026-03-07 | [#97134](https://github.com/amplitude/javascript/pull/97134) | 18 | 8 | 5 | Claude (IDE) | ai-824 [agents] Refactor OpportunityDetailPage layout a |
| 2026-02-13 | [#94510](https://github.com/amplitude/javascript/pull/94510) | 17 | 10 | 5 | Claude (IDE) | amp-140638 [lightning] Refactor Global Agent toggle to  |
| 2025-12-17 | [#90193](https://github.com/amplitude/javascript/pull/90193) | 17 | 11 | 1 | Slack → Claude | amp-140638 [ai-chat-core] add ForkConversation componen |
| 2025-12-18 | [#90210](https://github.com/amplitude/javascript/pull/90210) | 15 | 13 | 2 | Slack → Claude | amp-140638 [lightning] Enhance Agents Overview Page Lay |
| 2026-02-15 | [#94400](https://github.com/amplitude/javascript/pull/94400) | 14 | 6 | 7 | Cursor Agent | amp-140638 [ai-chat-core] Ai-chat debug panel dark mode |
| 2026-03-06 | [#96944](https://github.com/amplitude/javascript/pull/96944) | 13 | 11 | 7 | Claude (IDE) | AMP-140638 [agents] Extract opportunity detail view to  |
| 2026-01-24 | [#92384](https://github.com/amplitude/javascript/pull/92384) | 13 | 7 | 1 | Slack → Claude | amp-140638 [lightning] Change Export Markdown to Copy M |
| 2026-02-09 | [#93683](https://github.com/amplitude/javascript/pull/93683) | 10 | 6 | 4 | Cursor Agent | amp-140638 [lightning] Ask Amplitude warning Al-507 |
| 2026-03-06 | [#34727](https://github.com/amplitude/amplitude/pull/34727) | 9 | 8 | 0 | Claude (IDE) | amp-140638 [langley] Add Opportunity Investigator subag |
| 2026-02-27 | [#95872](https://github.com/amplitude/javascript/pull/95872) | 9 | 3 | 1 | Cursor Agent | amp-140638 [lightning] Agent notifications optional ✅ |
| 2026-02-14 | [#94674](https://github.com/amplitude/javascript/pull/94674) | 9 | 4 | 4 | Cursor Agent | amp-140638 [lightning] Global agent availability tight  |
| 2026-02-05 | [#93562](https://github.com/amplitude/javascript/pull/93562) | 9 | 7 | 1 | Manual branch | amp-140638 [lightning] Update global agent splash |
| 2025-12-18 | [#90285](https://github.com/amplitude/javascript/pull/90285) | 9 | 6 | 0 | Cursor Agent | amp-140638 [lightning] Home category default prompts |
| 2026-01-28 | [#33630](https://github.com/amplitude/amplitude/pull/33630) | 8 | 7 | 0 | Cursor Agent | amp-140638 [langley] Session replay email styling |
| 2026-01-06 | [#91077](https://github.com/amplitude/javascript/pull/91077) | 8 | 5 | 1 | Slack → Claude | amp-140638 [lightning] feat(agents): improve empty stat |
| 2026-03-12 | [#98048](https://github.com/amplitude/javascript/pull/98048) | 7 | 5 | 2 | Manual branch | AMP-074 [agents] refactor opportunity detail view and s |
| 2026-03-09 | [#97249](https://github.com/amplitude/javascript/pull/97249) | 7 | 3 | 3 | Cursor Agent | GLO-228 [lightning] Fix export to notebook |
| 2026-02-16 | [#94731](https://github.com/amplitude/javascript/pull/94731) | 7 | 3 | 2 | Cursor Agent | amp-140638 [ai-chat-core] Add default prompts to AI Con |
| 2026-02-27 | [#95897](https://github.com/amplitude/javascript/pull/95897) | 5 | 2 | 2 | Cursor Agent | amp-140638 [lightning] React artifact error boundary |
| 2026-02-24 | [#95440](https://github.com/amplitude/javascript/pull/95440) | 5 | 3 | 1 | Cursor Agent | amp-140638 [ai-chat-core] AI chat action UI |
| 2026-02-23 | [#95413](https://github.com/amplitude/javascript/pull/95413) | 5 | 3 | 4 | Cursor Agent | amp-140638 [onenav] Navigation skeleton alignment |
| 2026-02-14 | [#94477](https://github.com/amplitude/javascript/pull/94477) | 5 | 2 | 1 | Cursor Agent | amp-140638 [lightning] SR Mobile unavailability docs li |
| 2026-02-12 | [#94385](https://github.com/amplitude/javascript/pull/94385) | 5 | 1 | 0 | Claude (IDE) | amp-140638 [i18n] Change All  "Ask AI" to "Global Agent |
| 2026-02-05 | [#93615](https://github.com/amplitude/javascript/pull/93615) | 5 | 2 | 0 | Cursor Agent | amp-140638 [lightning] Delete `?` icon because of repet |
| 2026-01-28 | [#92765](https://github.com/amplitude/javascript/pull/92765) | 5 | 2 | 0 | Cursor Agent | amp-140638 [onenav] New chat placeholder text |
| 2025-12-18 | [#90383](https://github.com/amplitude/javascript/pull/90383) | 5 | 5 | 2 | Slack → Claude | amp-140638 [lightning] Reduce chat fade height and over |
| 2025-12-16 | [#90117](https://github.com/amplitude/javascript/pull/90117) | 5 | 5 | 1 | Manual branch | amp-140638 [ai-chat-core] Add Collapsible History List |
| 2026-03-12 | [#97874](https://github.com/amplitude/javascript/pull/97874) | 4 | 2 | 1 | Cursor Agent | amp-140638 [lightning] Agents overview owner filter |
| 2026-03-11 | [#97525](https://github.com/amplitude/javascript/pull/97525) | 4 | 2 | 3 | Cursor Agent | amp-140638 [lightning] Tooltip display order |
| 2026-03-06 | [#34738](https://github.com/amplitude/amplitude/pull/34738) | 4 | 4 | 0 | Slack → Claude | AMP-150126 [langley]Slack AI response bullets |
| 2026-02-24 | [#95419](https://github.com/amplitude/javascript/pull/95419) | 4 | 4 | 3 | Cursor Agent | amp-140638 [ai-chat-core] AI chat hr styling |
| 2026-02-23 | [#95408](https://github.com/amplitude/javascript/pull/95408) | 4 | 3 | 2 | Cursor Agent | amp-140638 [lightning] Dashboard artifact rendering |
| 2026-02-14 | [#94516](https://github.com/amplitude/javascript/pull/94516) | 4 | 3 | 3 | Cursor Agent | amp-140638 [lightning] FIX BUTTERBAR BROKEN Outage bann |
| 2026-01-06 | [#91059](https://github.com/amplitude/javascript/pull/91059) | 4 | 3 | 1 | Cursor Agent | amp-140638 [ai-chat-core] Ai chat panel padding |
| 2026-03-13 | [#97982](https://github.com/amplitude/javascript/pull/97982) | 3 | 1 | 1 | Cursor Agent | amp-140638 [lightning] Agents overview table display |
| 2026-03-05 | [#96920](https://github.com/amplitude/javascript/pull/96920) | 3 | 2 | 1 | Claude (IDE) | amp-140638 [agents] Enhance OpportunityCard with catego |
| 2026-01-29 | [#92953](https://github.com/amplitude/javascript/pull/92953) | 3 | 3 | 0 | Cursor Agent | amp-140638 [lightning] Agent popover menu unified |
| 2026-02-02 | [#92783](https://github.com/amplitude/javascript/pull/92783) | 3 | 2 | 0 | Cursor Agent | amp-140638 [onenav] AI : Change "Ask AI" to "Chat" |
| 2025-12-19 | [#90395](https://github.com/amplitude/javascript/pull/90395) | 3 | 3 | 1 | Slack → Claude | amp-140638 [lightning] Fix chart controls panel collaps |
| 2025-12-16 | [#90195](https://github.com/amplitude/javascript/pull/90195) | 3 | 3 | 0 | Slack → Claude | amp-140638 [lightning] Auto-collapse Chart Controls on  |
| 2026-03-07 | [#96977](https://github.com/amplitude/javascript/pull/96977) | 2 | 1 | 0 | Cursor Agent | AI-818 [lightning] AI content filter tooltip |
| 2026-03-09 | [#96450](https://github.com/amplitude/javascript/pull/96450) | 2 | 1 | 1 | Cursor Agent | amp-140638 [stargate] Activity log color variables |
| 2026-02-25 | [#95596](https://github.com/amplitude/javascript/pull/95596) | 2 | 2 | 0 | Cursor Agent | amp-140638 [cerulean] Empty state popover size |
| 2026-02-23 | [#95421](https://github.com/amplitude/javascript/pull/95421) | 2 | 2 | 2 | Cursor Agent | amp-140638 [onenav] Ai-chat button on agent sessions |
| 2026-02-15 | [#94718](https://github.com/amplitude/javascript/pull/94718) | 2 | 1 | 0 | Cursor Agent | amp-140638 [lightning] Generated by AI filter |
| 2026-02-13 | [#94661](https://github.com/amplitude/javascript/pull/94661) | 2 | 1 | 0 | Cursor Agent | amp-140638 [lightning] AI controls new badge |
| 2026-02-11 | [#94124](https://github.com/amplitude/javascript/pull/94124) | 2 | 1 | 0 | Cursor Agent | amp-140638 [ai-chat-core] Prompt input placeholder |
| 2026-02-09 | [#93927](https://github.com/amplitude/javascript/pull/93927) | 2 | 2 | 0 | Cursor Agent | amp-140638 [i18n] Ask Amplitude banner message |
| 2026-01-31 | [#93078](https://github.com/amplitude/javascript/pull/93078) | 2 | 2 | 2 | Cursor Agent | AMP-140638 [lightning] Dark mode markdown artifacts |
| 2026-01-30 | [#93034](https://github.com/amplitude/javascript/pull/93034) | 2 | 2 | 1 | Manual branch | amp-140638 [lightning] Splash page visual polish and st |
| 2026-01-07 | [#91215](https://github.com/amplitude/javascript/pull/91215) | 2 | 1 | 0 | Slack → Claude | AI-277 [ai-chat-core] Add New Chat button to collapsed  |
| 2026-01-07 | [#91202](https://github.com/amplitude/javascript/pull/91202) | 2 | 1 | 2 | Cursor Agent | amp-140638 [lightning] Chart header alignment fix |
| 2026-01-08 | [#91129](https://github.com/amplitude/javascript/pull/91129) | 2 | 1 | 2 | Slack → Claude | amp-140638 [ai-ui] fix AmpPixelWave clipping by using i |
| 2025-12-19 | [#90499](https://github.com/amplitude/javascript/pull/90499) | 2 | 2 | 1 | Slack → Claude | AMP-145851 [lightning] fix: increase x-axis tickPixelIn |
| 2025-12-18 | [#90399](https://github.com/amplitude/javascript/pull/90399) | 2 | 1 | 0 | Slack → Claude | amp-140638 [lightning] Add tooltip to display-only app  |
| 2025-12-18 | [#90332](https://github.com/amplitude/javascript/pull/90332) | 2 | 1 | 0 | Slack → Claude | CASS-2748 [ai-chat-core] simplify agent activity accord |
| 2025-12-17 | [#90231](https://github.com/amplitude/javascript/pull/90231) | 2 | 2 | 1 | Slack → Claude | amp-140638 [lightning] Instrument AI Context Settings E |
| 2026-03-10 | [#97498](https://github.com/amplitude/javascript/pull/97498) | 1 | 1 | 0 | Cursor Agent | ai-824 [ai-chat-core] Agent settings icon |
| 2026-03-05 | [#96937](https://github.com/amplitude/javascript/pull/96937) | 1 | 1 | 1 | Cursor Agent | AI-817 [lightning] Classifier button overlap |
| 2026-03-03 | [#96515](https://github.com/amplitude/javascript/pull/96515) | 1 | 1 | 0 | Cursor Agent | amp-140638 [ai-chat-core] Chat core max width |
| 2026-02-27 | [#95931](https://github.com/amplitude/javascript/pull/95931) | 1 | 1 | 1 | Cursor Agent | amp-140638 [lightning] Classifier fab position |
| 2026-02-25 | [#95702](https://github.com/amplitude/javascript/pull/95702) | 1 | 1 | 0 | Cursor Agent | amp-140638 [lightning] Custom instructions editor modal |
| 2026-02-13 | [#94623](https://github.com/amplitude/javascript/pull/94623) | 1 | 1 | 1 | Cursor Agent | AI-609 [ai-chat-core] Link parser undefined URLs |
| 2026-02-12 | [#94344](https://github.com/amplitude/javascript/pull/94344) | 1 | 1 | 0 | Cursor Agent | AI-577 [lightning] Chat setup button removal |
| 2026-02-11 | [#94184](https://github.com/amplitude/javascript/pull/94184) | 1 | 1 | 0 | Cursor Agent | amp-140638 [lightning] Ask banner color icon |
| 2026-02-10 | [#94060](https://github.com/amplitude/javascript/pull/94060) | 1 | 1 | 1 | Cursor Agent | amp-140638 [lightning] Homepage cards color values |
| 2026-01-31 | [#93111](https://github.com/amplitude/javascript/pull/93111) | 1 | 1 | 0 | Manual branch | amp-140638 [lightning] Update ContentRenderer.tsx |
| 2026-01-29 | [#92951](https://github.com/amplitude/javascript/pull/92951) | 1 | 1 | 1 | Cursor Agent | amp-140638 [lightning] Agent settings sidepanel positio |
| 2026-01-27 | [#92744](https://github.com/amplitude/javascript/pull/92744) | 1 | 1 | 1 | Cursor Agent | amp-140638 [onenav] Onenav help tooltip cutoff |
| 2026-01-28 | [#92704](https://github.com/amplitude/javascript/pull/92704) | 1 | 1 | 0 | Slack → Claude | AMP-140638 [lightning] Reduce padding and increase bord |
| 2026-01-10 | [#91462](https://github.com/amplitude/javascript/pull/91462) | 1 | 1 | 0 | Slack → Claude | AGENTS-328 [lightning] add feature flag ai-control-exte |
| 2026-01-07 | [#33443](https://github.com/amplitude/amplitude/pull/33443) | 1 | 1 | 0 | Cursor Agent | cap-389 [langley] Remove deep research tool |
| 2025-12-16 | [#90191](https://github.com/amplitude/javascript/pull/90191) | 1 | 1 | 0 | Slack → Claude | amp-140638 [ai-chat-core] Hide follow up questions in v |
| 2025-12-16 | [#90188](https://github.com/amplitude/javascript/pull/90188) | 1 | 1 | 1 | Slack → Claude | amp-140638 [lightning] Fix double scrollbar on /agents/ |
| 2025-12-15 | [#90077](https://github.com/amplitude/javascript/pull/90077) | 1 | 1 | 1 | Cursor Agent | amp-140638 [lightning] Threads sidepanel popover z-inde |