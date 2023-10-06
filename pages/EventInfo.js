exports.EventInfo = class EventInfo {
    constructor(page) {
        this.page = page;
        this.radDays = page.getByRole('radiogroup');
        this.txtHrAvailFrom = page.getByLabel('Hour').nth(0);
        this.txtMinAvailFrom = page.getByLabel('Minute').nth(0);
        this.ddlPeriodFrom = page.getByLabel('AM or PM').nth(0);
        this.txtHrAvailTo = page.getByLabel('Hour').nth(1);
        this.txtMinAvailTo = page.getByLabel('Minute').nth(1);
        this.ddlPeriodTo = page.getByLabel('AM or PM').nth(1);
        this.ddlDietRestriction = page.getByRole('option');
        this.chbArrivalFee = page.getByLabel('Yes');
        this.btnSubmit = page.getByRole('button', { name: 'Submit' });
    }
    async enterEventInfo(options) {
        const {
            days = '',
            availableFrom: {
                hour: fromHour = '',
                min: fromMin = '',
                period: fromPeriod = ''
            } = {},
            availableTo: {
                hour: toHour = '',
                min: toMin = '',
                period: toPeriod = '',
            } = {},
            dietRestriction = '',
            arrivalFee = ''
        } = options;
        if (days) {
            await this.radDays.getByLabel(days).click();
        }
        await this.txtHrAvailFrom.fill(fromHour);
        await this.txtMinAvailFrom.fill(fromMin);
        await this.ddlPeriodFrom.click();
        await this.ddlPeriodFrom.getByText(fromPeriod).nth(1).click();
        await this.txtHrAvailTo.fill(toHour);
        await this.txtMinAvailTo.fill(toMin);
        await this.ddlPeriodTo.click();
        await this.ddlPeriodTo.getByText(toPeriod).nth(1).click();
        if (dietRestriction) {
            await this.ddlDietRestriction.getByText('Choose').click();
            await this.ddlDietRestriction.getByText(dietRestriction).click();
        }
        if (arrivalFee == 'Yes') {
            await this.chbArrivalFee.click();
        }
        await this.btnSubmit.click();
    }
}

// class SelectTime {
//     constructor(page) {
//         this.txtHrAvailFrom = page.getByLabel('Hour').nth(0);
//         this.txtMinAvailFrom = page.getByLabel('Minute').nth(0);
//         this.ddlPeriodFrom = page.getByLabel('AM or PM').nth(0);
//         this.txtHrAvailTo = page.getByLabel('Hour').nth(1);
//         this.txtMinAvailTo = page.getByLabel('Minute').nth(1);
//         this.ddlPeriodTo = page.getByLabel('AM or PM').nth(1);
//     }

//     async setTime(hour, minute, period) {
//         await this.txtHour.fill(hour);
//         await this.txtMinute.fill(minute);
//         await this.ddlPeriod.click();
//         await this.ddlPeriod.getByText(period).nth(1).click();
//     }
// }