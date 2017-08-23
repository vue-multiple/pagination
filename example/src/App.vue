<template>
    <div id="app">
        <demonstration
                tag="h2"
                title="Pagination 分页"
                description="当数据量过多时，使用分页分解数据。"
                :show-content="false">
        </demonstration>
        <demonstration
                title="基础用法"
                anchor="demo-code-title"
                :highlight="sourcecode1">
            <template slot="description">
                简单描述一下示例代码标题
            </template>
            <template slot="source">
                <div class="source first">
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
                </div>
            </template>
            <template slot="explanation">
                设置 <code>layout</code> ，表示需要显示的内容，用逗号分隔，布局元素会依次显示。<code>prev</code> 表示上一页，<code>next</code>为下一页，<code>pager</code>表示页码列表，除此以外还提供了<code>jumper</code>和<code>total</code>，<code>size</code>和特殊的布局符号->，->后的元素会靠右显示，<code>jumper</code>表示跳页元素，<code>total</code>表示显示页码总数，<code>size</code>用于设置每页显示的页码数量。
            </template>
        </demonstration>
        <demonstration
                title="小型分页"
                anchor="demo-code-title"
                :highlight="sourcecode2">
            <template slot="description">
                在空间有限的情况下，可以使用简单的小型分页。
            </template>
            <template slot="source">
                <div class="source">
                    <vm-pagination
                            small
                            layout="prev, pager, next"
                            :total="50">
                    </vm-pagination>
                </div>
            </template>
            <template slot="explanation">
                只需要一个<code>small</code>属性，它接受一个<code>Boolean</code>，默认为<code>false</code>，设为<code>true</code>即可启用。
            </template>
        </demonstration>
        <demonstration
                title="附加功能"
                anchor="demo-code-title"
                :highlight="sourcecode3">
            <template slot="description">
                根据场景需要，可以添加其他功能模块。
            </template>
            <template slot="source">
                <div class="source last">
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
            </template>
            <template slot="explanation">
                此例是一个完整的用例，使用了<code>size-change</code>和<code>current-change</code> 事件来处理页码大小和当前页变动时候触发的事件。<code>page-sizes </code> 接受一个整型数组，数组元素为展示的选择每页显示个数的选项，<code>[100, 200, 300, 400]</code> 表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。
            </template>
        </demonstration>
        <div class="input-demo__item">
            <h3 id="attributes">
                <a href="./#attributes" aria-hidden="true" class="header-anchor">¶</a>
                Attributes
            </h3>
            <table class="table">
                <thead>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
                </thead>
                <tbody>
                <tr>
                    <td>small</i></td>
                    <td>是否使用小型分页样式</td>
                    <td>Boolean</td>
                    <td>—</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>page-size</i></td>
                    <td>每页显示条目个数</td>
                    <td>Number</td>
                    <td>—</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>total</i></td>
                    <td>总条目数</td>
                    <td>Number</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>page-count</i></td>
                    <td>总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性</td>
                    <td>Number</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>current-page</i></td>
                    <td>当前页数，支持 .sync 修饰符</td>
                    <td>Number</td>
                    <td>—</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>layout</i></td>
                    <td>组件布局，子组件名用逗号分隔</td>
                    <td>String</td>
                    <td>sizes, prev, pager, next, jumper, ->, total, slot</td>
                    <td>'prev, pager, next, jumper, ->, total'</td>
                </tr>
                <tr>
                    <td>page-sizes</i></td>
                    <td>每页显示个数选择器的选项设置</td>
                    <td>Number[]</td>
                    <td>—</td>
                    <td>[10, 20, 30, 40, 50, 100]</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="input-demo__item">
            <h3 id="event">
                <a href="./#event" aria-hidden="true" class="header-anchor">¶</a>
                Events
            </h3>
            <table class="table">
                <thead>
                <th>事件名称</th>
                <th>说明</th>
                <th>回调参数</th>
                </thead>
                <tbody>
                <tr>
                    <td>size-change</td>
                    <td>pageSize 改变时会触发</td>
                    <td>每页条数size</td>
                </tr>
                <tr>
                    <td>current-change</td>
                    <td>currentPage 改变时会触发</td>
                    <td>当前页currentPage</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="input-demo__item">
            <h3 id="slot">
                <a href="./#slot" aria-hidden="true" class="header-anchor">¶</a>
                Slot
            </h3>
            <table class="table">
                <thead>
                <th>name</th>
                <th>说明</th>
                </thead>
                <tbody>
                <tr>
                    <td>—</td>
                    <td>自定义内容，需要在 layout 中列出 slot</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script type="es6">
    import {sourcecode1,sourcecode2,sourcecode3} from './template'

    export default {
        data () {
            return {
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                sourcecode1,
                sourcecode2,
                sourcecode3
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
    }
</script>

<style lang="less" rel="stylesheet/less" type="text/less">

    #app {
        margin: 60px auto;
    }
    .first .block{
        padding-bottom: 30px;
        text-align: center;
        border-right: 1px solid #eff2f6;
        float: left;
        width: 50%;
        box-sizing: border-box;
    }
    .first .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
    }
    .last .block{
        padding: 30px 24px;
        border-bottom: 1px solid #eff2f6;
        &:first-child{
            padding-top: 0;
        }
        &:last-child{
            padding-bottom: 0;
            border-bottom:none;
        }
    }
    .last .demonstration {
        font-size: 14px;
        color: #8492a6;
        line-height: 44px;
    }
    .input-demo__item {
        width: 1000px;
        margin: 0 auto;
        h2, h3 {
            font-weight: 400;
            color: #1f2f3d;
        }

        h2 {
            font-size: 28px;
            margin: 0
        }

        h3 {
            font-size: 22px;
            margin: 45px 0 15px;
        }

        h3, h2 {

            &
            :hover {

                a {
                    opacity: .4;
                }

            }
            a {
                float: left;
                margin-left: -20px;
                opacity: 0;
                cursor: pointer;
                color: #4078c0;
                text-decoration: none;

                &
                :hover {
                    opacity: .4;
                }

            }
        }
        p {
            font-size: 14px;
            color: #5e6d82;
            line-height: 1.5em;

            a {
                color: #2d8cf0;
                background: 0 0;
                text-decoration: none;
                outline: 0;
                cursor: pointer;
                transition: color .2s ease;

                &
                :hover {
                    color: #57a3f3;
                }

            }
        }
        .new {
            font-style: normal;
            color: #FF4949;

            code {
                background-color: #FF4949 !important;
                color: #fff !important;
            }

        }
        .table {
            border-collapse: collapse;
            width: 100%;
            background-color: #fff;
            color: #5e6d82;
            font-size: 14px;
            margin-bottom: 45px;
            line-height: 1.5em;

            th {
                text-align: left;
                border-top: 1px solid #eaeefb;
                background-color: #eff2f7;
                white-space: nowrap;
            }

            th, td {
                border-bottom: 1px solid #eaeefb;
                padding: 10px;
                max-width: 250px;
            }

        }
    }

</style>
