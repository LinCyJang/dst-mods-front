export interface SystemResponse{
  data: {
    cpu: object,
    dir: string,
    newwork: object,
    system: object
  }
}

export interface InstallResponse{
  data: {
    path: string
  }
}

export interface DSTResponse{
  data:any[]
}