import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`;

test('Testing edit students', async t => {
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "20004");
    await t.typeText("#student-name", "Pasindu Basnayaka");
    await t.typeText("#student-age", "45");
    await t.typeText("#student-Hometown", "catholic");
    await t.click("#student-add");

    await t.navigateTo("/student");
    await t.click("#student-edit");

    await t.typeText("#student-name", "Somadasa kasun");
    await t.typeText("#student-age", "99");
    await t.typeText("#student-Hometown", "Hometown");
    await t.click("#student-edit");

    await t.navigateTo("/student");

    const table = Selector('#student-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(tdText).contains("Changed Student Name");

    await t.navigateTo("/student");
    await t.click("#student-delete-99998");
});
