<template>
  <el-container>
    <el-row :gutter="12">
      <el-col
        :xs="24"
        :sm="8"
        :md="6"
        :lg="6"
        :xl="4"
        v-for="product in products"
        :key="product.id"
      >
        <el-card shadow="hover" :body-style="{ padding: '10px' }">
          <div slot="header">
            <h1>{{ product.name }}</h1>
            <p>Цена: {{ product.price }}</p>
          </div>
          <el-button
            size="small"
            @click="
              () => {
                addToCart(product);
                showAddNotifications();
              }
            "
            type="success"
            icon="el-icon-plus"
            >Добавить</el-button
          >
          <p>{{ product.description | truncate(100, "...") }}</p>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Products",
  props: { id: Number },
  computed: mapGetters({
    products: "products/allProducts",
    length: "products/getNumberOfProducts",
  }),
  methods: {
    ...mapActions("cart", ["addToCart"]),
    showAddNotifications() {
      this.$message({
        message: "Товар добавлен в корзину",
        type: "success",
      });
    },
  },
};
</script>

<style scoped>
.el-col {
  margin-top: 10px;
}
</style>