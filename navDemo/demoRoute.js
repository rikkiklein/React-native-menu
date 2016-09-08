class FirstPage extends Component {
    render() {
      return (
        <View style={styles.page}><Text style={styles.pageContent}>First Page</Text></View>
      );
  }
}

class FirstPageMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen, });
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
        this.props.navigator.replace({ id: item });
    }

    render() {

        const menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;

        return (
            <SideMenu
              menu={menu}
              isOpen={this.state.isOpen}
              onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <MenuButton onPress={() => this.toggle()}/>
                <FirstPage/>
            </SideMenu>
        );
    }
};




class Menu extends Component {

  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  constructor(props) {
      super(props);
  }

  render() {

    return (

      <ScrollView scrollsToTop={false} style={styles.menu}>

        <Text
          onPress={() => this.props.onItemSelected('first')}
          style={styles.item}>
          First
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('second')}
          style={styles.item}>
          Second
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('third')}
          style={styles.item}>
          Third
        </Text>
      </ScrollView>
    );
  }
};

var styles = StyleSheet.create({
    menuButton: {
        marginTop: 20,
        backgroundColor: '#777'
    },
    menu: {
      flex: 1,
      width: window.width,
      height: window.height,
      padding: 20,
    },
    item: {
      fontSize: 16,
      fontWeight: '300',
      paddingTop: 20,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#777'
    },
    pageContent: {
        flex: 1,
        alignItems: 'center',
        top: 200,
    },
    menu: {
      flex: 1,
      width: window.width,
      height: window.height,
      padding: 20,
    },
    item: {
      fontSize: 16,
      fontWeight: '300',
      paddingTop: 20,
  },
});

module.exports = MenuNavigator;
