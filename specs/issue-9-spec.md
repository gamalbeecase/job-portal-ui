# Technical Specification — Issue #9

## 1. Issue Overview

| Field | Value |
| --- | --- |
| Title | Inside the footer, when user hovers on "contact us" not text being displayed |
| Description | Hovering the footer "Contact Us" link shows no text. The link goes to the contact page, where users message the admin about problems. Help text should show on hover. |
| Labels | None |
| State | CLOSED (no assignee, no milestone) |
| Priority | Low |

## 2. Problem Analysis

Verified from the repo and issue discussion: the issue is already resolved.

- Original cause: "Contact Us" in `src/components/Footer.jsx` was a bare `<Link to="/contact">` with no `Tooltip`, unlike the Privacy, Terms and Cookie Policy links (added in `fd85838`, #3).
- Fix: commit `94ccea4` ("fix: show help tooltip on footer contact us link (#10)") wrapped the link in the shared `Tooltip` (id `tooltip-contact-us`, title "Contact Us", text "Facing a problem or have a question? Send a message to our admin team and we'll help you out."). It also added `aria-describedby` and `focus:`/`group-focus:` styles.
- The Claude bot comment on the issue reports that `npm run lint` and a browser check were not run. This is the only unverified part.

## 3. Proposed Solution

No code change required. Run the outstanding lint and manual checks, then leave the issue closed.

## 4. Step-by-Step Implementation

1. Run `npm run lint` — confirm `Footer.jsx` has no errors.
2. Manual check — hover and keyboard-focus "Contact Us" and confirm the tooltip.
3. Confirm navigation — click still routes to `/contact`.

## 5. Verification Strategy

### Unit Tests
- Render `Footer`, hover "Contact Us" → tooltip text appears (no test runner configured; optional).

### Integration Tests
- None applicable.

### Manual Checks
- Hover on desktop → tooltip with title and help text shows.
- Tab to the link → tooltip shows on focus.
- Click → navigates to `/contact`.
- Mobile width and light/dark theme → tooltip not clipped (footer uses `overflow-hidden`) and readable.

## 6. Files to Modify

| File Path | Nature of Change |
| --- | --- |
| None | Already changed in `src/components/Footer.jsx` (`94ccea4`) |

## 7. New Files to Create

| File Path | Purpose |
| --- | --- |
| None | — |

## 8. Existing Utilities to Leverage

| Utility | Benefit |
| --- | --- |
| `src/components/Tooltip.jsx` (`Tooltip`) | Same hover/focus tooltip used on the other footer and navbar links |

## 9. Acceptance Criteria

- Hovering "Contact Us" displays help text. (Met on `main`.)
- Lint passes on `Footer.jsx`.
- Link still navigates to `/contact`; other footer links unaffected.

## 10. Out of Scope

- Changes to the Contact page or admin messaging flow.
- Tooltip text on other links.
