import { TypstRenderer } from '@myriaddreamin/typst.ts/dist/esm/renderer';

declare global {
  interface Window {
    getTypstTheme(): string;
    typstRerender?: () => Promise<void>;
    typstChangeTheme?: () => Promise<void>;
    debounce<T extends { (...args: any[]): void }>(fn: T, delay = 200): T;
    typstBookRenderPage(
      plugin: TypstSvgRenderer,
      relPath: string,
      appContainer: HTMLDivElement | undefined,
    );
    TypstRenderModule: any;
  }
}
