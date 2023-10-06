# Crayon - Case Study

## Event Registration Form

This project showcases automated testing using Playwright, an end-to-end testing library for modern web applications. Github Actions are set up to automatically run the tests whenever a file is updated in the repository. 


## How to Run Automated Tests

To run the automated tests, simply update any file in the repository by making changes or adding a new feature. GitHub Actions will automatically trigger the tests upon each update. The test results will be displayed in the Actions tab.


## Adding new test cases

To add a new test case, navigate to Tests > CaseStudy.spec.js and modify the test scripts following this structure.

### For Personal Information form,

```
test('Test 1', async ({ page, context }) => {
    const Personal = new PersonalInfo(page);
    await Personal.enterPersonalInfo({
        fullName: 'Justine Garma',
        gender: 'Male',
        birthdate: '1995-01-28',
        email: 'test@email.com',
        organization: 'Test Organization'
    });
});
```

### For the complete registration form,

```
test('Test 2', async ({ page, context }) => {
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
```
