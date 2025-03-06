import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`

test('Testing delete students', async t => {
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "555555");
    await t.typeText("#student-name", "kusal Mendis");
    await t.typeText("#student-age", "35");
    await t.typeText("#student-Hometown", "Kurunegala");
    await t.click("#student-add");

    await t.navigateTo("/student");

    await t.click("#student-delete-555555");

    const table = Selector('#student-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(tdText).notContains("Kusal Mendis");
});
