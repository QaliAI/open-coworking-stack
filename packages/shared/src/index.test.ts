import { describe, expect, it } from 'vitest';
import { daysBetween } from './index.js';

describe('daysBetween', () => {
  it('computes non-negative day deltas', () => {
    const d = daysBetween('2026-07-01', new Date('2026-07-17T12:00:00Z'));
    expect(d).toBe(16);
  });
});
