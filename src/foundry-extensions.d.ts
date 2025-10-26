declare module 'foundry' {
  interface HookConfig {
    getSceneControlButtons: (controls: any[]) => void;
    controlsReady: () => void;
  }
}

declare global {
  interface ApplicationV2 {
    render(force?: boolean, options?: any): void;
    bringToTop?(): void;
    rendered?: boolean;
  }
}

export {};
