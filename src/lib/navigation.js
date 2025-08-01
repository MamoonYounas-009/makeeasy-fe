import {
  Heart,
  Home,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Store,
  User,
  Users,
} from "lucide-react";

const adminRoutes = [
  {
    title: "Dashboard",
    url: "/dashboard/admin",
    icon: Home,
  },
  {
    title: "User Management",
    url: "/dashboard/admin/users",
    icon: Users,
  },
  {
    title: "Order Management",
    url: "/dashboard/admin/orders",
    icon: ShoppingBag,
  },
  {
    title: "Product Management",
    url: "/dashboard/admin/products",
    icon: Package,
  },
  {
    title: "System Settings",
    url: "/dashboard/admin/settings",
    icon: Settings,
  },
  {
    title: "Feedbacks",
    url: "/dashboard/admin/feedbacks",
    icon: MessageSquare,
  },
  {
    title: "Wishlist",
    url: "/dashboard/admin/wishlist",
    icon: Heart,
  },
  {
    title: "Profile",
    url: "/dashboard/admin/profile",
    icon: User,
  },
  {
    title: "Visit Site",
    url: "/",
    icon: Store,
  },
];

const buyerRoutes = [
  {
    title: "Dashboard",
    url: "/dashboard/buyer",
    icon: Home,
  },
  {
    title: "Orders",
    url: "/dashboard/buyer/orders",
    icon: ShoppingCart,
  },
  {
    title: "Wishlist",
    url: "/dashboard/buyer/wishlist",
    icon: Heart,
  },
  {
    title: "Profile",
    url: "/dashboard/buyer/profile",
    icon: User,
  },
  {
    title: "Visit Site",
    url: "/",
    icon: Store,
  },
];

const sellerRoutes = [
  {
    title: "Dashboard",
    url: "/dashboard/seller",
    icon: Home,
  },
  {
    title: "Products",
    url: "/dashboard/seller/products",
    icon: Package,
  },
  {
    title: "Deals",
    url: "/dashboard/seller/deals",
    icon: ShoppingBag,
  },
  {
    title: "Orders",
    url: "/dashboard/seller/orders",
    icon: ShoppingCart,
  },
  {
    title: "Wishlist",
    url: "/dashboard/seller/wishlist",
    icon: Heart,
  },
  {
    title: "Feedbacks",
    url: "/dashboard/seller/feedbacks",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    url: "/dashboard/seller/settings",
    icon: Settings,
  },
  {
    title: "Visit Site",
    url: "/",
    icon: Store,
  },
];

export const allRoutes = {
  admin: adminRoutes,
  buyer: buyerRoutes,
  seller: sellerRoutes,
};
