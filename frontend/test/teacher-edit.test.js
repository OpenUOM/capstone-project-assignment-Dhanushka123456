import {Selector} from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Teacher UI`
    .page`http://localhost:8080/teacher`;
test('Testing edit teachers', async t => {
    await t.navigateTo("/addTeacher");
    await t.click("#teacher-edit-10003");

    await t.typeText("#teacher-name", "Sadhamali thushitha");
    await t.typeText("#teacher-age", "99");
    await t.click("#teacher-edit");

    await t.navigateTo("/teacher");

    const table = Selector('#teacher-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(tdText).contains("Sadhamali thushitha");

    await t.click("#teacher-delete-10003");
});
