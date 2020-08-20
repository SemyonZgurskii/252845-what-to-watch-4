import React, {PureComponent} from 'react';

function withActiveItem(Component) {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: ``,
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          setActiveItem={(item) => {
            this.setState({
              activeItem: item,
            });
          }}
        />
      );
    }
  }

  return WithActiveItem;
}

export default withActiveItem;
