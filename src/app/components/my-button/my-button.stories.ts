import {MyButtonComponent} from "./my-button.component";
import {action, actions, withActions} from "@storybook/addon-actions";
import {select, withKnobs} from "@storybook/addon-knobs";

export default {
  title: 'My Button',
  component: MyButtonComponent,
  decorators: [withKnobs]
}

export const WithTemplate = () => ({
    moduleMetadata: {
      declarations: [MyButtonComponent],
    },
    template: `<app-my-button type="primary" >Primary</app-my-button>`
  }
);

export const Primary = () => ({
  component: MyButtonComponent,
  props: {
    type: 'secondary',
    doubleClicked: action('doubleClicked'),
  }
});

export const Secondary = () => ({
  component: MyButtonComponent,
  props: {
    type: 'secondary',
    doubleClicked: action('doubleClicked'),
  }
});

export const WithKnobs = () => ({
  component: MyButtonComponent,
  props: {
    type: select('type', ['primary', 'secondary'], 'primary'),
    doubleClicked: action('doubleClicked')
  }
})
