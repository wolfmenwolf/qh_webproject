class ContainerComponent extends Component {
    componentDidMount() {
        this.props.fetchThings()
    }
    render() {
        return <PresentationalComponent {...this.props}/>
    }}

ContainerComponent.propTypes = {
    fetchThings: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    things: state.things
})
const mapDispatchToProps = dispatch => ({
    fetchThings: () => dispatch(fetchThings()),
    selectThing: id => dispatch(selectThing(id)),
    blowShitUp: () => dispatch(blowShitUp())})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContainerComponent)
