import { z } from 'zod';

const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function isCalendarDate(value: string): boolean {
  if (!ISO_DATE_PATTERN.test(value)) return false;

  const [year, month, day] = value.split('-').map(Number);
  const parsed = new Date(Date.UTC(year!, month! - 1, day));
  return parsed.toISOString().slice(0, 10) === value;
}

export const IsoDateSchema = z
  .string()
  .regex(ISO_DATE_PATTERN, 'Expected YYYY-MM-DD date')
  .superRefine((value, context) => {
    if (!isCalendarDate(value)) {
      context.addIssue({ code: z.ZodIssueCode.custom, message: 'Expected a valid calendar date' });
      return;
    }

    const today = new Date().toISOString().slice(0, 10);
    if (value > today) {
      context.addIssue({ code: z.ZodIssueCode.custom, message: 'Date must not be in the future' });
    }
  });
