import type { OdsBehavior } from '@websites/utils';

export interface ModuleName extends OdsBehavior {
  methods: {
    initialize: () => void;
  };
  attach: (context?: HTMLElement | Document | undefined, settings?: object) => void;
}

((Drupal, drupalSettings) => {
  const moduleName: ModuleName = {
    methods: {
      initialize: () => {
        console.log('It works!');
      },
    },
    attach() {
      moduleName.methods.initialize();
    },
  }

  Drupal.behaviors.moduleName = moduleName;

} (Drupal, drupalSettings));
