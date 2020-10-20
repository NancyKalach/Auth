import { connect } from 'react-redux';

import { selectAllTops } from '../../reducers/selectors';
import { fetchAllTops } from '../../actions/tops_actions';
import TopsIndex from './tops_index';

const mapStateToProps = (state) => ({
    tops: selectAllTops(state)
});

const mapDispatchToProps = dispatch => ({
    fetchAllTops: () => dispatch(fetchAllTops())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopsIndex);