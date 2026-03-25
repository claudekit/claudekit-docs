# Fact-Check Review: 10 Agent Doc Pages vs Source Files

**Date:** 2026-03-25
**Reviewer:** code-reviewer
**Scope:** `src/content/docs/engineer/agents/*.md` vs `claudekit-engineer/.claude/agents/*.md`

---

## tester.md

- **Persona Accuracy: PASS** — Doc says "QA Lead performing systematic verification", source says "QA Lead performing systematic verification of code changes". Equivalent.
- **Checklist Accuracy: FAIL** — Doc checklist is a **summarized rewrite**, not matching source. Specific discrepancies:
  - Doc lists 7 items; source checklist is embedded in prose across 5 responsibility sections (not a standalone checklist at all).
  - Doc item "Flaky tests detected and isolated" exists in source (section 1, bullet 5).
  - Doc item "Coverage targets met (80%+ overall, 75%+ integration)" — source says "80%+" for coverage but never mentions "75%+ integration" specifically. The **75% figure appears nowhere in the source**. This is fabricated.
  - Doc item "Build verification passes (typecheck, lint, compile)" — source covers this in section 5 but doesn't use exactly this phrasing. Acceptable paraphrase.
- **Diff-Aware Mode: FAIL** — Significant discrepancies:
  - Doc lists 5 strategies: Co-located, Mirror directory, Import graph, Config detection, High fan-out.
  - Source lists 5 strategies labeled A-E: Co-located, Mirror dir, Import graph, Config change, High fan-out.
  - Strategy D mismatch: Doc says "Config detection — Test config files reference the changed file directly". Source says "Config change — tsconfig, jest.config, package.json, etc. -> full suite". The source triggers **full suite**, doc implies targeted detection. **Inaccurate.**
  - Auto-escalation rules differ: Doc says ">40% of files changed". Source says ">70% of total tests mapped". **40% is fabricated; source says 70%.**
  - Doc says "Configuration files are modified (package.json, tsconfig.json, CI workflows, etc.)". Source says "Config/infra/test-helper files changed -> full suite". Close but source is broader (includes test helpers).
- **Content Integrity: PASS** — No existing content removed.
- **Issues:**
  1. **CRITICAL**: 75%+ integration coverage target is fabricated — not in source
  2. **CRITICAL**: 40% auto-escalation threshold is fabricated — source says 70%
  3. **HIGH**: Strategy D description misrepresents behavior (source triggers full suite, doc implies targeted)

---

## code-reviewer.md

- **Persona Accuracy: PASS** — Doc says "Staff Engineer hunting bugs that pass CI but break production". Source says "Staff Engineer performing production-readiness review. You hunt bugs that pass CI but break in production". Equivalent.
- **Checklist Accuracy: PASS** — All 8 items match source checklist:
  1. Concurrency/race conditions — matches
  2. Error boundaries — matches
  3. API contracts — matches
  4. Backwards compatibility — matches
  5. Input validation — matches
  6. Auth/authz — matches
  7. N+1 queries — matches
  8. Data leaks — matches
- **Content Integrity: PASS**
- **Issues:** None.

---

## debugger.md

- **Persona Accuracy: PASS** — Doc says "Senior SRE performing incident root cause analysis". Source says "Senior SRE performing incident root cause analysis". Exact match.
- **Checklist Accuracy: PASS** — All 8 items match source:
  1. Evidence gathered first — matches source "Evidence gathered first: logs, traces, metrics..."
  2. 2-3 competing hypotheses — matches
  3. Each hypothesis tested — matches
  4. Eliminated hypotheses documented — matches source "Elimination path documented"
  5. Timeline constructed — matches
  6. Environmental factors checked — matches
  7. Root cause with evidence — matches source "Root cause stated with evidence chain"
  8. Prevention strategy — matches source "Recurrence prevention addressed"
- **Content Integrity: PASS**
- **Issues:**
  1. **LOW**: Doc item 4 says "Eliminated hypotheses documented with reasoning", source says "Elimination path documented: show what was ruled out and why". Same meaning, slight wording change. Acceptable.

---

## planner.md

- **Persona Accuracy: PASS** — Doc says "Tech Lead locking architecture before code". Source says "Tech Lead locking architecture before code is written". Equivalent.
- **Checklist Accuracy: PASS** — All 8 items match source:
  1. Data flows documented — matches "Explicit data flows documented"
  2. Dependency graph complete — matches
  3. Risk assessment per phase — matches "Risk assessed per phase"
  4. Backwards compatibility strategy — matches
  5. Test matrix covers paths — matches "Test matrix defined"
  6. Rollback plan — matches
  7. File ownership assigned — matches
  8. Success criteria measurable — matches
- **Content Integrity: PASS**
- **Issues:** None.

---

## fullstack-developer.md

- **Persona Accuracy: PASS** — Doc says "Senior Full-Stack Engineer shipping production features end-to-end". Source says "Senior Full-Stack Engineer executing precise implementation plans. You write production-grade code on first pass". The source emphasizes plan execution, doc emphasizes end-to-end shipping. **Slightly different framing but same role.**
- **Checklist Accuracy: FAIL** — Discrepancies found:
  - Doc has 8 items, source has 8 items. Count matches.
  - Doc item 1: "API contracts match between backend implementation and frontend consumption" — Source item: "Error handling: every async operation has explicit error handling, no silent failures". **Mismatch.** Doc's item 1 is not in source at all as item 1.
  - Doc item ordering and content differs significantly from source:
    - **Doc items not in source**: "Database migrations are safe for zero-downtime deployment", "Monitoring/observability hooks in place for new code paths", "Deployment readiness confirmed (env vars documented, dependencies updated)"
    - **Source items missing from doc**: "No TODO/FIXME left", "Clean interfaces: public APIs are minimal, typed", "Type safety: no `any` escapes without explicit justification"
  - Only ~3 of 8 items overlap (error handling, file ownership, tests).
- **Content Integrity: PASS**
- **Issues:**
  1. **CRITICAL**: 5 of 8 checklist items are fabricated or mismatched. Doc checklist does not reflect source.
  2. **HIGH**: Doc omits source items about TODO/FIXME, type safety (`any` escapes), and clean interfaces.

---

## researcher.md

- **Persona Accuracy: PASS** — Doc says "Technical Analyst synthesizing information from multiple sources into actionable intelligence". Source says "Technical Analyst conducting structured research". Similar role, doc adds more color but same essence.
- **Checklist Accuracy: FAIL** — Discrepancies:
  - Doc has 7 items, source has 7 items. Count matches.
  - Doc item 1: "At least 5 distinct source types consulted" — Source: "Multiple sources consulted: no single-source conclusions; at least 3 independent references". **Doc inflates from 3 to 5 and adds "distinct source types" requirement.** Fabricated.
  - Doc item 2: "Source recency validated — outdated information flagged with dates" — Source: "Source credibility assessed: official docs, maintainer blogs, and production case studies weighted above tutorials". **Completely different item.** Doc fabricated this.
  - Doc item 3: "Potential bias detected (vendor docs, sponsored content, outdated tutorials)" — Not in source. Fabricated.
  - Doc item 4: "Findings tested for practical applicability to the current project context" — Source: "Architectural fit evaluated: recommendation accounts for existing stack, team skill, and project constraints". Roughly similar but reworded.
  - Doc item 5: "Contradictions between sources surfaced and explained" — Not in source. Fabricated.
  - Doc item 6: "Evidence graded by reliability" — Partially in source's credibility item but different framing.
  - Doc item 7: "Report ends with actionable recommendations" — Source: "Concrete recommendation made: research ends with a ranked choice, not a list of options". Similar but doc loses the "ranked choice" specificity.
  - **Source items missing from doc**: "Trade-off matrix included", "Adoption risk stated", "Limitations acknowledged"
- **Content Integrity: PASS**
- **Issues:**
  1. **CRITICAL**: ~5 of 7 checklist items are fabricated or substantially rewritten. Doc does not reflect source checklist.
  2. **HIGH**: Source items about trade-off matrix, adoption risk, and limitations acknowledgment are entirely missing from doc.

---

## project-manager.md

- **Persona Accuracy: PASS** — Doc says "Engineering Manager providing project oversight and cross-session continuity". Source says "Engineering Manager tracking delivery against commitments with data, not feelings". Same role, doc is softer.
- **Checklist Accuracy: FAIL** — Discrepancies:
  - Doc has 5 items, source has 5 items. Count matches.
  - Doc item 1: "Progress percentages reflect actual completion, not optimistic estimates" — Source: "Progress measured against plan: tasks checked complete only if done criteria are met, not just 'in progress'". Similar intent but different wording and specificity.
  - Doc item 2: "Blockers identified with owner and estimated resolution timeline" — Source: "Blockers identified: any task stalled >1 session flagged with owner and unblock path". Close but doc adds "estimated resolution timeline" not in source, and misses ">1 session" trigger.
  - Doc item 3: "Scope changes detected and documented with impact assessment" — Source: "Scope changes logged: any deviation from original plan documented with reason and impact". Close enough.
  - Doc item 4: "Resource allocation appropriate for current sprint priorities" — Source: "Risks updated: new risks added, resolved risks closed — no stale risk register". **Completely different item.** Doc fabricated resource allocation item; source has risk register.
  - Doc item 5: "Stakeholder communication drafted for significant status changes" — Source: "Next actions concrete: each next step has an owner and a definition of done". **Completely different item.** Doc fabricated stakeholder communication; source has concrete next actions.
- **Content Integrity: PASS**
- **Issues:**
  1. **CRITICAL**: 2 of 5 checklist items are fabricated (resource allocation, stakeholder communication). Source items about risk register and concrete next actions are missing.

---

## docs-manager.md

- **Persona Accuracy: PASS** — Doc says "Technical Writer ensuring docs are comprehensive, accurate, and maintainable". Source says "Technical Writer ensuring docs match code reality — stale docs are worse than no docs". Same role, source is more opinionated.
- **Checklist Accuracy: FAIL** — Discrepancies:
  - Doc has 7 items, source has 5 items. Doc inflated count.
  - Source checklist:
    1. "Read the actual code before documenting" — Doc: "All documented behaviors match current codebase implementation". Loosely related.
    2. "Verify every code example compiles/runs" — Doc: "All code examples are valid and runnable against the current version". Match.
    3. "Check that referenced file paths, function names, and CLI flags still exist" — Not directly in doc's list.
    4. "Remove stale sections rather than leaving them with 'TODO: update' markers" — Not in doc.
    5. "Cross-reference related docs to prevent contradictions" — Doc: "Internal cross-references and links resolve correctly". Close but doc focuses on links resolving, source on preventing contradictions.
  - **Doc items not in source**: "Full API surface covered (no undocumented endpoints, params, or options)", "Terminology consistent across all doc pages (no synonym drift)", "Migration guide present for any breaking changes introduced", "Documentation accessible to the intended audience (appropriate technical level)". All 4 fabricated.
- **Content Integrity: PASS**
- **Issues:**
  1. **CRITICAL**: 4 of 7 doc checklist items are fabricated.
  2. **HIGH**: 2 source checklist items missing from doc (stale section removal, file path verification).

---

## brainstormer.md

- **Persona Accuracy: PASS** — Doc says "CTO-level technical advisor evaluating solutions with brutal honesty". Source says "CTO-level advisor challenging assumptions and surfacing options the user hasn't considered". Same role.
- **Checklist Accuracy: FAIL** — Discrepancies:
  - Doc has 6 items, source has 6 items. Count matches.
  - Doc item 1: "Trade-offs quantified with concrete numbers, not vague adjectives" — Source: "Assumptions challenged: at least one core assumption of the user's approach was questioned explicitly". **Completely different.** Doc fabricated this as item 1.
  - Doc item 2: "Implementation complexity assessed honestly (not optimistically)" — Source: "Alternatives surfaced: 2-3 genuinely different approaches presented, not variations on the same idea". **Different.**
  - Doc item 3: "Scale implications addressed (will this still work at 10x load?)" — Source: "Trade-offs quantified: each option compared on concrete dimensions". Trade-offs is in source but doc's scale focus is fabricated.
  - Doc item 4: "Maintenance burden over 12+ months considered" — Source: "Second-order effects named: downstream consequences of each approach stated". Different.
  - Doc item 5: "Team capability match evaluated against proposed solution complexity" — Source: "Simplest viable option identified". Different.
  - Doc item 6: "Opportunity cost of chosen approach versus simpler alternatives stated" — Source: "Decision documented: agreed approach recorded in a summary report before session ends". Different.
  - **Source items missing from doc**: assumptions challenged, alternatives surfaced, simplest viable option identified, decision documented.
- **Content Integrity: PASS**
- **Issues:**
  1. **CRITICAL**: All 6 checklist items are rewritten/fabricated. None match source items verbatim or semantically.
  2. **HIGH**: Source's core items (assumption challenging, alternative surfacing, decision documentation) are entirely absent from doc.

---

## journal-writer.md

- **Persona Accuracy: PASS** — Doc says "Engineering diarist capturing technical difficulties with emotional honesty". Source says "Engineering diarist capturing decisions, trade-offs, and lessons with brutal honesty". Same role, slightly different scope emphasis (doc: difficulties, source: decisions/trade-offs/lessons).
- **Checklist Accuracy: FAIL** — Discrepancies:
  - Doc has 6 items, source has 6 items. Count matches.
  - Doc item 1: "Root cause stated precisely (not 'misconfiguration' but exactly what was misconfigured and why)" — Source: "Root cause stated without euphemism: 'we shipped without testing the migration' beats 'an oversight occurred'". **Similar intent but different examples and framing.** Acceptable paraphrase.
  - Doc item 2: "Emotional honesty present — stress, confusion, relief captured authentically" — Source: "Emotional reality captured: the frustration, exhaustion, or relief is present — this is a diary, not a ticket". Close.
  - Doc item 3: "Timeline accurate with real timestamps from logs, not reconstructed memory" — Source: "Specific technical detail included: at least one error message, metric, or code reference". **Different.** Doc fabricated the timestamp requirement; source asks for error messages/metrics.
  - Doc item 4: "Decision context documented (what information was available, why the wrong choice seemed right)" — Source: "Decision documented: what choice was made, what alternatives were rejected, and why". Similar but doc adds "wrong choice seemed right" framing not in source.
  - Doc item 5: "Lessons extracted are specific and actionable, not generic platitudes" — Source: "Lesson extractable: a future developer can read this and change their behavior". Close, acceptable paraphrase.
  - Doc item 6: "Prevention strategy concrete — process change, test added, monitoring alert created" — Source: "Next steps actionable: what must happen, who owns it, and when". **Different.** Doc focuses on prevention; source focuses on next steps with ownership. Doc fabricated the prevention specifics.
- **Content Integrity: PASS**
- **Issues:**
  1. **HIGH**: 2 of 6 items are substantially different (timeline/timestamps vs technical detail; prevention vs next steps).
  2. **MEDIUM**: Remaining items are acceptable paraphrases but lose source specificity.

---

## Overall Summary

| Agent | Persona | Checklist | Content | Verdict |
|-------|---------|-----------|---------|---------|
| tester | PASS | FAIL | PASS | **Needs fix** |
| code-reviewer | PASS | PASS | PASS | **OK** |
| debugger | PASS | PASS | PASS | **OK** |
| planner | PASS | PASS | PASS | **OK** |
| fullstack-developer | PASS | FAIL | PASS | **Needs fix** |
| researcher | PASS | FAIL | PASS | **Needs fix** |
| project-manager | PASS | FAIL | PASS | **Needs fix** |
| docs-manager | PASS | FAIL | PASS | **Needs fix** |
| brainstormer | PASS | FAIL | PASS | **Needs fix** |
| journal-writer | PASS | FAIL | PASS | **Needs fix** |

**Personas:** 10/10 PASS. All cognitive framing roles match source.

**Checklists:** 3/10 PASS (code-reviewer, debugger, planner). 7/10 FAIL with fabricated or mismatched items.

**No broken internal links detected** in the reviewed pages (all use `/docs/engineer/agents/` or `/docs/engineer/skills/` absolute paths).

**No existing content accidentally removed.**

## Required Fixes (Priority Order)

### CRITICAL (Blocking)

1. **brainstormer.md** — All 6 checklist items fabricated. Replace entirely with source items.
2. **researcher.md** — 5 of 7 items fabricated. Replace with source items (3 independent references, trade-off matrix, adoption risk, concrete recommendation, limitations acknowledged).
3. **fullstack-developer.md** — 5 of 8 items fabricated. Replace with source items (error handling, no TODO/FIXME, clean interfaces, type safety, build passes).
4. **docs-manager.md** — 4 of 7 items fabricated. Replace with source's 5-item checklist.
5. **project-manager.md** — 2 of 5 items fabricated (resource allocation, stakeholder communication). Replace with source items (risks updated, next actions concrete).
6. **tester.md** — Fix "75%+ integration" (not in source, remove), fix "40%" threshold (source says 70%), fix Strategy D description (should say "full suite" not "targeted detection").

### HIGH (Should fix)

7. **journal-writer.md** — 2 items substantially differ. Align items 3 and 6 with source.

## Unresolved Questions

- Should doc checklists be verbatim from source, or are well-attributed paraphrases acceptable? The current state has too many fabrications either way.
- Some source files use checkbox format (`- [ ]`), docs use bullet format (`-`). Is this intentional stylistic choice for the docs site?
