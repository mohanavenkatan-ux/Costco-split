# Warehouse Split

A single-page tool for splitting a warehouse-store receipt among roommates,
with live per-person totals and a settle-up view.

**Live app:** https://mohanavenkatan-ux.github.io/Costco-split/

Or open [`index.html`](index.html) directly in a browser — no build, no
server, no dependencies to install.

## Features

- **Upload a receipt PDF.** Drop in the PDF that costco.com/myaccount prints
  from Orders & Purchases and it reads the items, prices, instant-savings
  discounts, tax, store, and date directly in your browser (via pdf.js —
  nothing is uploaded anywhere). It cross-checks the extracted total against
  the receipt's printed total and flags anything that doesn't reconcile.
- **Assign who splits what, live.** Click the initials on any item to toggle
  who's in on it — solo, two-way, or everyone. Totals update as you click.
  Odd-cent remainders round to the cent so every item's shares always add up
  exactly. Press 1-9 while a toggle is focused to do the same from the
  keyboard, and press Enter in a name/price field to add a new row.
- **Tax**, if the receipt has any, splits proportionally to each person's
  share of the subtotal.
- **Settle up.** Pick who paid on their card and it tells you exactly who
  owes that person how much, and the total they should collect. "Copy
  summary" formats the whole thing as text ready to paste into a group chat.
- **History tab.** Save a finished split, or just load a new receipt over an
  existing one — the one you're replacing is snapshotted automatically.
  Revisit or restore any saved receipt. "Repeat last trip's split" reapplies
  the last saved receipt's assignments to matching item names, so a
  recurring shopping run doesn't need reassigning from scratch.
- **Config tab.** Rename the people you split with and pick a currency
  symbol, used everywhere an amount is shown.
- **Installable.** The hosted version can be added to your phone's home
  screen and keeps working offline after the first load.
- Everything is stored in your browser's local storage. Nothing leaves your
  device.

## Usage

1. Open the [live app](https://mohanavenkatan-ux.github.io/Costco-split/) or
   `index.html`.
2. In the Config tab, set up the people you're splitting with and your
   currency.
3. Upload a receipt PDF, or add items by hand.
4. Click the initials on each item to say who's splitting it.
5. Pick who paid on their card to see the settle-up breakdown, and copy it
   to share.
6. Save the split to History when you're done, or just move on to the next
   receipt — it's saved for you automatically.

## Notes

- The PDF parser is calibrated to the specific layout Costco's
  "Orders & Purchases" page prints to PDF. A different store or a scanned/
  photographed receipt won't parse — add items by hand instead.
- This is a static site with no backend. Your data stays in your browser's
  local storage; it isn't synced anywhere, including between devices.
- The offline service worker only activates when served over HTTPS (as the
  live GitHub Pages site is) — it won't register if you open `index.html`
  as a local file.
