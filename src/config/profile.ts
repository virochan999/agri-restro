import { AppRoutePaths } from '@/src/types/routes';

// Define the option type
export interface ProfileOption {
  title: string;
  route?: string;
  action?: () => void;
  icon?: string;
}

// Define the section type
export interface ProfileSection {
  title: string;
  options: ProfileOption[];
}

// Main profile configuration
export const PROFILE_SECTIONS: Record<string, ProfileSection> = {
  account: {
    title: 'Account',
    options: [
      { title: 'Edit Profile', route: '/profile/edit' },
      { title: 'Notifications', route: '/profile/notifications' },
    ]
  },
  orderDetails: {
    title: 'Order Details',
    options: [
      { title: 'Your Orders', route: '/profile/orders' },
      { title: 'Track Orders', route: '/profile/track' },
      { title: 'Manage Basket', route: '/profile/basket' },
    ]
  },
  transactionHistory: {
    title: 'Transaction History',
    options: [
      { title: 'Order ID', route: '/profile/order-history' },
      { title: 'Payment Status', route: '/profile/payment-status' },
      { title: 'Delivery Status', route: '/profile/delivery-status' },
      { title: 'Total Amount', route: '/profile/transactions' },
    ]
  },
  others: {
    title: 'Others',
    options: [
      { title: 'Request New Products', route: '/profile/request-products' },
      { title: 'About Us', route: '/profile/about' },
      { title: 'Contact Us', route: '/profile/contact' },
      { title: 'Our Impact', route: '/profile/impact' },
    ]
  }
};

type SettingRoutes = 
  | '/profile/edit'
  | '/profile/notifications'
  | '/profile/orders'
  | '/profile/track'
  | '/profile/basket'
  | '/profile/order-history'
  | '/profile/payment-status'
  | '/profile/delivery-status'
  | '/profile/transactions'
  | '/profile/request-products'
  | '/profile/about'
  | '/profile/contact'
  | '/profile/impact'
  | '/profile/settings';

// Define route to component mapping with proper typing
export const PROFILE_ROUTES = {
  '/profile/edit': '(app)/profile/edit',
  '/profile/notifications': '(app)/profile/notifications',
  '/profile/orders': '(app)/profile/orders',
  '/profile/track': '(app)/profile/track',
  '/profile/basket': '(app)/profile/basket',
  '/profile/order-history': '(app)/profile/order-history',
  '/profile/payment-status': '(app)/profile/payment-status',
  '/profile/delivery-status': '(app)/profile/delivery-status',
  '/profile/transactions': '(app)/profile/transactions',
  '/profile/request-products': '(app)/profile/request-products',
  '/profile/about': '(app)/profile/about',
  '/profile/contact': '(app)/profile/contact',
  '/profile/impact': '(app)/profile/impact',
  '/profile/settings': '(app)/profile/settings',
} as const;

export type ProfileRouteKeys = keyof typeof PROFILE_ROUTES;
export type ProfileRouteValues = typeof PROFILE_ROUTES[ProfileRouteKeys];

export const getProfileRoute = (route?: string): AppRoutePaths | undefined => {
  if (!route || !(route in PROFILE_ROUTES)) return undefined;
  
  // This ensures the return type is compatible with router.push()
  const profileRoute = PROFILE_ROUTES[route as ProfileRouteKeys];
  return profileRoute as AppRoutePaths;
};