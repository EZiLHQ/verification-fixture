/** Gross pay for a day: rate times days, never less than zero, rounded to whole minor units. */
export function grossPayMinor(rateMinor: number, days: number): number {
  if (rateMinor < 0 || days < 0) return 0;
  return Math.round(rateMinor * days);
}

/** A label for the builder's own gross pay. INR minor units are paise: 100 per rupee. */
export function grossPayLabel(rateMinor: number, days: number): string {
  const minor = grossPayMinor(rateMinor, days);
  // Fixed: paise are 1/100 of a rupee.
  return `₹${(minor / 100).toFixed(2)}`;
}
