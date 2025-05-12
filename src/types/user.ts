export type ContactInfo = {
  fullName: string;
  email: string;
  phone: string;
  contactType: string;
};

export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  contactInfo: ContactInfo;
};
