import instance from './https'

// 封装GET请求
export async function get<T>(url: string, params?: any): Promise<T> {
   try {
    const response = await instance.get<T>(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// 封装POST请求
export async function post<T>(url: string, data?: any): Promise<T> {
   try {
    const response = await instance.post<T>(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// put
export async function put<T>(url: string, data?: any): Promise<T> {
   try {
    const response = await instance.put<T>(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
//delete
export async function del<T>(url: string): Promise<T> {
   try {
    const response = await instance.delete<T>(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
