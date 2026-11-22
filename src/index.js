
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Проверка работы сервера
    if (url.pathname === "/api/status") {
      return Response.json({
        status: "online",
        project: "BLOXSHOT SUPPORT",
        database: Boolean(env.DB)
      });
    }

    // Все остальные запросы передаём статическому сайту
    return env.ASSETS.fetch(request);
  }
};
