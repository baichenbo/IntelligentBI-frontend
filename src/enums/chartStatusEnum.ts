export enum ChartStatusEnum {
  WAIT = 0,
  RUNNING = 1,
  SUCCEED = 2,
  FAILED = 3
}


export function getText(status: ChartStatusEnum): string {
  if(ChartStatusEnum.WAIT === status){
    return "wait";
  }else if(ChartStatusEnum.RUNNING === status){
    return "running";
  }else if(ChartStatusEnum.SUCCEED === status){
    return "succeed";
  }else if(ChartStatusEnum.FAILED === status){
    return "failed";
  }else {
    throw new Error("不存在枚举值为: " + status);
  }
}

