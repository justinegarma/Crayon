const { test, expect } = require('@playwright/test');
import { PersonalInfo } from '../pages/PersonalInfo'
import { EventInfo } from '../pages/EventInfo'

test('Submit Personal Information form with valid required fields', async ({ page, context }) => {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?hl=en&vc=0&c=0&w=1&flr=0');
    await page.getByRole('button', { name: 'Next' }).click();
    const Personal = new PersonalInfo(page);
    await Personal.enterPersonalInfo({
        fullName: 'Justine Garma',
        gender: 'Male',
        birthdate: '1995-01-28',
        email: 'test@email.com',
        organization: 'Test Organization'
    });
});

test('Submit Personal Information form without name', async ({ page, context }) => {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?hl=en&vc=0&c=0&w=1&flr=0');
    await page.getByRole('button', { name: 'Next' }).click();
    const Personal = new PersonalInfo(page);
    await Personal.enterPersonalInfo({
        gender: 'Male',
        birthdate: '1995-01-28',
        email: 'test@email.com',
        organization: 'Test Organization'
    });
    await expect(page.getByText('This is a required question')).toBeVisible();
});

test('Submit Personal Information form without date of birth', async ({ page, context }) => {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?hl=en&vc=0&c=0&w=1&flr=0');
    await page.getByRole('button', { name: 'Next' }).click();
    const Personal = new PersonalInfo(page);
    await Personal.enterPersonalInfo({
        fullName: 'Justine Garma',
        gender: 'Male',
        email: 'test@email.com',
        organization: 'Test Organization'
    });
    await expect(page.getByText('This is a required question')).toBeVisible();
});

test('Submit Personal Information form without email', async ({ page, context }) => {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?hl=en&vc=0&c=0&w=1&flr=0');
    await page.getByRole('button', { name: 'Next' }).click();
    const Personal = new PersonalInfo(page);
    await Personal.enterPersonalInfo({
        fullName: 'Justine Garma',
        gender: 'Male',
        birthdate: '1995-01-28',
        email: '',
        organization: 'Test Organization'
    });
    await expect(page.getByText('This is a required question')).toBeVisible();
});

test('Submit Personal Information form with invalid email value', async ({ page, context }) => {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?hl=en&vc=0&c=0&w=1&flr=0');
    await page.getByRole('button', { name: 'Next' }).click();
    const Personal = new PersonalInfo(page);
    await Personal.enterPersonalInfo({
        fullName: 'Justine Garma',
        gender: 'Male',
        birthdate: '1995-01-28',
        email: 'test123',
        organization: 'Test Organization'
    });
    await expect(page.getByText('Must be a valid email')).toBeVisible();
});

test('Submit complete Event Information form with valid required fields', async ({ page, context }) => {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?hl=en&vc=0&c=0&w=1&flr=0');
    await page.getByRole('button', { name: 'Next' }).click();
    const Personal = new PersonalInfo(page);
    await Personal.enterPersonalInfo({
        fullName: 'Justine Garma',
        gender: 'Male',
        birthdate: '1995-01-28',
        email: 'test123@email.com',
        organization: 'Test Organization'
    });
    const Event = new EventInfo(page);
    await Event.enterEventInfo({
        days: 'Tuesday',
        availableFrom: {
            hour: '8',
            min: '00',
            period: 'AM'
        },
        availableTo: {
            hour: '5',
            min: '00',
            period: 'PM',
        },
        dietRestriction: 'None',
        arrivalFee: 'Yes'
    });
});

test('Submit Event Information form without days attending field', async ({ page, context }) => {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?hl=en&vc=0&c=0&w=1&flr=0');
    await page.getByRole('button', { name: 'Next' }).click();
    const Personal = new PersonalInfo(page);
    await Personal.enterPersonalInfo({
        fullName: 'Justine Garma',
        gender: 'Male',
        birthdate: '1995-01-28',
        email: 'test123@email.com',
        organization: 'Test Organization'
    });
    const Event = new EventInfo(page);
    await Event.enterEventInfo({
        availableFrom: {
            hour: '8',
            min: '00',
            period: 'AM'
        },
        availableTo: {
            hour: '5',
            min: '00',
            period: 'PM',
        },
        dietRestriction: 'None',
        arrivalFee: 'Yes'
    });
    await expect(page.getByText('This is a required question')).toBeVisible();
});

test('Submit Event Information form  without Available from time', async ({ page, context }) => {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?hl=en&vc=0&c=0&w=1&flr=0');
    await page.getByRole('button', { name: 'Next' }).click();
    const Personal = new PersonalInfo(page);
    await Personal.enterPersonalInfo({
        fullName: 'Justine Garma',
        gender: 'Male',
        birthdate: '1995-01-28',
        email: 'test123@email.com',
        organization: 'Test Organization'
    });
    const Event = new EventInfo(page);
    await Event.enterEventInfo({
        days: 'Wednesday',
        availableTo: {
            hour: '5',
            min: '00',
            period: 'PM',
        },
        dietRestriction: 'None',
        arrivalFee: 'Yes'
    });
    await expect(page.getByText('This is a required question')).toBeVisible();
});

test('Submit Event Information form with blank hour value for Available from', async ({ page, context }) => {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?hl=en&vc=0&c=0&w=1&flr=0');
    await page.getByRole('button', { name: 'Next' }).click();
    const Personal = new PersonalInfo(page);
    await Personal.enterPersonalInfo({
        fullName: 'Justine Garma',
        gender: 'Male',
        birthdate: '1995-01-28',
        email: 'test123@email.com',
        organization: 'Test Organization'
    });
    const Event = new EventInfo(page);
    await Event.enterEventInfo({
        days: 'Tuesday',
            availableFrom: {
                hour: '',
                min: '00',
                period: 'AM'
            },
        availableTo: {
            hour: '5',
            min: '00',
            period: 'PM',
        },
        dietRestriction: 'None',
        arrivalFee: 'Yes'
    });
    await expect(page.getByText('Invalid time')).toBeVisible();
});

test('Submit Event Information form with blank minute value for Available from', async ({ page, context }) => {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?hl=en&vc=0&c=0&w=1&flr=0');
    await page.getByRole('button', { name: 'Next' }).click();
    const Personal = new PersonalInfo(page);
    await Personal.enterPersonalInfo({
        fullName: 'Justine Garma',
        gender: 'Male',
        birthdate: '1995-01-28',
        email: 'test123@email.com',
        organization: 'Test Organization'
    });
    const Event = new EventInfo(page);
    await Event.enterEventInfo({
        days: 'Tuesday',
        availableFrom: {
            hour: '8',
            min: '',
            period: 'AM'
        },
        availableTo: {
            hour: '5',
            min: '00',
            period: 'PM',
        },
        dietRestriction: 'None',
        arrivalFee: 'Yes'
    });
    await expect(page.getByText('Invalid time')).toBeVisible();
});

test('Submit Event Information form with invalid time value', async ({ page, context }) => {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?hl=en&vc=0&c=0&w=1&flr=0');
    await page.getByRole('button', { name: 'Next' }).click();
    const Personal = new PersonalInfo(page);
    await Personal.enterPersonalInfo({
        fullName: 'Justine Garma',
        gender: 'Male',
        birthdate: '1995-01-28',
        email: 'test123@email.com',
        organization: 'Test Organization'
    });
    const Event = new EventInfo(page);
    await Event.enterEventInfo({
        days: 'Tuesday',
        availableFrom: {
            hour: '8',
            min: 'xx',
            period: 'AM'
        },
        availableTo: {
            hour: '5',
            min: '00',
            period: 'PM',
        },
        dietRestriction: 'None',
        arrivalFee: 'Yes'
    });
    await expect(page.getByText('Invalid time')).toBeVisible();
});

test('Blank dietary restriction', async ({ page, context }) => {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?hl=en&vc=0&c=0&w=1&flr=0');
    await page.getByRole('button', { name: 'Next' }).click();
    const Personal = new PersonalInfo(page);
    await Personal.enterPersonalInfo({
        fullName: 'Justine Garma',
        gender: 'Male',
        birthdate: '1995-01-28',
        email: 'test123@email.com',
        organization: 'Test Organization'
    });
    const Event = new EventInfo(page);
    await Event.enterEventInfo({
        days: 'Tuesday',
        availableFrom: {
            hour: '8',
            min: '00',
            period: 'AM'
        },
        availableTo: {
            hour: '5',
            min: '00',
            period: 'PM',
        },
        arrivalFee: 'Yes'
    });
    await expect(page.getByText('This is a required question')).toBeVisible();
});

test('Submit Event Application form without ticking arrival fee confirmation', async ({ page, context }) => {
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?hl=en&vc=0&c=0&w=1&flr=0');
    await page.getByRole('button', { name: 'Next' }).click();
    const Personal = new PersonalInfo(page);
    await Personal.enterPersonalInfo({
        fullName: 'Justine Garma',
        gender: 'Male',
        birthdate: '1995-01-28',
        email: 'test123@email.com',
        organization: 'Test Organization'
    });
    const Event = new EventInfo(page);
    await Event.enterEventInfo({
        days: 'Tuesday',
        availableFrom: {
            hour: '8',
            min: '00',
            period: 'AM'
        },
        availableTo: {
            hour: '5',
            min: '00',
            period: 'PM',
        },
        dietRestriction: 'None',
        arrivalFee: ''
    });
    await expect(page.getByText('This is a required question')).toBeVisible();
});