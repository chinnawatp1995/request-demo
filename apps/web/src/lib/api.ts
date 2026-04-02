const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface DemoFormData {
  fullName: string;
  email: string;
  country: string;
  message?: string;
}

export interface DemoResponse {
  id: string;
  fullName: string;
  email: string;
  country: string;
  message: string | null;
  createdAt: string;
}

export interface ApiError {
  statusCode: number;
  message: string | string[];
  error: string;
  timestamp: string;
  path: string;
}

export async function submitDemoRequest(data: DemoFormData): Promise<DemoResponse> {
  const response = await fetch(`${API_BASE_URL}/api/demo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(
      Array.isArray(error.message) ? error.message.join(', ') : error.message
    );
  }

  return response.json();
}