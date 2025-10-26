export class CharacterBuilderApp extends Application {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: 'vtm5e-character-builder',
      title: 'VTM5e Character Builder',
      width: 1200,
      height: 800,
      resizable: true,
      popOut: true,
      template: undefined,
      classes: ['vtm5e-character-builder'],
    });
  }

  getData(_options?: object): object {
    return {};
  }

  render(force?: boolean, options?: object): this {
    return super.render(force, options);
  }

  async _renderInner(): Promise<JQuery<HTMLElement>> {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://progeny.odin-matthias.de/';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.allow = 'fullscreen; clipboard-read; clipboard-write';

    const wrapper = document.createElement('div');
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    wrapper.appendChild(iframe);

    return $(wrapper);
  }

  _replaceHTML(
    element: JQuery<HTMLElement>,
    html: JQuery<HTMLElement>,
    _options?: object,
  ): void {
    element.find('.window-content').empty().append(html);
  }
}
