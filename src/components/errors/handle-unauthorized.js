export const handleUnauthorized = (error, callback) => {
    if (error && error.response?.status === 401) {
      callback()
    }
  }