<template>
  <el-main>
    <el-table
      :data="orders"
      style="width: 100%"
      stripe
      empty-text="Нет информации"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table :data="props.row.order_items" style="width: 100%">
            <el-table-column prop="product.name" label="Наименование">
            </el-table-column>
            <el-table-column prop="price" label="Цена"> </el-table-column>
            <el-table-column prop="quantity" label="Количество">
            </el-table-column>
            <el-table-column prop="get_cost" label="Сумма"> </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="№"> </el-table-column>
      <el-table-column label="Дата заказа">
        <template slot-scope="scope">
          {{ normalizeDate(scope.row.created) }}
        </template>
      </el-table-column>
      <el-table-column prop="get_total_cost" label="Сумма"> </el-table-column>
      <el-table-column label="Статус">
        <template slot-scope="scope">
          {{ statusChanger(scope.row.status) }}
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import dayjs from "dayjs";

export default {
  name: "Account",
  mounted() {
    this.SET_ORDERS();
  },
  computed: mapGetters({
    orders: "account/get_orders",
  }),
  methods: {
    ...mapActions("account", ["SET_ORDERS"]),
    statusChanger(status) {
      switch (status) {
        case "N":
          return "Новый";
        case "P":
          return "В процессе";
        case "C":
          return "Выполнен";
        default:
          return "Неизвестный статус";
      }
    },
    normalizeDate(date) {
      return dayjs(date).format("DD-MM-YYYY HH:mm:ss");
    },
  },
};
</script>

<style scoped>
</style>