exports.PersonalInfo = class PersonalInfo{
    constructor(page){
        this.page = page;
        this.txtName = page.getByLabel('Name');
        this.radGender = page.getByRole('radiogroup');
        this.radMale = page.getByLabel('Male', { exact: true });
        this.radFemale = page.getByLabel('Female');
        this.radNA = page.getByLabel('Prefer not to answer');
        this.radOther = page.locator('label').filter({ hasText: 'Other:' }).getByRole('radio');
        this.txtOther = page.getByLabel('Other response');
        this.dpDOB = page.getByLabel('Date');
        this.txtEmail = page.getByLabel('Email');
        this.txtOrganization = page.getByLabel('Organization');
        this.btnNext = page.getByRole('button', { name: 'Next' });
    }
    async enterPersonalInfo(options){
        const {
            fullName = '',
            gender = '',
            birthdate = '',
            email = '',
            organization = ''
        } = options;
        if(fullName) {
            await this.txtName.fill(fullName);
        }
        switch (gender) {
            case 'Male':
                await this.radMale.click();
                break;
            case 'Female':
                await this.radFemale.click();
                break;
            case 'NA':
                await this.radNA.click();
                break;
            case 'Other':
                await this.radOther.click();
                await this.txtOther.fill('Test');
                break;
            default:
                break;
        }
        if(birthdate){
            await this.dpDOB.fill(birthdate);
        }
        if(email){
            await this.txtEmail.fill(email);
        }
        await this.txtOrganization.fill(organization);
        await this.btnNext.click();
    }

}