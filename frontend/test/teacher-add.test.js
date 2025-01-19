import {Selector} from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Teacher UI`
    .page`http://localhost:8080/teacher`;

test('Testing add teachers', async t => {
    await t.navigateTo("/dbinitialize");

    await t.navigateTo("/addTeacher");
    await t.typeText("#teacher-id", "10004");
    await t.typeText("#teacher-name", "Mohan Perera");
    await t.typeText("#teacher-age", "45");
    await t.click("#teacher-add");

    await t.navigateTo("/");

    const table = Selector('#teacher-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(tdText).notcontains("Mohan Perera");
});
