/**
 * Component definition for the frost-table-body-row component
 */

import Ember from 'ember'
const {ViewUtils, isEmpty} = Ember
const {isSimpleClick} = ViewUtils
import computed, {readOnly} from 'ember-computed-decorators'
import {Component} from 'ember-frost-core'
import {ColumnPropType, ItemPropType} from 'ember-frost-table/typedefs'
import {PropTypes} from 'ember-prop-types'

import layout from '../templates/components/frost-table-row'

export default Component.extend({
  // == Dependencies ==========================================================

  // == Keyword Properties ====================================================

  classNameBindings: ['_isItemSelected:is-selected', 'isSelectable:selectable'],
  layout,
  tagName: 'tr',

  // == PropTypes =============================================================

  propTypes: {
    // options
    cellCss: PropTypes.string,
    cellTagName: PropTypes.string,
    columns: PropTypes.arrayOf(ColumnPropType),
    item: ItemPropType,

    // callbacks
    onCallback: PropTypes.func.isRequired

    // state
  },

  getDefaultProps () {
    return {
      // options
      cellTagName: 'td',
      cellCss: this.get('css'),
      columns: [],
      item: {}

      // state
    }
  },

  // == Computed Properties ===================================================

  @readOnly
  @computed('selectedItems.[]')
  _isItemSelected (selectedItems) {
    if (isEmpty(selectedItems)) {
      return false
    }
    return selectedItems.includes(this.get('item'))
  },

  // == Functions =============================================================

  // == DOM Events ============================================================

  click (event) {
    const isRangeSelect = event.shiftKey
    const isSpecificSelect = false

    // Only process simple clicks or clicks with the acceptable modifiers
    if (isSimpleClick(event) || isRangeSelect) {
      event.preventDefault()
      event.stopPropagation()

      this.onSelect({
        isRangeSelect,
        isSpecificSelect,
        item: this.get('item')
      })
    }
  },

  // == Lifecycle Hooks =======================================================

  // == Actions ===============================================================

  actions: {
  }
})
