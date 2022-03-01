/**
 * Type for what object is instances of
 */
 export interface Instantiable<P, T> {
  new(...args: P[]): T;
}

/**
 * Interface that allow us know more about the service.
 */
export interface ServiceInfo {
  uuid: string;
  isService: boolean;
}

/**
 * Type of a unresolved service error.
 */
export type UnresolvedServiceError = 'UNRESOLVED' | 'CIRCULAR' | 'INVALID' | 'MISSING';