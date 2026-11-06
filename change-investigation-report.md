# 🔎 Change Investigation Report

**Target**: `src/components/Footer.jsx:171-182` (Cookie Policy tooltip block)
**Investigation Date**: 2026-11-04
**Repository**: https://github.com/gamalbeecase/job-portal-ui.git
**Branch**: main

---

## 📋 Investigation Summary

| Detail                  | Value                                       |
| ----------------------- | ------------------------------------------- |
| File(s) Analyzed        | src/components/Footer.jsx                   |
| Lines Investigated      | 171-182                                     |
| Total Commits on File   | 3                                           |
| Unique Authors          | 2 (gamalbeecase, BikeshGamal)               |
| File Age (First Commit) | 2026-10-31                                  |
| Last Modified           | 2026-11-03 by gamalbeecase (94ccea4, #10)   |

---

## 👥 Author Breakdown

| # | Author       | Email                     | Commits | Lines Owned (whole file) | First Contribution | Last Contribution |
| - | ------------ | ------------------------- | ------- | ------------------------ | ------------------ | ----------------- |
| 1 | BikeshGamal  | bkssstechno@gmail.com     | 1       | 161 (74%)                | 2026-10-31         | 2026-10-31        |
| 2 | gamalbeecase | bikeshgamal2000@gmail.com | 2       | 56 (26%)                 | 2026-11-01         | 2026-11-03        |

For lines 171-182 specifically: gamalbeecase owns 12/12 (100%), all from `fd85838`.

**Primary Owner (target lines)**: gamalbeecase
**Most Recent Contributor (file)**: gamalbeecase
**CODEOWNERS**: Not configured

---

## 📅 Change Timeline

### 94ccea4 — 2026-11-03 (not touching target lines)

- **Author**: gamalbeecase <bikeshgamal2000@gmail.com>
- **Message**: fix: show help tooltip on footer contact us link (#10)
- **Body**: — (co-authors: claude[bot], Claude Sonnet 5.5)
- **Ticket References**: #10 (PR)
- **Lines Changed**: +13 / -6
- **What Changed**:
  > Bug fix on the Contact Us link elsewhere in the footer. `git log -L` shows it did not alter lines 171-182.

### fd85838 — 2026-11-01 (introduced the target lines)

- **Author**: gamalbeecase <bikeshgamal2000@gmail.com>
- **Message**: fix: add tooltips to footer policy links (#3)
- **Body**: Policy links were anchors with no href, handler or tooltip, so hovering showed nothing. Added a reusable Tooltip component styled to match the footer and wrapped the three links in it. Links rendered as buttons for keyboard focus; fixed conflicting `inset-0`/`-inset-2` classes on the hover highlight.
- **Ticket References**: Closes #2; PR #3
- **Lines Changed**: +44 / -13
- **What Changed**:
  > Replaced the href-less `<a>` Cookie Policy link (with `<span>` and gradient highlight `<div>`) with a `<Tooltip id="tooltip-cookie-policy">` wrapping a `<button type="button" aria-describedby=...>`. Adds a tooltip explaining cookies/local storage use. Accessibility and bug fix.

### 2cfe468 — 2026-10-31

- **Author**: BikeshGamal <bkssstechno@gmail.com>
- **Message**: Initial commit
- **Body**: —
- **Ticket References**: None found
- **Lines Changed**: +179 / -0
- **What Changed**:
  > Created the file. The original Cookie Policy was an `<a>` without href at roughly the same region (original lines ~144-155).

---

## 🔬 Line-by-Line Blame (Current State)

| Line    | Code (truncated)                                   | Author       | Date       | Commit Message                               |
| ------- | -------------------------------------------------- | ------------ | ---------- | -------------------------------------------- |
| 171     | `</button>`                                        | gamalbeecase | 2026-11-01 | fix: add tooltips to footer policy links (#3) |
| 172     | `</Tooltip>`                                       | gamalbeecase | 2026-11-01 | (same)                                       |
| 173     | `<Tooltip`                                         | gamalbeecase | 2026-11-01 | (same)                                       |
| 174     | `id="tooltip-cookie-policy"`                       | gamalbeecase | 2026-11-01 | (same)                                       |
| 175     | `title="Cookie Policy"`                            | gamalbeecase | 2026-11-01 | (same)                                       |
| 176     | `content="We use cookies and local storage to ke…` | gamalbeecase | 2026-11-01 | (same)                                       |
| 177     | `>`                                                | gamalbeecase | 2026-11-01 | (same)                                       |
| 178     | `<button`                                          | gamalbeecase | 2026-11-01 | (same)                                       |
| 179     | `type="button"`                                    | gamalbeecase | 2026-11-01 | (same)                                       |
| 180     | `aria-describedby="tooltip-cookie-policy"`         | gamalbeecase | 2026-11-01 | (same)                                       |
| 181     | `className="group relative cursor-pointer hover…`  | gamalbeecase | 2026-11-01 | (same)                                       |
| 182     | `>`                                                | gamalbeecase | 2026-11-01 | (same)                                       |

Note: lines 171-172 close the preceding (Terms of Service) tooltip; 173-182 open the Cookie Policy tooltip.

---

## 🎫 Linked Tickets & References

| Ticket ID | Commit  | Author       | Date       | Commit Subject                                   |
| --------- | ------- | ------------ | ---------- | ------------------------------------------------ |
| #2, #3    | fd85838 | gamalbeecase | 2026-11-01 | fix: add tooltips to footer policy links (#3)    |
| #10       | 94ccea4 | gamalbeecase | 2026-11-03 | fix: show help tooltip on footer contact us link |

---

## 💡 Insights

- **Churn Assessment**: 3 commits in 4 days overall; target lines changed once since the file was created. Low churn on this block.
- **Bus Factor**: Both identities share the same person's email domain pattern (bikeshgamal2000 / bkssstechno); effectively a single maintainer plus AI co-authoring. Bus factor of 1.
- **Stale Code Risk**: None; code is 3 days old.
- **Review Gaps**: Initial commit has no ticket reference. Later commits use PR numbers; #10 has no body. The Cookie Policy text claims no advertising use, which is policy content worth confirming with the product owner. Convention note: commit `fd85838` follows Conventional Commits.
- **Coding-standards observation**: the block uses the shared `Tooltip` with Tailwind classes, consistent with project rules.
