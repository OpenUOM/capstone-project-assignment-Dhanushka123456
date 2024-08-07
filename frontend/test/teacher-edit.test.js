import {Selector} from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Teacher UI`
    .page`http://localhost:3000/teacher`
test('Testing edit teachers', async t => {
    await t.navigateTo("/test/teacher");
    await t.click("#teacher-edit-10003");

    await t.typeText("#teacher-name", "Changed Teacher Name");
    await t.typeText("#teacher-age", "99");
    await t.click("#teacher-edit");

    await t.navigateTo("/test/teacher");

    const table = Selector('#teacher-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(tdText).contains("Changed Teacher Name");

    await t.click("#teacher-delete-10003");
});
