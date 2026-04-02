export interface DemoRequest {
  id: string;
  fullName: string;
  email: string;
  country: string;
  message: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateDemoResponse {
  id: string;
  fullName: string;
  email: string;
  country: string;
  message: string | null;
  createdAt: Date;
}