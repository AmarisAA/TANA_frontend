const API_URL = import.meta.env.VITE_API_URL

export async function loginUser(data) {
  const response = await fetch(`${API_URL}/api/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.detail || 'Login failed')
  }

  return result
}

export async function registerUser(data) {
  const response = await fetch(`${API_URL}/api/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(JSON.stringify(result))
  }

  return result
}