import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { describe, expect, it } from 'vitest';

const source = readFileSync(
  new URL('../../public/portfolio-analytics.js', import.meta.url),
  'utf8',
);
function browser(consent = 'granted', doNotTrack = '0') {
  const nodes = new Map<string, unknown>();
  const handlers = new Map<string, () => void>();
  const element = () => ({
    id: '',
    style: { cssText: '' },
    children: [] as unknown[],
    textContent: '',
    setAttribute() {},
    remove() {},
    appendChild(node: { id?: string }) {
      this.children.push(node);
      if (node.id) nodes.set(node.id, node);
    },
  });
  const window = {
    dataLayer: [] as IArguments[],
    addEventListener(name: string, handler: () => void) {
      handlers.set(name, handler);
    },
  };
  const document = {
    documentElement: { dataset: {} },
    title: 'Resource library',
    referrer: 'https://example.com/?private=value',
    head: element(),
    body: element(),
    createElement: element,
    getElementById(id: string) {
      return nodes.get(id);
    },
    addEventListener() {},
  };
  const context = {
    window,
    document,
    URL,
    location: {
      hostname: 'open-coworking-stack.vercel.app',
      origin: 'https://open-coworking-stack.vercel.app',
      pathname: '/library/',
    },
    navigator: { doNotTrack },
    localStorage: { getItem: () => consent },
  };
  return { context, window, document, handlers };
}
describe('optional directory measurement', () => {
  it('initializes once and queues one explicit view across repeated execution and consent refresh', () => {
    const b = browser();
    runInNewContext(source, b.context);
    runInNewContext(source, b.context);
    b.handlers.get('storage')?.();
    const commands = b.window.dataLayer.map((args) => Array.from(args));
    expect(commands.filter((c) => c[0] === 'event' && c[1] === 'page_view')).toHaveLength(1);
    expect(b.document.head.children).toHaveLength(1);
    const configIndex = commands.findIndex((c) => c[0] === 'config');
    expect(commands.slice(0, configIndex)).toContainEqual(['set', 'send_page_view', false]);
    expect(commands[configIndex][2]).toMatchObject({ send_page_view: false });
    expect(JSON.stringify(commands)).not.toContain('private=value');
  });
  it.each([
    ['denied', '0'],
    ['pending', '0'],
    ['granted', '1'],
  ])('sends no data for consent %s and DNT %s', (consent, dnt) => {
    const b = browser(consent, dnt);
    runInNewContext(source, b.context);
    expect(b.window.dataLayer).toHaveLength(0);
    expect(b.document.head.children).toHaveLength(0);
  });
});
