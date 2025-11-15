export const withBasePath = (path = ""): string => {
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;

  if (!path || path === "/") {
    return normalizedBase;
  }

  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
};

export const removeBasePath = (pathname: string): string => {
  const base = import.meta.env.BASE_URL ?? "/";
  if (!pathname) {
    return pathname;
  }

  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;

  if (!normalizedBase || normalizedBase === "/") {
    return pathname;
  }

  return pathname.startsWith(normalizedBase)
    ? pathname.slice(normalizedBase.length) || "/"
    : pathname;
};

export const normalizePathname = (pathname: string): string => {
  if (!pathname) {
    return "/";
  }

  let result = pathname;
  while (result.length > 1 && result.endsWith("/")) {
    result = result.slice(0, -1);
  }

  return result || "/";
};
