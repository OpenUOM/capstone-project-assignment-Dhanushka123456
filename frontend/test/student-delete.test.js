import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Student UI`
    .page`http://localhost:8080/student`;

test('Testing delete students', async t => {
    // Navigate to addStudent page
    await t.navigateTo("/addStudent");
    
    // Fill in student details
    await t.typeText("#student-id", "555555");
    await t.typeText("#student-name", "Kusal Mendis");
    await t.typeText("#student-age", "35");
    await t.typeText("#student-Hometown", "Kurunegala");
    await t.click("#student-add");

    // Ensure the student has been added by checking the presence in the student list
    await t.navigateTo("/student");
    const table = Selector('#student-table');
    await t.expect(table.innerText).contains("");

    // Now navigate to deleteStudent and delete the student
    await t.navigateTo("/deleteStudent");
    
    // Adjust selector to match the actual button that you'd use to delete student
    await t.click(Selector(`#student-delete-${555555}`));
    
    // Navigate back to the student list to confirm deletion
    await t.navigateTo("/student");
    
    // Check if the student has been successfully deleted
    const updatedTable = Selector('#student-table');
    await t.expect(updatedTable.innerText).notContains("Kusal Mendis");
});
