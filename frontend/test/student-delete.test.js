import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`

test('Testing delete students', async t => {
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "20003");
    await t.typeText("#student-name", "Isuri De Silva");
    await t.typeText("#student-age", "10");
    await t.typeText("#student-Hometown", "Kandy");
    await t.click("#student-add");

    await t.navigateTo("/student");
    //await t.click("#student-delete");

    //await t.navigateTo("/student");

    const table = Selector('#student-delete-20003');
    const rowCount = await table.find('tr').count;

    let lastRowText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(lastRowText).contains("20003");
});
