import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`;
    
test('Testing delete students', async t => {
    await t.navigateTo("/deleteStudent");
    await t.typeText("#student-id", "20004");
    await t.typeText("#student-name", "Pasindu Basnayaka");
    await t.typeText("#student-age", "45");
    await t.typeText("#student-Hometown", "Kegalla");
    await t.click("#student-delete");

    await t.navigateTo("/student");

    await t.click("#student-delete");

    const table = Selector('#student-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(tdText).notContains("Pasindu Basnayaka");
});
