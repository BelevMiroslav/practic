export const login = {
    data: function() {
      return {
        img: 1,
        hs: 0,
        parent: ''
      };
    },
    mounted: function() {
      this.img = this.randomIntFromInterval(1, 7);
      if (this.$parent) {
        this.parent = this.$parent.sparent;
      }
    },
    methods: {},
    template: `
      <div class="flex">
        ABC
      </div>
    `
  };
  