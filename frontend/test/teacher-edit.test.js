import {Selector} from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Teacher UI`
    .page`http://localhost:8080/`;
test('Testing edit teachers', async t => {
    await t.navigateTo("/addTeacher");
    await t.typeText("#teacher-id", "10003");
    await t.typeText("#teacher-name", "Parasanna Mahagamage");
    await t.typeText("#teacher-age", "30");
    await t.click("#teacher-add");
    
    await t.navigateTo("/editTeacher");
    await t.typeText("#teacher-name", "Sadhamali thushitha");
    await t.typeText("#teacher-age", "45");
    await t.click("#teacher-edit");

    await t.navigateTo("/editTeacher");

    const table = Selector('#teacher-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(tdText).contains("Sadhamali thushitha");

    await t.click("#teacher-delete");
});
