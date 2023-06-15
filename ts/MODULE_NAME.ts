import type { OdsBehavior } from '@websites/utils';

export interface OvhAnchorAboutUs extends OdsBehavior {
  methods: {
    initialize: () => void;
  };
  attach: (
    context?: HTMLElement | Document | undefined,
    settings?: object,
  ) => void;
}

((Drupal, drupalSettings) => {
  const ovhAnchorAboutUs: OvhAnchorAboutUs = {
    methods: {
      initialize: () => {
        console.log('It works!');
      },
    },
    attach() {
      ovhAnchorAboutUs.methods.initialize();
    },
  };

  Drupal.behaviors.ovhAnchorAboutUs = ovhAnchorAboutUs;
})(Drupal, drupalSettings);
