# Warehouse Split

A single-page tool for splitting a Costco (or any warehouse-store) receipt
among roommates, with live per-person totals and a settle-up view.

Open [`warehouse-split.html`](warehouse-split.html) in a browser — no build,
no server, no dependencies to install.

## Features

- **Upload a receipt PDF.** Drop in the PDF that costco.com/myaccount prints
  from Orders & Purchases and it reads the items, prices, instant-savings
  discounts, tax, store, and date directly in your browser (via pdf.js —
  nothing is uploaded anywhere). It cross-checks the extracted total against
  the receipt's printed total and flags anything that doesn't reconcile.
- **Assign who splits what, live.** Click the initials on any item to toggle
  who's in on it — solo, two-way, or everyone. Totals update as you click.
  Odd-cent remainders round to the cent so every item's shares always add up
  exactly.
- **Tax**, if the receipt has any, splits proportionally to each person's
  share of the subtotal.
- **Settle up.** Pick who paid on their card and it tells you exactly who
  owes that person how much, and the total they should collect.
- **History tab.** Save a finished split, or just load a new receipt over an
  existing one — the one you're replacing is snapshotted automatically.
  Revisit or restore any saved receipt from the History tab.
- Everything is stored in your browser's local storage. Nothing leaves your
  device.

## Usage

1. Open `warehouse-split.html`.
2. Rename the five people if needed (default initials: M, R, G, K, V).
3. Upload a receipt PDF, or add items by hand.
4. Click the initials on each item to say who's splitting it.
5. Pick who paid on their card to see the settle-up breakdown.
6. Save the split to History when you're done, or just move on to the next
   receipt — it's saved for you automatically.

## Notes

- The PDF parser is calibrated to the specific layout Costco's
  "Orders & Purchases" page prints to PDF. A different store or a scanned/
  photographed receipt won't parse — add items by hand instead.
- This is a static HTML file with no backend. Your data stays in this
  browser's local storage; it isn't synced anywhere.
