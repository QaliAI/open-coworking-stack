import { describe, expect, it } from 'vitest';
import { calculateRoi, defaultRoiInput } from './roi-calculator';

describe('ROI/TCO calculation', () => {
  it('calculates base capacity, operating cost, net value, and payback', () => {
    const result = calculateRoi(defaultRoiInput);

    expect(result.base.hoursPotentiallyRedirected).toBe(14);
    expect(result.base.grossLaborCapacityValue).toBe(420);
    expect(result.base.monthlyOperatingCost).toBe(395);
    expect(result.base.estimatedNetMonthlyValue).toBe(25);
    expect(result.base.firstYearNetEstimate).toBe(-1200);
    expect(result.base.paybackMonths).toBe(60);
    expect(result.base.firstYearRoiPercent).toBe(-19.2);
  });

  it('provides ordered low, base, and high sensitivity cases', () => {
    const result = calculateRoi(defaultRoiInput);

    expect(result.cases.map(({ name }) => name)).toEqual(['Low', 'Base', 'High']);
    expect(result.cases[0].hoursPotentiallyRedirected).toBeLessThan(
      result.base.hoursPotentiallyRedirected,
    );
    expect(result.cases[2].hoursPotentiallyRedirected).toBeGreaterThan(
      result.base.hoursPotentiallyRedirected,
    );
  });

  it('never treats slower software as negative redirected time', () => {
    const result = calculateRoi({
      ...defaultRoiInput,
      minutesPerTaskToday: 4,
      minutesPerTaskWithTool: 7,
    });

    expect(result.base.hoursPotentiallyRedirected).toBe(0);
    expect(result.base.paybackMonths).toBeNull();
    expect(result.base.estimatedNetMonthlyValue).toBeLessThan(0);
  });

  it('clamps adoption and negative values to valid boundaries', () => {
    const result = calculateRoi({
      ...defaultRoiInput,
      tasksPerMonth: -10,
      adoptionPercent: 140,
      oneTimeSetupCost: -50,
    });

    expect(result.input.tasksPerMonth).toBe(0);
    expect(result.input.adoptionPercent).toBe(100);
    expect(result.input.oneTimeSetupCost).toBe(0);
  });
});
