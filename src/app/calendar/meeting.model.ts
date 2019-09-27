import { Time } from '@angular/common';

export class Meeting {
    public name: string;
    public location: string;
    public description: string;
    // public time: Time;
    public timeHours: number;
    public timeSecond: number;

    constructor(name: string, location: string, timeHours: number, timeSecond: number,  desc?: string) {
        this.name=name;
        this.location = location;
        this.description = desc;
        this.timeHours = timeHours;
        this.timeSecond = timeSecond;
    }
}