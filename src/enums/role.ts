export const roles = ["CUSTOMER", "ORG_ADMIN"] as const;
export type Roles = typeof roles[number];