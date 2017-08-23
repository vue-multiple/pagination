export const sourcecode1 = `<div class="source first">
  <div class="block">
    <span class="demonstration">页数较少时的效果</span>
    <vm-pagination
      layout="prev, pager, next"
      :total="50">
    </vm-pagination>
  </div>
  <div class="block">
    <span class="demonstration">大于 7 页时的效果</span>
    <vm-pagination
      layout="prev, pager, next"
      :total="1000">
    </vm-pagination>
  </div>
</div>`

export const sourcecode2 = `<vm-pagination
  small
  layout="prev, pager, next"
  :total="50">
</vm-pagination>`

export const sourcecode3 = `<div class="source last">
  <div class="block">
    <span class="demonstration">显示总数</span>
    <vm-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </vm-pagination>
  </div>
  <div class="block">
    <span class="demonstration">调整每页显示条数</span>
    <vm-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </vm-pagination>
  </div>
  <div class="block">
    <span class="demonstration">直接前往</span>
    <vm-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </vm-pagination>
  </div>
  <div class="block">
    <span class="demonstration">完整功能</span>
    <vm-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </vm-pagination>
  </div>
</div>

<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log('每页' + val + '条');
      },
      handleCurrentChange(val) {
        console.log('当前页:' + val)
      }
    },
    data () {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>`