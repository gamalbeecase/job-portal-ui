# Technical Specification — Issue #2

## 1. Issue Overview

| Field | Value |
| --- | --- |
| Title | Inside the footer, when hover onto the "cookie policy" nothing being displayed. |
| Description | Hovering the footer "Cookie Policy" link shows nothing; expected a short cookie-policy text. |
| Labels | None |
| State | CLOSED (assignee: gamalbeecase; no comments, no milestone) |
| Priority | Low |

## 2. Problem Analysis

Verified from the repo: the issue is already resolved. Commit `fd85838` ("fix: add tooltips to footer policy links (#3)") wrapped the Cookie Policy item in `src/components/Footer.jsx` (~lines 173-186) with the shared `Tooltip` (`src/components/Tooltip.jsx`), id `tooltip-cookie-policy`, with explanatory content about cookies/local storage. The element is a `<button>` with `aria-describedby`, and shows the hover overlay on `group-hover`/`group-focus`.

Originally the link had no tooltip, so nothing appeared on hover. Related follow-ups (#6, #7, #10) applied the same pattern to the navbar and Contact Us.

No remaining defect is evidenced in code or issue discussion. The only open question (not in the issue) is that the tooltip text is a short summary, not a full policy page.

## 3. Proposed Solution

No code change required. Optionally confirm the fix manually and close out. Reuse of `Tooltip` is already the established pattern; do not add new architecture.

## 4. Step-by-Step Implementation

1. Confirm fix — verify `Footer.jsx` Cookie Policy renders `Tooltip` on hover and keyboard focus.
2. Check content accuracy — confirm text matches actual storage use (auth, theme, saved jobs in localStorage).
3. Close/link — reference `fd85838` / PR #3 on the issue (already closed).

## 5. Verification Strategy

### Unit Tests
- Render `Footer`, hover "Cookie Policy" → tooltip with cookie text appears (no test framework configured in repo today; optional).

### Integration Tests
- None applicable.

### Manual Checks
- Hover Cookie Policy (desktop) → tooltip with title and text shows.
- Tab to it with keyboard → tooltip shows on focus.
- Narrow/mobile width → tooltip not clipped by the footer's `overflow-hidden`.
- Dark/light theme → tooltip readable.

## 6. Files to Modify

| File Path | Nature of Change |
| --- | --- |
| None | Already fixed in `src/components/Footer.jsx` |

## 7. New Files to Create

| File Path | Purpose |
| --- | --- |
| None | — |

## 8. Existing Utilities to Leverage

| Utility | Benefit |
| --- | --- |
| `src/components/Tooltip.jsx` (`Tooltip`) | Consistent hover/focus tooltip already used across navbar and footer |

## 9. Acceptance Criteria

- Hovering the Cookie Policy link displays explanatory text. (Met in current `main`.)
- Tests added: none required for a static tooltip.
- No regressions in other footer links.

## 10. Out of Scope

- A dedicated Cookie Policy page or cookie-consent banner.
- Changes to Privacy Policy / Terms tooltips.
