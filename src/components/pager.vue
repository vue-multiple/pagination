<template>
  <ul @click="onPagerClick" class="vm-pager">
    <li
      :class="{ active: currentPage === 1 }"
      v-if="pageCount > 0"
      class="number">1</li>
    <li
      class="vm-page-icon more btn-quickprev"
      :class="[quickprevIconClass]"
      v-if="showPrevMore"
      @mouseenter="quickprevIconClass = 'vm-page-icon-d-arrow-left'"
      @mouseleave="quickprevIconClass = 'vm-page-icon-more'">
    </li>
    <li
      v-for="pager in pagers"
      :class="{ active: currentPage === pager }"
      class="number">{{ pager }}</li>
    <li
      class="vm-page-icon more btn-quicknext"
      :class="[quicknextIconClass]"
      v-if="showNextMore"
      @mouseenter="quicknextIconClass = 'vm-page-icon-d-arrow-right'"
      @mouseleave="quicknextIconClass = 'vm-page-icon-more'">
    </li>
    <li
      :class="{ active: currentPage === pageCount }"
      class="number"
      v-if="pageCount > 1">{{ pageCount }}</li>
  </ul>
</template>

<script type="text/babel">
  export default {
    name: 'ElPager',

    props: {
      currentPage: Number,

      pageCount: Number
    },

    watch: {
      showPrevMore(val) {
        if (!val) this.quickprevIconClass = 'vm-page-icon-more';
      },

      showNextMore(val) {
        if (!val) this.quicknextIconClass = 'vm-page-icon-more';
      }
    },

    methods: {
      onPagerClick(event) {
        const target = event.target;
        if (target.tagName === 'UL') {
          return;
        }

        let newPage = Number(event.target.textContent);
        const pageCount = this.pageCount;
        const currentPage = this.currentPage;

        if (target.className.indexOf('more') !== -1) {
          if (target.className.indexOf('quickprev') !== -1) {
            newPage = currentPage - 5;
          } else if (target.className.indexOf('quicknext') !== -1) {
            newPage = currentPage + 5;
          }
        }

        /* istanbul ignore if */
        if (!isNaN(newPage)) {
          if (newPage < 1) {
            newPage = 1;
          }

          if (newPage > pageCount) {
            newPage = pageCount;
          }
        }

        if (newPage !== currentPage) {
          this.$emit('change', newPage);
        }
      }
    },

    computed: {
      pagers() {
        const pagerCount = 7;

        const currentPage = Number(this.currentPage);
        const pageCount = Number(this.pageCount);

        let showPrevMore = false;
        let showNextMore = false;

        if (pageCount > pagerCount) {
          if (currentPage > pagerCount - 2) {
            showPrevMore = true;
          }

          if (currentPage < pageCount - 2) {
            showNextMore = true;
          }
        }

        const array = [];

        if (showPrevMore && !showNextMore) {
          const startPage = pageCount - (pagerCount - 2);
          for (let i = startPage; i < pageCount; i++) {
            array.push(i);
          }
        } else if (!showPrevMore && showNextMore) {
          for (let i = 2; i < pagerCount; i++) {
            array.push(i);
          }
        } else if (showPrevMore && showNextMore) {
          const offset = Math.floor(pagerCount / 2) - 1;
          for (let i = currentPage - offset ; i <= currentPage + offset; i++) {
            array.push(i);
          }
        } else {
          for (let i = 2; i < pageCount; i++) {
            array.push(i);
          }
        }

        this.showPrevMore = showPrevMore;
        this.showNextMore = showNextMore;

        return array;
      }
    },

    data() {
      return {
        current: null,
        showPrevMore: false,
        showNextMore: false,
        quicknextIconClass: 'vm-page-icon-more',
        quickprevIconClass: 'vm-page-icon-more'
      };
    }
  };
</script>
