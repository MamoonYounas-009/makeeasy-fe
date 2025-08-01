import { api } from "@/services/api";

export const getProducts = ({ page, limit, search }) =>
  api
    .get("/product", { params: { page, limit, name: search } })
    .then((res) => res.data);

export const getProduct = (id) =>
  api.get(`/product/${id}`).then((res) => res.data);

export const createProduct = (payload) =>
  api.post("/product", payload).then((res) => res.data);

export const updateProduct = (id, payload) =>
  api.patch(`/product/${id}`, payload).then((res) => res.data);

export const deleteProduct = (id) =>
  api.delete(`/product/${id}`).then((res) => res.data);

export const getAllProductsSite = ({
  page,
  limit,
  category,
  price,
  search,
  store,
  featured,
}) =>
  api
    .get("/product/site", {
      params: { page, limit, category, price, name: search, store, featured },
    })
    .then((res) => res.data);

export const getProductDetailSite = (id) =>
  api.get(`/product/site/${id}`).then((res) => res.data);

export const featureProduct = (id, payload) =>
  api.post(`/product/feature/${id}`, payload).then((res) => res.data);
