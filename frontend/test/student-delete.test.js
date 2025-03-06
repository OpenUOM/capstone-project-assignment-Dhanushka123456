import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`;

test('Testing delete students', async t => {
    // Step 1: Navigate to the add student page and add a new student
    await t.navigateTo("/addStudent");
    await t.typeText("#student-id", "555555");
    await t.typeText("#student-name", "Kusal Mendis");
    await t.typeText("#student-age", "35");
    await t.typeText("#student-Hometown", "Kurunegala");
    await t.click("#student-add");

    // Step 2: Check that the student has been added
    await t.navigateTo("/student");
    const table = Selector('#student-table');
    await t.expect(table.innerText).notContains("Kusal Mendis");

    // Step 3: Navigate to delete page and delete the added student
    await t.navigateTo("/deleteStudent");
    const deleteButton = Selector(`#student-delete-555555`);
    
    await t.expect(deleteButton.exists).ok("Delete button for the student does not exist");
    await t.click(deleteButton);
    
    // Step 4: Navigate back to the student list page
    await t.navigateTo("/student");

    // Step 5: Ensure the student has been deleted
    const updatedTable = Selector('#student-table');
    await t.expect(updatedTable.innerText).notContains("Kusal Mendis");
});
