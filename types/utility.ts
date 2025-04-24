// Tipos de utilidad para la aplicación
export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;