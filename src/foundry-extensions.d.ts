declare module 'foundry' {
  interface HookConfig {
    getSceneControlButtons: (controls: any[]) => void;
    controlsReady: () => void;
  }
}

export {};
