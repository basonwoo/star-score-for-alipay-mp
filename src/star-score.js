Component({
  properties: {
    // is readonly
    disabled: {
      type: Boolean,
      value: false
    },
    // amount of stars
    val: {
      type: Number,
      value: 0
    },
    // width of stars
    starWidth: {
      type: Number,
      value: 40
    },
    // height of stars
    starHeight: {
      type: Number,
      value: 40
    }
  },
  /**
   * initial data
   */
  data: {
    stars: [0, 1, 2, 3, 4],
    starEmpty: '',
    starHalf: '',
    starFull: ''
  },
  methods: {
    _selectHalf(e) {
      let val = e.currentTarget.dataset.val
      if (this.data.val == 0.5 && e.currentTarget.dataset.val == 0.5) {
        val = 0;
      }
      this.setData({
        val: val
      })
      this.triggerEvent('_selectStar', this.data.val)
    },
    _selectFull(e) {
      let val = e.currentTarget.dataset.val
      this.setData({
        val: val
      })
      this.triggerEvent('_selectStar', this.data.val)
    }
  }
})
