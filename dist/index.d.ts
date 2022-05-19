import PropTypes from "prop-types";
import * as React from "react";
import type { EventPreviewProps, EventsListProps, HourPreviewProps, HoursListProps, TimeTableProps } from "./types";
export declare const getDefaultDayLabel: (day: string) => string;
export declare const HourPreview: React.FC<HourPreviewProps>;
export declare const EventPreview: React.FC<EventPreviewProps>;
export declare const EventsList: ({ events, day, hoursInterval, rowHeight, renderEvent, }: EventsListProps) => (React.ReactElement<any, any> | null)[];
export declare const HoursList: ({ hoursInterval, rowHeight, renderHour, }: HoursListProps) => (React.ReactElement<any, any> | null)[];
export declare const onClickPreview: (e: any, rowHeight: any) => void;
export declare const TimeTable: {
    ({ events, hoursInterval, timeLabel, getDayLabel, renderEvent, renderHour, onClick, }: TimeTableProps): JSX.Element;
    propTypes: {
        events: PropTypes.Validator<object>;
        hoursInterval: PropTypes.Requireable<PropTypes.InferProps<{
            from: PropTypes.Validator<number>;
            to: PropTypes.Validator<number>;
        }>>;
        renderHour: PropTypes.Requireable<(...args: any[]) => any>;
        renderEvent: PropTypes.Requireable<(...args: any[]) => any>;
        getDayLabel: PropTypes.Requireable<(...args: any[]) => any>;
        timeLabel: PropTypes.Requireable<string>;
    };
    defaultProps: {
        hoursInterval: {
            from: number;
            to: number;
        };
        timeLabel: string;
        renderHour: React.FC<HourPreviewProps>;
        renderEvent: React.FC<EventPreviewProps>;
        getDayLabel: (day: string) => string;
    };
};
export default TimeTable;
