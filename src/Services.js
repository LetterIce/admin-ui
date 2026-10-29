export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("[Services] Gagal mengambil data post:", error.message);
    throw error;
  }
};

