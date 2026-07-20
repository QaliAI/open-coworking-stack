export type Currency = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD';

export interface WorkflowInput {
  currency: Currency;
  tasksPerMonth: number;
  minutesPerTaskToday: number;
  minutesPerTaskWithTool: number;
  adoptionPercent: number;
  loadedHourlyLaborCost: number;
  oneTimeSetupCost: number;
  monthlySoftwareHostingCost: number;
  monthlyMaintenanceHours: number;
  monthlyOtherCashCost: number;
  trainingHoursPerUser: number;
  usersToTrain: number;
  exceptionHandlingPercent: number;
  downtimeHoursPerMonth: number;
  adoptionRampMonths: number;
  oneTimeMigrationHours: number;
  annualPriceIncreasePercent: number;
  contingencyPercent: number;
  measuredTasks: boolean;
  measuredTime: boolean;
  measuredLaborCost: boolean;
  actualCashSavings: boolean;
}

export interface WorkflowCase {
  name: 'Low' | 'Base' | 'High';
  volumeFactor: number;
  timeFactor: number;
  hoursRedirected: number;
  grossCapacityValue: number;
  monthlyCashCost: number;
  monthlyLaborCost: number;
  netCapacityValue: number;
  firstYearCapacityEstimate: number;
  paybackMonths: number | null;
  firstYearReturnPercent: number | null;
}

export interface WorkflowResult {
  input: WorkflowInput;
  cases: WorkflowCase[];
  base: WorkflowCase;
}

export function emptyWorkflowInput(): WorkflowInput {
  return {
    currency: 'USD',
    tasksPerMonth: 0,
    minutesPerTaskToday: 0,
    minutesPerTaskWithTool: 0,
    adoptionPercent: 0,
    loadedHourlyLaborCost: 0,
    oneTimeSetupCost: 0,
    monthlySoftwareHostingCost: 0,
    monthlyMaintenanceHours: 0,
    monthlyOtherCashCost: 0,
    trainingHoursPerUser: 0,
    usersToTrain: 0,
    exceptionHandlingPercent: 0,
    downtimeHoursPerMonth: 0,
    adoptionRampMonths: 0,
    oneTimeMigrationHours: 0,
    annualPriceIncreasePercent: 0,
    contingencyPercent: 0,
    measuredTasks: false,
    measuredTime: false,
    measuredLaborCost: false,
    actualCashSavings: false,
  };
}

export function exampleWorkflowInput(): WorkflowInput {
  return {
    currency: 'USD',
    tasksPerMonth: 300,
    minutesPerTaskToday: 8,
    minutesPerTaskWithTool: 4,
    adoptionPercent: 70,
    loadedHourlyLaborCost: 30,
    oneTimeSetupCost: 1500,
    monthlySoftwareHostingCost: 250,
    monthlyMaintenanceHours: 4,
    monthlyOtherCashCost: 25,
    trainingHoursPerUser: 2,
    usersToTrain: 3,
    exceptionHandlingPercent: 15,
    downtimeHoursPerMonth: 2,
    adoptionRampMonths: 3,
    oneTimeMigrationHours: 20,
    annualPriceIncreasePercent: 5,
    contingencyPercent: 15,
    measuredTasks: false,
    measuredTime: false,
    measuredLaborCost: false,
    actualCashSavings: false,
  };
}

function nonNegative(value: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

export function normalizeWorkflowInput(input: WorkflowInput): WorkflowInput {
  return {
    ...input,
    tasksPerMonth: nonNegative(input.tasksPerMonth),
    minutesPerTaskToday: nonNegative(input.minutesPerTaskToday),
    minutesPerTaskWithTool: nonNegative(input.minutesPerTaskWithTool),
    adoptionPercent: Math.min(100, nonNegative(input.adoptionPercent)),
    loadedHourlyLaborCost: nonNegative(input.loadedHourlyLaborCost),
    oneTimeSetupCost: nonNegative(input.oneTimeSetupCost),
    monthlySoftwareHostingCost: nonNegative(input.monthlySoftwareHostingCost),
    monthlyMaintenanceHours: nonNegative(input.monthlyMaintenanceHours),
    monthlyOtherCashCost: nonNegative(input.monthlyOtherCashCost),
    trainingHoursPerUser: nonNegative(input.trainingHoursPerUser),
    usersToTrain: nonNegative(input.usersToTrain),
    exceptionHandlingPercent: Math.min(100, nonNegative(input.exceptionHandlingPercent)),
    downtimeHoursPerMonth: nonNegative(input.downtimeHoursPerMonth),
    adoptionRampMonths: nonNegative(input.adoptionRampMonths),
    oneTimeMigrationHours: nonNegative(input.oneTimeMigrationHours),
    annualPriceIncreasePercent: nonNegative(input.annualPriceIncreasePercent),
    contingencyPercent: Math.min(100, nonNegative(input.contingencyPercent)),
  };
}

function round(value: number, places = 2): number {
  const factor = 10 ** places;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function calculateCase(
  input: WorkflowInput,
  name: WorkflowCase['name'],
  volumeFactor: number,
  timeFactor: number,
): WorkflowCase {
  const tasks = input.tasksPerMonth * volumeFactor * (input.adoptionPercent / 100);
  const minutesDifference = Math.max(0, input.minutesPerTaskToday - input.minutesPerTaskWithTool);
  const hoursRedirected = (tasks * minutesDifference * timeFactor) / 60;

  const effectiveHourlyRate = input.loadedHourlyLaborCost;
  const grossCapacityValue = hoursRedirected * effectiveHourlyRate;

  const annualSubscription = input.monthlySoftwareHostingCost * 12;
  const annualOtherCash = input.monthlyOtherCashCost * 12;
  const annualIncreaseMultiplier = 1 + input.annualPriceIncreasePercent / 100;
  const annualCashCost = (annualSubscription + annualOtherCash) * annualIncreaseMultiplier;
  const monthlyCashCost = annualCashCost / 12;

  const monthlyLaborCost =
    input.monthlyMaintenanceHours * effectiveHourlyRate +
    input.downtimeHoursPerMonth * effectiveHourlyRate;

  const monthlyOperatingCost = monthlyCashCost + monthlyLaborCost;

  const netCapacityValue = grossCapacityValue - monthlyOperatingCost;

  const trainingCost = input.trainingHoursPerUser * input.usersToTrain * effectiveHourlyRate;
  const migrationCost = input.oneTimeMigrationHours * effectiveHourlyRate;
  const contingencyAmount = (input.oneTimeSetupCost + trainingCost + migrationCost) * (input.contingencyPercent / 100);
  const totalOneTimeCost = input.oneTimeSetupCost + trainingCost + migrationCost + contingencyAmount;
  const firstYearCapacityEstimate = netCapacityValue * 12 - totalOneTimeCost;

  const paybackMonths =
    netCapacityValue > 0 ? totalOneTimeCost / netCapacityValue : null;

  const firstYearCost = totalOneTimeCost + monthlyOperatingCost * 12;
  const firstYearReturnPercent =
    firstYearCost > 0
      ? ((grossCapacityValue * 12 - firstYearCost) / firstYearCost) * 100
      : null;

  return {
    name,
    volumeFactor,
    timeFactor,
    hoursRedirected: round(hoursRedirected, 1),
    grossCapacityValue: round(grossCapacityValue),
    monthlyCashCost: round(monthlyCashCost),
    monthlyLaborCost: round(monthlyLaborCost),
    netCapacityValue: round(netCapacityValue),
    firstYearCapacityEstimate: round(firstYearCapacityEstimate),
    paybackMonths: paybackMonths === null ? null : round(paybackMonths, 1),
    firstYearReturnPercent: firstYearReturnPercent === null ? null : round(firstYearReturnPercent, 1),
  };
}

export function calculateWorkflowCapacity(rawInput: WorkflowInput): WorkflowResult {
  const input = normalizeWorkflowInput(rawInput);
  const cases = [
    calculateCase(input, 'Low', 0.8, 0.8),
    calculateCase(input, 'Base', 1, 1),
    calculateCase(input, 'High', 1.2, 1.2),
  ];
  return { input, cases, base: cases[1] };
}

export function formatCurrency(value: number, currency: Currency): string {
  const symbols: Record<Currency, string> = {
    USD: '$',
    EUR: '\u20AC',
    GBP: '\u00A3',
    CAD: 'C$',
    AUD: 'A$',
  };
  const suffix = value < 0 ? ' (negative)' : '';
  return `${symbols[currency]}${Math.abs(round(value)).toLocaleString()}${suffix}`;
}
