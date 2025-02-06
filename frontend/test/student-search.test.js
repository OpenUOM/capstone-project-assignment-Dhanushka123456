import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`;

test('Testing search students', async t => {
    await t.navigateTo("/student");
    await t.click("#student-search");

    const table = Selector('#student-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount-1).innerText;
    await t.expect(rowCount).notEql("")

    await t.navigateTo("/dbinitialize");
});
