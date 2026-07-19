import { describe, expect, it } from 'vitest';
import {
  calculateWorkflowCapacity,
  exampleWorkflowInput,
  emptyWorkflowInput,
} from './roi-calculator';

describe('Workflow capacity calculation', () => {
  it('returns zero or dash values for empty input', () => {
    const result = calculateWorkflowCapacity(emptyWorkflowInput());

    expect(result.base.hoursRedirected).toBe(0);
    expect(result.base.grossCapacityValue).toBe(0);
    expect(result.base.monthlyCashCost).toBe(0);
    expect(result.base.monthlyLaborCost).toBe(0);
    expect(result.base.netCapacityValue).toBe(0);
    expect(result.base.firstYearCapacityEstimate).toBe(0);
    expect(result.base.paybackMonths).toBeNull();
    expect(result.base.firstYearReturnPercent).toBeNull();
  });

  it('calculates capacity, cost, and payback from example input', () => {
    const result = calculateWorkflowCapacity(exampleWorkflowInput());

    expect(result.base.hoursRedirected).toBe(14);
    expect(result.base.grossCapacityValue).toBe(420);
    expect(result.base.monthlyCashCost).toBe(288.75);
    expect(result.base.monthlyLaborCost).toBe(180);
    expect(result.base.netCapacityValue).toBe(-48.75);
    expect(result.base.firstYearCapacityEstimate).toBe(-3207);
    expect(result.base.paybackMonths).toBeNull();
  });

  it('provides ordered low, base, and high sensitivity cases', () => {
    const result = calculateWorkflowCapacity(exampleWorkflowInput());

    expect(result.cases.map(({ name }) => name)).toEqual(['Low', 'Base', 'High']);
    expect(result.cases[0].hoursRedirected).toBeLessThan(result.base.hoursRedirected);
    expect(result.cases[2].hoursRedirected).toBeGreaterThan(result.base.hoursRedirected);
  });

  it('never treats slower software as negative redirected time', () => {
    const input = { ...exampleWorkflowInput(), minutesPerTaskToday: 4, minutesPerTaskWithTool: 7 };
    const result = calculateWorkflowCapacity(input);

    expect(result.base.hoursRedirected).toBe(0);
    expect(result.base.paybackMonths).toBeNull();
    expect(result.base.netCapacityValue).toBeLessThan(0);
  });

  it('clamps adoption and negative values to valid boundaries', () => {
    const input = {
      ...emptyWorkflowInput(),
      tasksPerMonth: -10,
      adoptionPercent: 140,
      oneTimeSetupCost: -50,
    };
    const result = calculateWorkflowCapacity(input);

    expect(result.input.tasksPerMonth).toBe(0);
    expect(result.input.adoptionPercent).toBe(100);
    expect(result.input.oneTimeSetupCost).toBe(0);
  });

  it('shows negative capacity when costs exceed gross value', () => {
    const input = {
      ...exampleWorkflowInput(),
      loadedHourlyLaborCost: 10,
      monthlySoftwareHostingCost: 2000,
    };
    const result = calculateWorkflowCapacity(input);

    expect(result.base.netCapacityValue).toBeLessThan(0);
    expect(result.base.paybackMonths).toBeNull();
  });

  it('includes training, migration, and contingency in one-time costs', () => {
    const input = {
      ...exampleWorkflowInput(),
      trainingHoursPerUser: 10,
      usersToTrain: 5,
      oneTimeMigrationHours: 40,
      contingencyPercent: 20,
    };
    const result = calculateWorkflowCapacity(input);

    expect(result.base.paybackMonths).toBeNull();
    expect(result.base.firstYearCapacityEstimate).toBeLessThan(-5000);
  });

  it('reflects annual price increase in monthly cash cost', () => {
    const input = {
      ...exampleWorkflowInput(),
      monthlySoftwareHostingCost: 100,
      monthlyOtherCashCost: 0,
      annualPriceIncreasePercent: 50,
    };
    const result = calculateWorkflowCapacity(input);

    expect(result.base.monthlyCashCost).toBe(150);
  });

  it('handles zero annual price increase as direct monthly cost', () => {
    const input = {
      ...exampleWorkflowInput(),
      monthlySoftwareHostingCost: 100,
      monthlyOtherCashCost: 0,
      annualPriceIncreasePercent: 0,
    };
    const result = calculateWorkflowCapacity(input);

    expect(result.base.monthlyCashCost).toBe(100);
  });
});
