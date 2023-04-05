import { ChartRangePadding, EdgeLabelPlacement, IntervalType, LabelIntersectAction, ValueType } from "@syncfusion/ej2-react-charts";
import { ReactNode } from "react";

export interface IInitState {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}

export interface IContext {
  activeMenu: boolean;
  setActiveMenu(cb: (value: boolean) => boolean): void;
  isClicked: IInitState;
  setIsClicked(value: IInitState): void;
  handleClick(value?: string): void;
  screenSize: number;
  setScreenSize(value: number): void;
  currentColor: string;
  currentMode: string;
  themeSettings: boolean;
  setThemeSettings(value: boolean): void;
  setMode(value: React.ChangeEvent<HTMLInputElement>): void;
  setColor(value: string): void;
}

export interface INavButton {
  title: string;
  customFunc(): void;
  icon?: ReactNode;
  color?: string;
  dotColor?: string;
}

export interface ILinePrimaryXAxis {
  valueType: ValueType | undefined;
  labelFormat: string;
  intervalType: IntervalType | undefined;
  edgeLabelPlacement: EdgeLabelPlacement | undefined;
  majorGridLines: { width: number };
}

export interface ILinePrimaryYAxis {
  labelFormat: string,
  rangePadding: ChartRangePadding | undefined,
  minimum: number,
  maximum: number,
  interval: number,
  lineStyle: { width: number },
  majorTickLines: { width: number },
  minorTickLines: { width: number },
}

export interface IStackedPrimaryXAxis {
  majorGridLines: { width: number },
  minorGridLines: { width: number },
  majorTickLines: { width: number },
  minorTickLines: { width: number },
  interval: number,
  lineStyle: { width: number },
  labelIntersectAction: LabelIntersectAction | undefined,
  valueType: ValueType | undefined,
}

export interface IAreaPrimaryXAxis {
  valueType: ValueType | undefined,
  labelFormat: string,
  majorGridLines: { width: number },
  intervalType: IntervalType | undefined,
  edgeLabelPlacement: EdgeLabelPlacement | undefined,
  labelStyle: { color: string },
}

export interface IBarPrimaryXAxis {
  valueType: ValueType | undefined,
  interval: number,
  majorGridLines: { width: number },
}

export interface IColorMappingPrimaryXAxis {
  valueType: ValueType | undefined,
  majorGridLines: { width: number },
  title: string,
}

export interface IRangeColorMapping {
  label: string
  start: number
  end: number
  colors: string[]
}

export interface IFinancialChartData {
  x: Date,
  open: number,
  high: number,
  low: number,
  close: number,
  volume: number,
}

export interface IFinancialPrimaryXAxis {
  valueType: ValueType | undefined,
  minimum: Date,
  maximum: Date,
  crosshairTooltip: { enable: boolean },
  majorGridLines: { width: number },
}

export interface IPieChartData {
  x: string, 
  y: number, 
  text: string
}

export interface Root {
  currentValue: CurrentValue
  previousValue: PreviousValue
  value: string
  name: string
}

export interface CurrentValue {
  hex: string
  rgba: string
}

export interface PreviousValue {
  hex: string
  rgba: string
}

export interface IARGS {
  currentValue: ICurrentValue;
  previousValue: IPreviousValue;
  value: string;
  name: string;
}

interface ICurrentValue {
  hex: string;
  rgba: string;
}

interface IPreviousValue {
  hex: string;
  rgba: string;
}