export interface RoiInput {
  tasksPerMonth: number;
  minutesPerTaskToday: number;
  minutesPerTaskWithTool: number;
  adoptionPercent: number;
  loadedHourlyLaborCost: number;
  oneTimeSetupCost: number;
  monthlySoftwareHostingCost: number;
  monthlyMaintenanceHours: number;
  monthlyOtherCashCost: number;
}

export interface RoiCase {
  name: 'Low' | 'Base' | 'High';
  volumeFactor: number;
  timeFactor: number;
  hoursPotentiallyRedirected: number;
  grossLaborCapacityValue: number;
  monthlyOperatingCost: number;
  estimatedNetMonthlyValue: number;
  firstYearNetEstimate: number;
  paybackMonths: number | null;
  firstYearRoiPercent: number | null;
}

export interface RoiResult {
  input: RoiInput;
  cases: RoiCase[];
  base: RoiCase;
}

export const defaultRoiInput: RoiInput = {
  tasksPerMonth: 300,
  minutesPerTaskToday: 8,
  minutesPerTaskWithTool: 4,
  adoptionPercent: 70,
  loadedHourlyLaborCost: 30,
  oneTimeSetupCost: 1500,
  monthlySoftwareHostingCost: 250,
  monthlyMaintenanceHours: 4,
  monthlyOtherCashCost: 25,
};

function nonNegative(value: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

export function normalizeRoiInput(input: RoiInput): RoiInput {
  return {
    tasksPerMonth: nonNegative(input.tasksPerMonth),
    minutesPerTaskToday: nonNegative(input.minutesPerTaskToday),
    minutesPerTaskWithTool: nonNegative(input.minutesPerTaskWithTool),
    adoptionPercent: Math.min(100, nonNegative(input.adoptionPercent)),
    loadedHourlyLaborCost: nonNegative(input.loadedHourlyLaborCost),
    oneTimeSetupCost: nonNegative(input.oneTimeSetupCost),
    monthlySoftwareHostingCost: nonNegative(input.monthlySoftwareHostingCost),
    monthlyMaintenanceHours: nonNegative(input.monthlyMaintenanceHours),
    monthlyOtherCashCost: nonNegative(input.monthlyOtherCashCost),
  };
}

function round(value: number, places = 2): number {
  const factor = 10 ** places;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

function calculateCase(
  input: RoiInput,
  name: RoiCase['name'],
  volumeFactor: number,
  timeFactor: number,
): RoiCase {
  const tasks = input.tasksPerMonth * volumeFactor * (input.adoptionPercent / 100);
  const minutesDifference = Math.max(0, input.minutesPerTaskToday - input.minutesPerTaskWithTool);
  const hoursPotentiallyRedirected = (tasks * minutesDifference * timeFactor) / 60;
  const grossLaborCapacityValue = hoursPotentiallyRedirected * input.loadedHourlyLaborCost;
  const monthlyOperatingCost =
    input.monthlySoftwareHostingCost +
    input.monthlyOtherCashCost +
    input.monthlyMaintenanceHours * input.loadedHourlyLaborCost;
  const estimatedNetMonthlyValue = grossLaborCapacityValue - monthlyOperatingCost;
  const firstYearNetEstimate = estimatedNetMonthlyValue * 12 - input.oneTimeSetupCost;
  const paybackMonths =
    estimatedNetMonthlyValue > 0 ? input.oneTimeSetupCost / estimatedNetMonthlyValue : null;
  const firstYearCost = input.oneTimeSetupCost + monthlyOperatingCost * 12;
  const firstYearRoiPercent =
    firstYearCost > 0
      ? ((grossLaborCapacityValue * 12 - firstYearCost) / firstYearCost) * 100
      : null;

  return {
    name,
    volumeFactor,
    timeFactor,
    hoursPotentiallyRedirected: round(hoursPotentiallyRedirected, 1),
    grossLaborCapacityValue: round(grossLaborCapacityValue),
    monthlyOperatingCost: round(monthlyOperatingCost),
    estimatedNetMonthlyValue: round(estimatedNetMonthlyValue),
    firstYearNetEstimate: round(firstYearNetEstimate),
    paybackMonths: paybackMonths === null ? null : round(paybackMonths, 1),
    firstYearRoiPercent: firstYearRoiPercent === null ? null : round(firstYearRoiPercent, 1),
  };
}

export function calculateRoi(rawInput: RoiInput): RoiResult {
  const input = normalizeRoiInput(rawInput);
  const cases = [
    calculateCase(input, 'Low', 0.8, 0.8),
    calculateCase(input, 'Base', 1, 1),
    calculateCase(input, 'High', 1.2, 1.2),
  ];
  return { input, cases, base: cases[1] };
}
