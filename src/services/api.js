const API_URL = import.meta.env.VITE_API_URL;

function getAuthHeaders() {
  const token = localStorage.getItem("access");

  return {
    "Content-Type": "application/json",
    Authorization: `JWT ${token}`,
  };
}

export async function loginUser(data) {
  const response = await fetch(`${API_URL}/api/token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.detail || "Login failed");
  }

  return result;
}

export async function registerUser(data) {
  const response = await fetch(`${API_URL}/api/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(result));
  }

  return result;
}

export async function getInventory() {
  const response = await fetch(`${API_URL}/api/inventory/`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error("Failed to retrieve Inventory");
  }

  return result;
}

export async function updateInventory(pk, data) {
  const response = await fetch(`${API_URL}/api/inventory/${pk}/`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(result));
  }

  return result;
}

export async function deleteInventory(pk) {
  const response = await fetch(`${API_URL}/api/inventory/${pk}/`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to delete inventory item");
  }

  return true;
}

export async function createInventory(data) {
  const response = await fetch(`${API_URL}/api/inventory/`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(JSON.stringify(result));
  }

  return result;
}
