export default ComponentBuilder('ContainerComponent')
    .render(props => <PresentationalComponent {...props}/>)
    .componentDidMount(props => props.fetchThings())
    .propTypes({
        fetchThings: PropTypes.func.isRequired
    })
    .mapStateToProps(state => ({
        things: state.things
    }))
    .mapDispatchToProps(dispatch => ({
        fetchThings: () => dispatch(fetchThings()),
        selectThing: id => dispatch(selectThing(id)),
        blowShitUp: () => dispatch(blowShitUp())
    }))
    .build();
