/**
 * created by Jay Stratemeyer
 * helper functions I use. Date classes to help with dates.
 */

helpers = () => {
    var self = {};
    self.Date = {
        Span: class DateSpan {
            constructor(oldestDate, newestDate = new Date()) {
                this.oldestDate = oldestDate;
                this.newestDate = newestDate;
                this.totalSeconds = (this.newestDate - this.oldestDate) / 6000;
                this.totalMinutes = (this.newestDate - this.oldestDate) / 60000;
                this.totalHours = ((this.newestDate - this.oldestDate) / 60000) / 60;
                this.totalDays = this.totalHours / 24;
                this.totalWeeks = this.totalDays / 7;
                this.weeks = Math.floor(this.totalDays / 7);
                this.days = Math.floor(this.totalHours / 24);

                this.hours = Math.floor(Math.floor((this.newestDate - this.oldestDate) / 60000) / 60);
                this.minutes = Math.floor(this.totalMinutes - (this.hours * 60));
                this.seconds = Math.floor(this.totalSeconds - (this.minutes * 60));
                this.toStringAgo = `${(this.totalWeeks > 208) ? 'few years ago' :
                        (this.totalWeeks > 104) ? 'a couple years ago' :
                            (this.totalWeeks > 52) ? 'over a year ago' :
                                (this.totalWeeks > 24) ? 'over 6 months ago' :
                                    (this.totalWeeks > 18 && this.totalWeeks < 24) ? 'about six months' :
                                        (this.totalWeeks > 16 && this.totalWeeks < 18) ? 'over three months' :
                                            (this.totalWeeks > 12 && this.totalWeeks < 16) ? 'under three months' :
                                                (this.totalWeeks > 6.4 && this.totalWeeks < 12) ? 'over two months' :
                                                    (this.totalWeeks > 4.25 && this.totalWeeks < 6.5) ? 'over a month' :
                                                        (this.totalWeeks > 4 && this.totalWeeks < 4.26) ? 'one month' :
                                                            (this.totalWeeks > 3 && this.totalWeeks < 4) ? 'about a month' :
                                                                (this.totalWeeks > 2.74 && this.totalWeeks < 3) ? 'few weeks' :
                                                                    (this.totalWeeks > 1.74 && this.totalWeeks < 2.75) ? 'couple weeks' :
                                                                        (this.totalWeeks > 1.25 && this.totalWeeks < 1.75) ? 'over a week' :
                                                                            (this.totalWeeks > 1 && this.totalWeeks < 1.26) ? 'one week' :
                                                                                (this.days > 0) ? this.days + ' days' :
                                                                                    (this.hours > 0) ? this.hours + ' hrs ' + this.minutes + ' mins' :
                                                                                        (this.minutes > 0) ? this.minutes + ' mins' + this.seconds + ' seconds' :
                                                                                            (this.seconds > 0) ? this.seconds + ' seconds' :
                                                                                                'less than a second'
                    } ago`;
            }
        },
        FromNow: class DateFromNow {
            constructor(options = { seconds: 0, minutes: 0, hours: 0, days: 0, weeks: 0 }, date = new Date()) {
                this.opts = Object.assign({}, { seconds: 0, minutes: 0, hours: 0, days: 0, weeks: 0 }, options);
                var d = this.AddWeeks(date);
                d = this.AddDays(new Date(d));
                d = this.AddHours(new Date(d));
                d = this.AddMinutes(new Date(d));
                d = this.AddSeconds(new Date(d));
                this.date = new Date(d);
                return this.date;
            }
            AddWeeks = (date = new Date()) => {
                return date.getTime() + (((this.opts.weeks * 7) * 24) * 60 * 60 * 1000);
            }
            AddDays = (date = new Date()) => {
                return date.getTime() + ((this.opts.days * 24) * 60 * 60 * 1000);
            }
            AddHours = (date = new Date()) => {
                return date.getTime() + ((this.opts.hours * 60) * 60 * 1000);
            }
            AddMinutes = (date = new Date()) => {
                return date.getTime() + ((this.opts.minutes * 60) * 1000);
            }
            AddSeconds = (date = new Date()) => {
                return date.getTime() + (this.opts.seconds * 1000);
            }
        }
    }
    return self;
}
module.exports = helpers();





