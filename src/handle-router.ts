export function handlerRoute(route) {
  const routes = [
    {
      path: /\/hola/,
      handler: () => {
        console.log("Si soy Si soy /hola");
      },
    },
    {
      path: /\/hola\/./,
      handler: () => {
        console.log("soy /hola/any");
      },
    },
    {
      path: /\/chau/,
      handler: () => {
        console.log("Soy /chau");
      },
    },
  ];

  for (const r of routes) {
    if (r.path.test(route)) {
      console.log(r, "soy yo");
      r.handler();
    }
  }
}
