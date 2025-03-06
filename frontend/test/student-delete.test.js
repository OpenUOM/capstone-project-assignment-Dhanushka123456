import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`

test('Testing delete students', async t => {
    await t.navigateTo("/dbinitialize");

    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "20004");
    await t.typeText("#student-name", "Pasindu Basnayaka");
    await t.typeText("#student-age", "45");
    await t.typeText("#student-Hometown", "Kegalla");
    await t.click("#student-add");

    await t.navigateTo("/student");

    const table = Selector('#student-table')
    const rowCount = await table.find('tr').count;

    let tdText = await table.find('tr').nth(rowCount - 1).innerText;
    await t.expect(tdText).notContains("Pasindu Basnayaka");

     await t.navigateTo("/deleteStudent");
    
    // Add logic to find and click the delete button/element for the student.
    // Replace this with the correct selector or logic for your application.
    await t.click(Selector('.delete-button').withText('Pasindu Basnayaka'));

    // After deletion, verify that the student is no longer in the table
    await t.navigateTo("/student");
    const updatedRowCount = await table.find('tr').count;

    await t.expect(updatedRowCount).eql(rowCount - 1, 'Student count should decrease by one.');

    // Check that 'Pasindu Basnayaka' is no longer in the table
    let isStudentPresent = await table.innerText;
    await t.expect(isStudentPresent).notContains("Pasindu Basnayaka", 'Deleted student should not be present in the table.');
});
    
