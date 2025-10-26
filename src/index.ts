import { CharacterBuilderApp } from './apps/CharacterBuildApp';

Hooks.once('init', () => {
  console.log('vtm5e-character-build | init');
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Hooks.on('getSceneControlButtons' as any, (controls: any) => {
  if (!controls.tokens?.tools) return;

  controls.tokens.tools['open-character-build'] = {
    name: 'open-character-build',
    title: 'Abrir Character Build',
    icon: 'fas fa-user-plus',
    button: true,
    onChange: () => {
      const characterBuilderApp = new CharacterBuilderApp();
      characterBuilderApp.render(true);
    },
  };
});
