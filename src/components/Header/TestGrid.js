import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-redux-grid'

class TestGrid extends React.Component {
  render () {
    const gridConfiguration = {
      data: [
        { id: 'id1', title: 'id1' },
        { id: 'id2', title: 'id2' },
        { id: 'id3', title: 'id3' },
        { id: 'id4', title: 'id4' },
        { id: 'id5', title: 'id5' }
      ],
      columns: [
        { name: 'ID', dataIndex: 'id', createKeyFrom: true, hidden: true },
        { name: 'title', dataIndex: 'title' }
      ],
      plugins: {
        SELECTION_MODEL: {
          mode: 'checkbox-multi',
          enabled: true,
          allowDeselect: true,
          activeCls: 'active',
          selectionEvent: 'singleclick'
        }
      },
      stateKey: 'test-grid',
      pageSize: 5
    }
    return (
      <div>
        <Grid {...gridConfiguration} />
      </div>
    )
  }
}

TestGrid.propTypes = {}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TestGrid)
