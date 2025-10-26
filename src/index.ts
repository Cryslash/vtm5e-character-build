console.log('vtm5e-character-build | carregando módulo...');

Hooks.once('init', () => {
  console.log('vtm5e-character-build | init');
});

Hooks.on('getSceneControlButtons' as any, (controls: any) => {
  if (!controls.tokens?.tools) return;

  controls.tokens.tools.openCharacterBuild = {
    name: 'openCharacterBuild',
    title: 'Abrir Character Build',
    icon: 'fas fa-user-plus',
    button: true,
    onChange: () => {
      ui.notifications?.info('Abrindo o construtor de personagem!');
    },
  };
});
